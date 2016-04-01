//冒泡排序
var Array = [3,2,5,7,1,4,8,10];

//原始的冒泡排序
function Bubble(array) {
	var i,j,temp;
	for (var i = array.length - 1; i >= 0; i--) {
		for (var j = array.length - 1; j >= 0; j--) {
			if(array[i]>array[j]){
				temp = array[i];
				array[i]=array[j];
				array[j]=temp;
			}
		}
	}
	return array;
}




//改进版冒泡排序
function Bubble2(array) {
	var i,j,temp;
	var flag = 1;
	for (var i = array.length - 1; i >= 0&&flag; i--) {
		flag=0;
		for (var j = array.length - 1; j >= 0; j--) {
			if(array[i]>array[j]){
				temp = array[i];
				array[i]=array[j];
				array[j]=temp;
			}else{
				flag=1;
			}
		}
	}
	return array;
}

Array = Bubble2(Array);
console.log(Array);