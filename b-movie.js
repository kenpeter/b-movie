

function doReverseNum(x) {
	// become str
	var y = x.toString();
	// split, reverse arr, join
	var z = y.split("").reverse().join("");
	// back to num
	var aa = Number(z);

	return aa;
}

function beautifulDays(i, j, k) {
	var count = 0;
	for(var num=i; num<=j; num++) {
		var reverseNum = doReverseNum(num);

		/*
		console.log(num);
		console.log(reverseNum);
		console.log('--');
		*/

		var diff = Math.abs(num - reverseNum);
		if(diff % k == 0) {
			count++
		} else {

		}	
	}

	return count;
}

var i = 20; 
var j = 23;
var k = 6;
var out = beautifulDays(i, j, k);
console.log(out);
