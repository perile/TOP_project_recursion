function merge(arr1, arr2, mergedArray) {
    if (arr1.length >= 1 && arr2.length >= 1) {
        let i = 0;
        let j = 0;


        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] <= arr2[j]) {
                mergedArray.push(arr1[i]);
                i++;
            } else {
                mergedArray.push(arr2[j]);
                j++
            }
        }

        if (i < j) {
            for (let x = i; x < arr1.length; x++) {
                mergedArray.push(arr1[x]);
            }
        } else {
            for (let x = j; x < arr2.length; x++) {
                mergedArray.push(arr2[x]);
            }
        }

        return mergedArray;
    }
}

function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    };
    let low = 0;
    let high = arr.length - 1;
    let newArr = [];
    if (low < high) {
        let mid = Math.floor((low + high) / 2);
        let leftArr = mergeSort(arr.slice(low, mid + 1));
        let rightArr = mergeSort(arr.slice(mid + 1, high + 1));
        merge(leftArr, rightArr, newArr);
        return newArr;
    }
    return newArr;
}


let a = [3, 2, 1, 13, 8, 5, 0, 1];
console.log(`Original array: [${a}]`)
console.log("mergeSort should return [0, 1, 1, 2, 3, 5, 8, 13]")
console.log(mergeSort(a))