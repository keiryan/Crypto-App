export default function abbreviateNumber(num, fiat) {
  let symbol;
  const fiatSymbol = fiat || '$';
  if(num === null){
    return 'Inf'
  }
  const parsedNum = `${num}`.includes(".") ? `${num}`.split(".")[0] : `${num}`;
  const formula = parsedNum.length % 3;
  switch (parsedNum.length) {
    case 4:
    case 5:
    case 6:
      symbol = "K";
      break;
    case 7:
    case 8:
    case 9:
      symbol = "M";
      break;
    case 10:
    case 11:
    case 12:
      symbol = "B";
      break;
    case 13:
    case 14:
    case 15:
      symbol = "T";
      break;
    default:
      symbol = "Error";
  }
  if (formula > 0) {
    const spreadNum = parsedNum.slice(0, formula + 1);
    if (spreadNum.at(-1) > 0) {
      return `${fiatSymbol + spreadNum.slice(0, spreadNum.length - 1)}.${spreadNum.at(
        -1
      )}`.concat(symbol);
    } else {
      return `${fiatSymbol + spreadNum.slice(0, spreadNum.length - 1)}`.concat(symbol);
    }
  } else {
    return `${fiatSymbol + parsedNum.slice(0, 3)}${symbol}`;
  }
}
