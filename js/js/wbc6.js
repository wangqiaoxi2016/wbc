// alert(99);

// alert(88);

// // Alert(77);

// 下面是弹出一个对话框
// alert( 66 );

// var x = 2;

// var y = 3;

// var z = x + y;

// alert(z);

// var age = 20;

// alert(Age);

// 标识符

// var 3a;

// var a;

// var $a;

// var _a;

// var a#;

// var a = "Hello World";

// var a = '早上好~！@#￥%……&*（';

// alert(a);

// var username;

// username = '张三';

// var username = '张三';

// var age = 20;

// alert(username);

// var username = '张三', age = 20, email = 'zs@126.com', gender;

// var var = 3;

// var break = 5;

////////////////////////////////////////////////////////////////////

// var a = 'test';

// a = 8;

// a = 'Hello';

// // console.log(a);
// alert(a);

// var s = "I'm OK";
// var s = 'I'm OK';

// alert(s);

// String   Number   Boolean

// var b = true;

// alert(b);

// var carName = "bmw";

// var x = 3;

// x++; // x = x + 1;

// var y = 5;
// y--; // y = y - 1;

// alert(y);

// var x = 3;

// x += 2; // x = x + 2;

// alert(x);

///////////////////////////////////////////////////////

// var x = 5;

// var y = 3;

// alert(x >= y);

// var x = 3;

// var y = 5;

// var z = 7;

// var f = (x > y) || (x < z);
// var f = (x > y) && (x < z);
// var f = !(x > y);
// var f = !x > y;

// alert(f);

// var age = 12;

// /*if (age > 18) {
// 	alert('成年人');
// 	alert('欢迎你...');
// } else {
// 	alert('未成年人');
// }*/

// if (age < 12) {
// 	alert('儿童');
// } else if (age < 18) {
// 	alert('少年');
// } else if (age < 45) {
// 	alert('青年');
// } else if (age < 59) {
// 	alert('中年');
// } else {
// 	alert('老年');
// }

// var x = 5;

// switch(x) {
// 	case 0: 
// 		alert('星期日');
// 		// break;
// 	case 1: 
// 		alert('星期1');
// 		// break;
// 	case 2: 
// 		alert('星期2');
// 		// break;
// 	case 3: 
// 		alert('星期3');
// 		// break;
// 	case 4: 
// 		alert('星期4');
// 		// break;
// 	case 5: 
// 		alert('星期5');
// 		// break;
// 	case 6: 
// 		alert('星期6');
// 		// break;
// 	default: 
// 		alert('非法日期');
// }

/*alert(1);
alert(1);
alert(1);
alert(1);
alert(1);
alert(1);
alert(1);
alert(1);
alert(1);
alert(1);*/

// console.log('test');

/*console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);*/

/*var total = 0;

for (var i=1; i<=10; i++) {
	total = total + i;
	// console.log(i);
}

console.log(i);*/

// [1, 100] 之间的偶数的和

// var total = 0;

// // for (var i=1; i<=100; i++) {
// // 	if (i % 2 == 0) {
// // 		total += i;
// // 	}
// // }

// for (var i=2; i<=100; i+=2) {
// 	total += i;
// }

// console.log(total);

// [1, 100] 之间的奇数的和

// for (var i=1; i<=100; i++) {
// 	if (i % 2 == 1) {
// 		total += i;
// 	}
// }

// console.log(total);

// var i=101;

// while(i<=100) {
// 	console.log(i);
// 	i++;
// }

// var i=101;

// do {
// 	console.log(i);
// 	i++;
// } while(i<=100);

// for (var i=0; i<10; i++) {
// 	// if (i == 5) {
// 	// 	// break;
// 	// 	continue;
// 	// }

// 	if (i % 2 == 1) {
// 		continue;
// 	}

// 	console.log(i);
// }

// console.log('end for...');


// alert(1);

// try {
// 	Alert(22);
// } catch(e) {
// 	throw '哥们儿，Alert这里出错了...';
// 	// alert(2);
// 	// console.log('an error occured...');
// }

// alert(3);

// function b(x, y, a) {
// 	console.log(arguments);
// 	arguments[2] = 10;
// 	console.log(arguments);
// 	console.log(arguments.length);
// 	alert(a);
// }

// b(1, 2);

// var s = "abddefddkjiddkejskdiud";
// var len = s.length;

// for (var i=0; i<len; i++) {
// 	console.log(s.charAt(i));
// }

// console.log(len);

// 阶乘

// var total = 1;

// for (var i=5; i>0; i--) {
// 	// console.log(i); // 5 4 3 2 1 
// 	total *= i;
// }

// console.log(total);


////////////////////////////////////////////////////////////////////

// var test2;

// console.log(test2);

// test2(); // undefined();
// // test();

// // function test() {
// // 	alert('test');
// // }

// var test2 = function() {
// 	alert('test2');
// };

// test2();
// test();

////////////////////////////////////////////////////////////////////

// var x = 7;

// var y = 8;

// var z = x + y;

// console.log(z);

// var a = 6;

// var b = 9;

// var c = a + b;

// console.log(c);

// function sum(x, y) {
// 	// var x = 7, y = 2;
// 	// console.log('x: ' + x);
// 	// console.log('y: ' + y);
// 	// console.log(x + y);
// 	// var z = x + y;
// 	// return z;

// 	return x + y;

// 	alert('test');  //???

// }

// function sum2(x, y) {
// 	alert(x + y);
// }

// sum(7, 2);

// var r = sum(6, 19); // var x = 15;

// alert(r);

// console.log(r);

// sum(5, 3);

// function sum(x, y, z, a) { // var y;

// 	// console.log(y);

// 	var z = x + y;

// 	// return x + y;
// }

// var r = sum(8, 3);

// console.log(r);

var getTotal = function(to) {
	var total = 0;
	for (var i=0; i<=to; i++) {
		total += i;
	}
	return total;
};

// var r = getTotal(100);
var r = getTotal(10);

console.log(r);


// 完成下面函数，使之返回任意区间内的偶数的和

function getEvenSum(from, to) {
	var total = 0;
	for (var i=from; i<=to; i++) {
		if (i % 2 == 0) {
			total += i;
		}
	}
	return total;

}

var r = getEvenSum(3, 50);
console.log(r);