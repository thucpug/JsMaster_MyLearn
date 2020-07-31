var myString = "Hoc Js online";
console.log(myString.slice(4));
console.log(myString.charAt(0));

const PI = 3.14;
console.log(PI.toFixed(3));

/**
 * Attention
 */
//Array
/**
 * shift lay ra phan tu dau mang
 * concat noi 2 array
 */
var language = [
    'thuc', 'mua com', 'com chien'
];
var language1 = [
    'thuc1', 'mua com', 'com chien'
];
console.log(language.shift());
console.log(language.concat(language1));

//function
function showDialog(params) {
    console.log(params);
}
showDialog('thuc');
var temp = function () {
    console.log("thuc");
};
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }
// array.forEach(element => {

// });
// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         const element = object[key];

//     }
// }
// for (const iterator in language1) {
//     console.log(iterator);
// }

//function

showMessage();

function showMessage(params) {
    console.log("thuc log");
};
var showMessage1 = function () {
    console.log("thuc log");
}
showMessage1();

var arrays = [{
        id: 1,
        name: 'thuc1',
        coin: 500
    },
    {
        id: 2,
        name: 'thuc2',
        coin: 400
    },
    {
        id: 3,
        name: 'thuc3',
        coin: 500
    },
    {
        id: 4,
        name: 'thuc4',
        coin: 350
    }
];
var tempArr = arrays.filter(function (item, index) {
    // console.log(index);
    // console.log(item);
    return item.coin > 490;
})
console.log(tempArr);
var tempMap = arrays.map((item, index) => {
    return {
        id: item.id,
        name: item.name,
        coin: item.coin,
        time: new Date().getTime(),
    }

});
console.log(tempMap);