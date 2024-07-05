// "use client"
// import React from 'react';
// import { Textarea, CircularProgress } from "@nextui-org/react";
// import { Icon } from '@iconify/react/dist/iconify.js';
// const acceptables = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
// import useToastr from '@/hooks/useToastr';
// import { uploadToIPFS, uploadToPinata } from '@/utils/methods';
// import MintSuccessModal from './mintSuccessModal';
// import { SERVER_URL, chains, contracts } from '@/constants/config';
// import { Contract, providers, utils } from 'ethers';
// import useActiveWeb3 from '@/hooks/useActiveWeb3';
// // rainbow modal
// import { useConnectModal } from "@rainbow-me/rainbowkit";
// import { useBalance } from "wagmi";
// import axios from 'axios';

// interface IProps {
//     close: () => void
// }

// const FreeMint = ({ close }: IProps) => {
//     //hooks
//     const { showToast } = useToastr();
//     //states
//     const [name, setName] = React.useState<string>("");
//     const [description, setDescription] = React.useState<string>("");
//     const [preview, setPreview] = React.useState<string>("");
//     const [loading, setLoading] = React.useState<boolean>(false);
//     const [percent, setPercent] = React.useState<number>(0);
//     const [step, setStep] = React.useState<number>(2);
//     const [txHash, setTxHash] = React.useState<string>("");
//     // nft information
//     const [nftNumber, setNftNumber] = React.useState<number>(0);
//     const [currentFee, setCurrentFee] = React.useState<number>(0);
//     const [myFreeMintCount, setMyFreeMintCount] = React.useState<number>(0);
//     const [myFeeMintCount, setMyFeeMintCount] = React.useState<number>(0);
//     // web3
//     const { address, isConnected, isConnecting, isReconnecting, connector, chainId, signer } = useActiveWeb3();// hook address, isconnected, inConnecting
//     const _balance = useBalance({ address });
//     // modal hook
//     const { openConnectModal } = useConnectModal ();

//     const initialize = async (_address?: string, _provider?: any) => {
//         const chainId = 11155111;
//         const _chain = chains[chainId];
//         // web3 provider
//         const provider = _provider ?? new providers.JsonRpcProvider(_chain.rpc);
//         const { address: contractAddress, abi } = contracts[chainId].nft;
//         const _contract = new Contract(contractAddress, abi, provider);
        
//         if (!_address) {
//             const [
//                 _tokenNumber,
//                 _mintFee
//             ] = await Promise.all([
//                 _contract.tokenNumber (),
//                 _contract.getCurrentMintFee ()
//             ]);
//             setNftNumber (Number(_tokenNumber));
//             setCurrentFee (Number(utils.formatEther(_mintFee)));
//         } else {
//             const [
//                 _tokenNumber,
//                 _mintFee,
//                 _myFreeMintCount,
//                 _myFeeMintCount
//             ] = await Promise.all([
//                 _contract.tokenNumber (),
//                 _contract.getCurrentMintFee (),
//                 _contract.freeCreations(_address),
//                 _contract.feeCreations(_address)
//             ]);
//             console.log({
//                 myFreeMintCount
//             })
//             setNftNumber (Number(_tokenNumber));
//             setCurrentFee (Number(utils.formatEther(_mintFee)));
//             setMyFreeMintCount (Number(_myFreeMintCount));
//             setMyFeeMintCount (Number(_myFeeMintCount));
//         }
//     }
    
//     React.useEffect(() => {
//         if (address && signer) {
//             initialize (address, signer);
//         }
//     }, [address, signer]);


//     React.useEffect(() => {
//         initialize ();
//     }, []);

//     const file2String = (file: File) => new Promise<string>((resolve, reject) => {
//         try {
//             const reader = new window.FileReader();
//             reader.readAsDataURL(file);
//             reader.onloadend = () => {
//                 const _file: string = String(reader.result);
//                 resolve (_file);
//             };
//         } catch (err) {
//             reject ("");
//         }
//     });

//     const onFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
//         try {
//             if (!event.target.files) throw "no files";
//             const files: string[] = await Promise.all(Object.values(event.target.files).map((_file: File) => file2String (_file)))
//             console.log("read")
//             for (let index = 0; index < files.length; index++) {
//                 const file = files[index];
//                 const _imageURL = await uploadToPinata(
//                     file,
//                     ({ loaded, total }: { loaded: number, total: number }) => {}
//                 ).catch((err: any) => {
//                     console.log(err);
//                     throw "File upload failed to IPFS. Please retry.";
//                 });
//                 console.log(_imageURL)
//                 await axios.post(`${SERVER_URL}/nft/add`, {
//                     image: _imageURL,
//                     name: '#mars',
//                     description: `It's not just hype; it's the heartbeat of our future Martian empire. Packed with utility, steeped in culture, $WENMars is the crypto rebellion we've been waiting for. Ready to rule the red planet? Grab $WENMars, join the charge, and let's plant our flag on Mars. Get in, strap up, we'e launching!`
//                 }).then(res => {
//                     console.log(index + "  minted")
//                 });
                
//             }
 
//             // const file: File = event.target.files[0];

//             // if (!file) throw "Emptry file";
//             // if (!acceptables.includes(file.type)) throw "Invalid Image file.";
//             // if (file.size > 32 * 1024 * 1024)
//             //     throw "Overflow maximum file size (32MB).";
//             // //   setNewAvatar(file);
            
//         } catch (err) {
//             //   showToast(String(err), "warning");
//             setPreview("");
//         }
//     };

//     const onMint = async (_signer: any) => {
//         try {
//             setLoading(true);
//             // step1 upload image to pinata
//             setStep (1);
//             setPercent (1);
//             const _imageURL = await uploadToPinata(
//                 preview,
//                 ({ loaded, total }: { loaded: number, total: number }) => {
//                     console.log({ loaded, total })
//                     setPercent(Math.floor(loaded * 100 / total))
//                 }
//             ).catch((err: any) => {
//                 console.log(err);
//                 throw "File upload failed to IPFS. Please retry.";
//             });
//             console.log({ _imageURL })
//             // upload metadata to IPFS
//             setStep (2);
//             setPercent (0);
//             const _metaData = JSON.stringify({
//                 name,
//                 description,
//                 assetType: "image",
//                 image: _imageURL,
//             });
//             const _metaURL = await uploadToIPFS(
//                 new File(
//                     [
//                         _metaData
//                     ], "metadata.json"
//                 ),
//                 ({ loaded, total }: { loaded: number; total: number }) => {
//                     console.log({ loaded, total })
//                     setPercent(Math.floor((loaded * 100) / total));
//                 }
//             ).catch(err => {
//                 console.log(err);
//                 throw "Project Data upload failed to IPFS. Please retry.";
//             });
//             console.log({ _metaURL });
//             // mint NFT
//             setStep (3);
//             setPercent (0);
//             const { address: contractAddress, abi } = contracts[Number(chainId)].nft;
//             const _contract = new Contract(contractAddress, abi, signer);
//             const _currentMintFee = await _contract.getCurrentMintFee();
//             console.log({
//                 _currentMintFee: Number(_currentMintFee),
//                 _balance: _balance.data?.value
//             })
//             if (Number(_currentMintFee) > Number(_balance.data?.value)) {
//                 throw showToast ("You dont have enough ETH to pay for mint fee", "warning");
//             }
//             const _tx = await _contract.mint(_metaURL, { value: _currentMintFee });
//             await _tx.wait ();
//             setTxHash (_tx.hash);
//             showToast ("Mars NFT has been minted successfully", "success");
//         } catch (err) {
//             if (String(err).includes("user rejected transaction")) {
//                 showToast ("Rject the transaction", "warning");
//             }
//             setLoading(false);
//         }
//     }

//     const handleMintButtonClick = () => {
//         if (loading) {
//             return;
//         } else if (!name) {
//             showToast("Please input NFT name", "warning");
//         } else if (!description) {
//             showToast("Please input NFT description", "warning");
//         } else if (!preview) {
//             showToast("Please select image to upload", "warning");
//         } else if (!signer) {
//             showToast("Please connect your wallet", "warning");
//         } else {
//             onMint(signer);
//         }
//     }

//     const _renderCircleProgress = (rate: number) => (
//         rate > 0 ?
//         <div className='relative'>
//             <CircularProgress
//                 classNames={{
//                     // svg: "w-16 h-16 drop-shadow-md",
//                     indicator: "stroke-white",
//                     track: "stroke-white/10",
//                 }}
//                 value={rate}
//                 strokeWidth={3}
//                 // showValueLabel={true}
//                 size='lg'
//             />
//             <span className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-xs font-sans'>{Math.floor(rate)}%</span>
//         </div> : 
//         <CircularProgress
//             classNames={{
//                 // svg: "w-16 h-16 drop-shadow-md",
//                 indicator: "stroke-white",
//                 track: "stroke-white/10",
//             }}
//             className='spin'
//             strokeWidth={3}
//             size='lg'
//         />
//     )

//     React.useEffect(() => {
//         if (txHash) {
//             setLoading (false);
//         }
//     }, [txHash]);

//     const _renderProgress = () => (
//         <div className='fixed top-0 left-0 flex items-center justify-center md:pt-0 pt-24 overflow-y-scroll right-0 bottom-0 z-40 px-1 md:px-4'>
//             <div onClick={close} className='fixed top-0 left-0 right-0 bottom-0 bg-white/1 backdrop-filter backdrop-blur-[15px] z-50'></div>
//             <div className='w-full lg:w-1/2 w1450:w-2/5 mx-auto z-50'>
//                 <div className='w-full rounded-2xl bg-gradient-to-br from-[#2D2D2D]/80 to-[#2D2D2D]/10 p-1'>
//                     <div className='w-full flex flex-col gap-4 relative text-white rounded-2xl h-full p-5 bg-gradient-to-br from-[#010239] to-[#010239]/80 z-40'>
//                         <div className='text-center text-lg md:text-xl'>MINT <span className='text-green-500'>MARS</span> NFT</div>
//                         <div className='flex gap-3 items-center'>
//                             { 
//                                 step < 1 ? <span className='w-12 h-12 flex items-center justify-center'><Icon icon="fluent:document-queue-multiple-24-regular" className='text-4xl'/></span> :
//                                 step > 1 ? <span className='w-12 h-12 flex items-center justify-center'><Icon icon="octicon:check-16" className='text-4xl'/></span> :
//                                 _renderCircleProgress (percent)
//                             }
//                             <div className='text-xs sm:text-lg'>Uploading Image to IPFS ...</div>
//                         </div>
//                         <div className='flex gap-3 items-center'>
//                             { 
//                                 step < 2 ? <span className='w-12 h-12 flex items-center justify-center'><Icon icon="fluent:document-queue-multiple-24-regular" className='text-4xl'/></span> :
//                                 step > 2 ? <span className='w-12 h-12 flex items-center justify-center'><Icon icon="octicon:check-16" className='text-4xl'/></span> :
//                                 _renderCircleProgress (percent)
//                             }
//                             <div className='text-xs sm:text-lg'>Uploading Metadata to IPFS ...</div>
//                         </div>
//                         <div className='flex gap-3 items-center'>
//                             { 
//                                 step < 3 ? <span className='w-12 h-12 flex items-center justify-center'><Icon icon="fluent:document-queue-multiple-24-regular" className='text-4xl'/></span> :
//                                 step > 3 ? <span className='w-12 h-12 flex items-center justify-center'><Icon icon="octicon:check-16" className='text-4xl'/></span> :
//                                 _renderCircleProgress (percent)
//                             }
//                             <div className='text-xs sm:text-lg'>Minting NFT ...</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )

//     const { mintAvailable, message } = React.useMemo (() => {
//         if (nftNumber <= 999 && myFreeMintCount === 1) {
//             return {
//                 mintAvailable: false,
//                 message: 'Already minted 1 NFT for free'
//             }
//         } else if (nftNumber > 1000 && myFeeMintCount > 5) {
//             return {
//                 mintAvailable: false,
//                 message: 'Already minted 5 NFTs with fees'
//             }
//         } else {
//             return {
//                 mintAvailable: true,
//                 message: ''
//             }
//         }
//     }, [nftNumber, myFreeMintCount, myFeeMintCount]);

//     const _renderMintButton = () => (
//         isConnected ?
//         <button onClick={handleMintButtonClick} className='bg-[#CB4913] rounded-xl text-sm md:text-xl p-2 w1450:p-4 hover:opacity-60 flex gap-2 justify-center items-center'>
//             {loading && <div className='flex justify-center items-center h-1'><Icon icon="eos-icons:three-dots-loading" className='text-6xl flex-none' /></div>}
//             MINT
//         </button> :
//         <button onClick={openConnectModal} className='bg-[#CB4913] rounded-xl text-sm md:text-xl p-2 w1450:p-4 hover:opacity-60 flex gap-2 justify-center items-center'>
//             <Icon icon="fluent:wallet-credit-card-24-filled" className='text-2xl'/>
//             Connect wallet
//         </button>
//     )
 
//     return (
//         <div className='fixed top-0 left-0 md:flex items-center md:pt-0 pt-24 overflow-y-scroll right-0 bottom-0 z-40 px-1 md:px-4'>
//             <div onClick={close} className='fixed top-0 left-0 right-0 bottom-0 bg-white/1 backdrop-filter backdrop-blur-[8px] z-30'></div>
//             <div className='w-full lg:w-2/3 w1450:w-1/2 mx-auto'>
//                 <div className='w-full rounded-2xl bg-gradient-to-br from-[#2D2D2D]/80 to-[#2D2D2D]/10 p-2'>
//                     <div className='w-full relative text-white rounded-2xl h-full p-5 bg-gradient-to-br from-[#010239] to-[#010239]/80 z-40'>
//                         <h1 className='text-xl md:text-3xl'><span className='text-green-600'>Mars</span> NFT MINT</h1>
//                         <div className='grid  sm:grid-cols-2 items-center'>
//                             <label htmlFor='nft' className='w-full aspect-square md:pr-14 pt-5 cursor-pointer'>
//                                 <p className='pb-2 px-2 text-sm'>*minted: {nftNumber}/5000</p>
//                                 { address && <p className='pb-2 px-2 text-sm -mt-1'>*my minted: {myFreeMintCount + myFeeMintCount}</p> }
//                                 {
//                                     preview ?
//                                         <div className='bg-[#10113f] w-full h-full rounded-xl flex justify-center items-center p-4'>
//                                             <img
//                                                 src={preview}
//                                                 className='rounded-xl w-full h-full'
//                                             />
//                                         </div> :
//                                         <div className='bg-[#10113f] relative w-full h-full rounded-xl animate-pulse flex justify-center items-center'>
//                                             <img
//                                                 src='/img/ufo.png'
//                                                 className='rounded-xl aspect-auto h-4/5'
//                                             />
//                                             <div className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-1 items-center'>
//                                                 <Icon icon="line-md:upload-loop" className='text-9xl' />
//                                                 <p className='text-sm xs:text-md text-center'>Click to select Image</p>
//                                             </div>
//                                         </div>
//                                 }
//                                 <input hidden id="nft" type="file" onChange={onFileChange} multiple={true}/>
//                             </label>
//                             <div className='flex flex-col gap-4 pt-10 sm:pl-4 md:pl-0'>
//                                 <div className='flex flex-col gap-1'>
//                                     <h3 className='px-2 text-sm md:text-xl'>NAME</h3>
//                                     <input
//                                         placeholder='nft name'
//                                         className='text-sm w1450:text-lg p-2 w1450:p-3 bg-white/5 rounded-lg w-full outline-white/10 border-none outline-none'
//                                         value={name}
//                                         onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
//                                     />
//                                 </div>
//                                 <div className='flex h-full flex-col gap-1'>
//                                     <h3 className='px-2 text-sm md:text-xl'>Description</h3>
//                                     <Textarea
//                                         isRequired
//                                         label=""
//                                         value={description}
//                                         onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
//                                         labelPlacement="outside"
//                                         variant="faded"
//                                         placeholder="Enter NFT description"
//                                         className="w-full"
//                                         minRows={6}
//                                         classNames={{
//                                             inputWrapper: 'bg-white/5 outline-white/10',
//                                         }}
//                                     />
//                                 </div>
//                                 <div className='mt-2'>
//                                     MINT Fee:  <span className='text-green-500'>{currentFee}ETH</span> = $100
//                                 </div>
//                                 {
//                                     mintAvailable ? 
//                                     _renderMintButton () :
//                                     <div className='text-center flex gap-1 items-center break-all text-wrap text-red-600'><Icon icon="mdi:chat-warning" className='text-3xl' hFlip={true}/>{message}</div>
                                    
//                                 }
//                             </div>
//                         </div>
//                         <img
//                             src='/img/martian.png'
//                             className='absolute w-[100px]  md:w-[150px] lg:w-[200px] top-0 right-0 -translate-y-1/2 lg:translate-x-1/2 translate-x-1/3'
//                         />
//                     </div>
//                 </div>
//             </div>

//             {loading && _renderProgress()}
//             {txHash && <MintSuccessModal close={() => setTxHash("")} hash={txHash} name={name} description={description} preview={preview}/>}
//         </div>
//     )
// }

// export default FreeMint;