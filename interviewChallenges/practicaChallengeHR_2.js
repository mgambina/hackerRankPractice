// //HourglassSum

// const arr = [ [ 1, 1, 1, 0, 0, 0 ],
// [ 0, 1, 0, 0, 0, 0 ],
// [ 1, 1, 1, 0, 0, 0 ],
// [ 0, 0, 2, 4, 4, 0 ],
// [ 0, 0, 0, 2, 0, 0 ],
// [ 0, 0, 1, 2, 4, 0 ] ]

// function hourglassSum(arr) {

//     //const arr = [[1,2,3], [4,5,6], [7,8,9]];

// //arr[0][0] + arr[0][1] + arr[0][2] + arr[1][1]+ arr[2][0] + arr[2][1] + arr[2][2]

// let sumaArray = [];

// for (let i = 1; i < 5; i++ ) {
//     for (let j = 1; j < 5; j++) {

//          let suma = arr[i -1][j-1] + arr[i -1][j] + arr[i -1][j+1] + arr[i][j]+ arr[i+1][j-1] + arr[i + 1][j] + arr[i +1][j + 1];

//        sumaArray.push(suma);
//     }

// }

// let sumaArrayMax = Math.max.apply(null,sumaArray);

// return sumaArrayMax;


// }


//Find the number
//unsorted array de n elements
//si el elemento k esta o no en la array
//function findNumber(arr, k)
//return YES or NO si esta k en arr
//sample input 0 = [5,1,2,3,4,5] y k = 1 y sample input 1 = [3,2,3,1] y k = 5;


// function findNumber (arr, k) {
//    if (arr.includes(k)) {
//        return "YES";
//    } else {
//        return "NO"
//    }

// }

// console.log(findNumber([3,2,3,1],5));

//Left rotation - version recursiva

// const a = [1,2,3,4,5];
// const d = 4;


// function leftShifted (arr, shiftsPendientes) {

// if ( shiftsPendientes === 0) {
//     return arr.toString().replace(/,/g," ");;
// }

// const itemShifted = arr.shift();
// arr.push(itemShifted)

// return leftShifted(arr,shiftsPendientes-1);

// }

// console.log(leftShifted(a,d))

//Left rotation - version iterativa

// for (let i = 0; i < d; i++) {

//     const itemShifted = a.shift();
//     a.push(itemShifted)
// }

// console.log(a.toString().replace(/,/g," "));

//Breaking records

// const scores = [ 10, 5, 20, 20, 4, 5, 2, 25, 1 ];

// let total = []
// let min = scores[0];
// let max = scores[0]

// let maxCount = 0; 20
// let minCount = 0; 5

// for (let i = 1; i < scores.length; i++) {

//     if (scores[i] > max) {
//         maxCount += 1;
//         max = scores[i]
//     } else if (scores[i] < min) {
//         minCount += 1;
//         min = scores[i]
//     } 
// }

// total.push(maxCount);
// total.push(minCount);

// console.log(total.toString().replace(/,/g," "));

//migratory Birds



function migratoryBirds(arr) {
    let type1 = 0;
    let type2 = 0;
    let type3 = 0;
    let type4 = 0;
    let type5 = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            type1 += 1;
        } else if (arr[i] === 2) {
            type2 += 1;
        } else if (arr[i] === 3) {
            type3 += 1;
        } else if (arr[i] === 4) {
            type4 += 1;
        } else if (arr[i] === 5) {
            type5 += 1;
        }
    }

    let arrTypes = [];

    arrTypes.push(type1);
    arrTypes.push(type2);
    arrTypes.push(type3);
    arrTypes.push(type4);
    arrTypes.push(type5);

    let arrTypesMax = Math.max.apply(null,arrTypes);

    console.log("max", arrTypesMax);

    return arrTypes.indexOf(arrTypesMax) + 1;


}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));