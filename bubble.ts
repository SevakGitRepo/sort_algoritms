let array: Array<Number> = [2, 32, -5, 0, 52, 3, 1, 84, 63, 21, 2];

function bubbleSort(array: Array<Number>) : Array<Number>{
    for (let i = 0; i < array.length; i++) {
        let stopLoop: boolean = true;
        for (let j = 0; j < array.length-i-1; j++) {
            if(array[j]>array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                stopLoop = false;
            }
        }
        if(stopLoop)
            break;
    }
    return array;
}

console.log(bubbleSort(array).toString());