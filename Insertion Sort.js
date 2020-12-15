let arr = [7, 8, 5, 2, 4, 6, 3]
for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];

    let sorted = i - 1;

    while ((sorted > -1) && (curr < arr[sorted])) {
        arr[sorted + 1] = arr[sorted];
        sorted--;
    }
    arr[sorted + 1] = curr;
}
console.log(arr)