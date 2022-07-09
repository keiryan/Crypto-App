export default function chartReducer(arr) {
    let reducedArray = [];
    for (let i = 0; i < arr.length; i += 10) {
        reducedArray.push(arr[i]);
    }
    return reducedArray;
}