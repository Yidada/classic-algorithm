var Array = [1, 2, 4, 5, 7, 8, 9];

function insert(array, num) {
    for (var i = array.length - 1; i >= 0; i--) {
        
        if (num>array[i]) {
        	array.splice(i+1,0,num)
            break;
        }
    }
    return array;
}

Array=insert(Array,3)
console.log(Array);
