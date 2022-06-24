export function getMarketCap(value){

    // const numberLegend = {
    //     0: '',
    //     1: '',
    //     2: '',
    // }

    // console.log(value)
    const parsedValue = `${value}`.slice(0, `${value}`.indexOf('.'))
    const numberLength = parsedValue.toString().length;
    const numberSplit = parsedValue.slice(0, 3)
    let returnValue;
    
    numberLength === 4 && (returnValue = `${numberSplit[0]}.${numberSplit.slice(1)}` + 'K')
    numberLength === 5 && (returnValue = `${numberSplit.slice(0, 2)}.${numberSplit[2]}` + 'K')
    numberLength === 6 && (returnValue = `${value}`.slice(0, 3) + 'K')
    numberLength === 7 && (returnValue = `${numberSplit[0]}.${numberSplit.slice(1)}` + 'M')
    numberLength === 9 && (returnValue = `${numberSplit[0]}.${numberSplit.slice(1)}` + 'B')
    numberLength === 10 && (returnValue = `${numberSplit[0]}.${numberSplit.slice(1)}` + 'B')
    numberLength === 11 && (returnValue = `${numberSplit[0]}.${numberSplit.slice(1)}` + 'B')
    numberLength === 12 && (returnValue = `${numberSplit[0]}.${numberSplit.slice(1)}` + 'T')
    numberLength === 13 && (returnValue = `${numberSplit[0]}.${numberSplit.slice(1)}` + 'T')
    

    //Expect number to be float and handle all cases


    // switch(`${value}`.length){
    //     case 5: `${value}`.slice(0, -3) + 'K'
    // }

    return returnValue
}