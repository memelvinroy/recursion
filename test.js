function fibs(n) {
    let arr = [0, 1];
    while (arr.length < n) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    return arr.slice(0, n);
}


console.log(fibs(8));



function fibsRec(n) {
    if (n <= 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        let prev = fibsRec(n - 1);
        return prev.concat(prev[prev.length - 1] + prev[prev.length - 2]);
    }
}


console.log(fibsRec(8));
