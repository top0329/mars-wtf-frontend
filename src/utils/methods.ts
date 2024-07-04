import axios from "axios";
import { PINATA_KEY } from "@/constants/config";
/**
 * render string with ,,,
 * @param value 10,000,000
 * @returns 
 */
export const _renderNumber = (value: number | string = 0) => {
  if (Number(value) === 0 && isNaN(Number(value))) return "0";
  let [num, _decimal] = String(value).split(".");
  let _num = "";
  let j = 1;
  for (let i = num.length - 1; i >= 1; i--, j++) {
    _num += num[i];
    if (j % 3 === 0) _num += ",";
  }
  _num += num[0];
  let str = _num.split("").reverse().reduce((acc: string, item: string) => acc += item, "");
  if (_decimal) str += `.${_decimal.substring(0,2)}`;

  return str;
};

export const uploadToPinata = async (data: string, onProgress?: any) => {
  try {
    const formData = new FormData();
    const base64Response = await fetch(data);
    const newBlob = await base64Response.blob();
    formData.append("file", newBlob);
    const { data: res } = await axios
      .post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        headers: {
          //@ts-ignore
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: `Bearer ${PINATA_KEY}`,
        },
        onUploadProgress: onProgress,
      });
    return Promise.resolve(`https://ipfs.io/ipfs/${res.IpfsHash}`);
  } catch (err) {
    console.log(err)
    return Promise.reject("failed")
  }
};

/**
 * 
 * @param {*} data data to upload file to IPFS
 * @param {*} progress callback to display progress (progress: number) => {}
 * @returns Promise
 */
export const uploadToIPFS = (data: File, progress: any) => new Promise(async(resolve, reject) => {
  const formData = new FormData();
  formData.append('file', data)
  formData.append('pinataMetadata', JSON.stringify({ name: 'mars.wtf' }));
  formData.append('pinataOptions', JSON.stringify({ cidVersion: 0 }));
  
  const res = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
      maxBodyLength: Infinity,
      headers: {
          //@ts-ignore
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          'Authorization' : `Bearer ${PINATA_KEY}`,
      },
      onUploadProgress: progress
  }).catch(err => {
      reject("IPFS projectInfo upload failed");
  });
  //@ts-ignore
  resolve("https://ipfs.io/ipfs/" + res.data.IpfsHash);
});
