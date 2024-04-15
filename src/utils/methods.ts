/**
 * render string with ,,,
 * @param value 10,000,000
 * @returns 
 */
export const _renderNumber = (value: number | string = 0) => {
  if (Number(value) === 0 && isNaN(Number(value))) return 0;
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
