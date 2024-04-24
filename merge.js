function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let [leftIndex, rightIndex] = [0, 0];
    while (leftIndex < left.length && rightIndex < right.length) {
        result.push(left[leftIndex] < right[rightIndex] ? left[leftIndex++] : right[rightIndex++]);
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); 
console.log(mergeSort([105, 79, 100, 110]));      
