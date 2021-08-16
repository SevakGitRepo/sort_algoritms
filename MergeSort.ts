let array: number[] = [2, 31, -5, 0, 52, 3, 1, 84, 63, 21, 22];


function mergeSort(array: number[], start:number, end:number): void {
    if (start < end) {
            let middle = Math.floor(start / 2 + end / 2);
            mergeSort(array, start, middle);
            mergeSort(array, middle+1, end);

            merge(array, start, middle, end);
        }
    }
function merge(array: number[], start: number, middle: number, end: number): void {
    let l = middle - start + 1;
    let r = end - middle;

    let lArray = new Array(l);
    let rArray = new Array(r);

    for (let i = 0; i < l; i++)
        lArray[i] = array[start + i];
    for (let i = 0; i < r; i++)
        rArray[i] = array[middle + 1 + i];

    let i = 0;
    let j = 0;
    let k = start;

    while (i < l && j < r) {
        if (lArray[i] <= rArray[j]) {
            array[k++] = lArray[i];
            i++;
        } else {
            array[k++] = rArray[j];
            j++;
        }
    }

    while (i < l) {
        array[k++] = lArray[i];
        i++;
    }

    while (j < r) {
        array[k++] = rArray[j];
        j++;
    }
}

mergeSort(array, 0, array.length-1);
console.log(array.toString());