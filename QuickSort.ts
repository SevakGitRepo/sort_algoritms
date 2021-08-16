let array: Array<Number> = [2, 31, -5, 0, 52, 3, 1, 84, 63, 21, 2];

function quickSort(array: Array<Number>, left: number, right: number) : void{
    if(left>=right){
        return;
    }else {
        let pivot = array[Math.floor(Math.random()*(right - left)+left)];
        let index = changePositionElement(array, right, left, pivot);
        quickSort(array, left, index-1);
        quickSort(array, index, right);

    }
}
function changePositionElement(array, right, left, pivot): number{
    while (left<=right){
        while (array[left]<pivot){
            left++;
        }
        while (array[right]>pivot){
            right--;
        }
        if(left<=right){
            let temp = array[right];
            array[right] = array[left];
            array[left] = temp;
            left++;
            right--;
        }
    }
    return left;
}
quickSort(array, 0, array.length-1);
console.log(array.toString());