//HackerRank - notas alumnos (1)

// var grades = [73, 67, 38, 33];

// function gradingStudents(grades) {
//     var currGrades = [];

//     for (var i = 0; i <= 60; i++) {

//         if (grades[i] <= 100) {

//             if (grades[i] === 0 || grades[i] < 38) {
//                 currGrades.push(grades[i])
//             } else {
//                 var mathCeil = 0;
//                 if ((grades[i] / 5) != 0) {
//                     mathCeil = (Math.ceil(grades[i] / 5)) * 5;
//                     if (mathCeil - grades[i] < 3) {
//                         currGrades.push(mathCeil)
//                     } else if (mathCeil - grades[i] >= 3) {
//                         currGrades.push(grades[i])
//                     }
//                 }

//             }

//         }
//     }
//     return currGrades;
// }
// console.log(gradingStudents(grades));


//(2) Kangaroos
// function kangaroo(x1, v1, x2, v2) {
//     var ubicInicial1 = x1;
//     var ubicInicial2 = x2;

//     var ubicActual1 = 0;
//     var ubicActual2 = 0;

//     var encuentro = 0;

//     for (var i = 0; i < 10000; i++) {
//         ubicActual1 = ubicInicial1 + (i * v1);
//         ubicActual2 = ubicInicial2 + (i * v2);

//         if (ubicActual1 === ubicActual2 && ubicActual1 != 0) {
//            encuentro = ubicActual1;
//         }
//     }

//     if (encuentro != 0) {
//         return "YES"
//     } else {
//         return "NO"
//     }

// }

// console.log(kangaroo(0,3,4,2));
// console.log(kangaroo(0,2,5,3));

//(3) Array reverse
// function reverseArray(a) {
//     var arrReverse = [];

//     for (var i = a.length-1; i >= 0; i--) {
//         arrReverse.push(a[i]);
//     }
//     return arrReverse;
// }

// console.log(reverseArray([1,4, 3, 2,]));

//(4) Pares de medias
// function sockMerchant(n, ar) {
//     var stock = {};
//     var countPairs = 0;

//     for (var i = 0; i < ar.length; i++) {
//         if (stock.hasOwnProperty(ar[i])) {
//             stock[ar[i]] += 1;
//         } else {
//             stock[ar[i]] = 1;
//         }
//     }
//     var stockObjectKeys = Object.keys(stock);

//     for (var j = 0; j < stockObjectKeys.length; j++) {

//         var key = stockObjectKeys[j];
//         var keyValue = stock[key];

//         console.log(keyValue);

//         if (keyValue % 2 === 0) {
//             countPairs += keyValue / 2;
//         } else {
//                 countPairs += Math.floor(keyValue / 2)
//             }
//     }
//     return countPairs;
// }

//(5) string infinity - 02 de abril de 2019


// function repeatedString(s, n) {
//    var sLength = s.length;
//    var num = Math.floor(n/sLength);
//    var countAstring = 0;
//    var modulus = n % sLength;

//    //cantidad de "a" que hay por cada tanta de strings
//    for (var i = 0; i < s.length; i++) {
//        if( s[i] === "a") {
//            countAstring++;
//        }
//    }

//    var remainder = 0;
//    for (var j = 0; j < modulus; j++) {
//     if( s[j] === "a") {
//        remainder++;
//     }
// }

//     var stringRepeat = countAstring * num + remainder;

//     return stringRepeat;

// }

// repeatedString("aba", 10)

//(6) - 02 de abril de 2019

// function countSwaps(a) {
//     var n = a.length;
//     var swapNum = 0;

//     for (var i = 0; i < n; i++) {

//         for (var j = 0; j < n - 1; j++) {

//             if (a[j] > a[j + 1]) {
//                 var primerElem = a[j];
//                 var segundoElem = a[j+1];

//                 a[j+1] = primerElem;
//                 a[j] = segundoElem;

//                 swapNum += 1;
//             }
//         }



// }
// console.log("Array is sorted in " + swapNum + " swaps");
// console.log("First element: " + a[0]);
// console.log("Last element: " + a[n-1]);
// }

// countSwaps([6,4,4,1])

//(7) - 02 de abril de 2019

// function countingValleys(n, s) {
//     var numPath = 0;
//     var countValleys = 0;

//     for (var i = 0; i < s.length; i++) {

//         if(s[i] === "D" && numPath === 0) {
//             countValleys++;
//         }

//         if (s[i] === "D") {
//             numPath += -1;
//         } else {
//             numPath += 1;
//         }

//     }

//     return countValleys;

// }

// console.log(countingValleys(8,"UDDDUDUU"));

//(8) - 02 de abril de 2019
// function jumpingOnClouds(c) {
// var saltos = 0;
// var i = 0;

//     while ( i < c.length-1) {

//         if(c[i+2] === 1) {
//             i += 1;

//         } else {
//             i += 2;
//         } 

//        saltos++;
//         console.log("Saltos", saltos);
//         console.log("i vale ",i);
//     }

//    return saltos;
// }

// console.log(jumpingOnClouds([ 0, 0, 1, 0, 0, 1, 0 ]));

//(9) - 02 de abril de 2019
// function alternatingCharacters(s) {
//     var countReplacement = 0;

//     for (var i = 0; i < s.length; i++) {
//         var primerElem = s[i];
//         var segundoElem = s[i+1];

//         if(primerElem === segundoElem) {
//             s.replace(s[i], "");
//             countReplacement +=1;

//         }

//     }
//     return countReplacement;
// }

// console.log(alternatingCharacters("AAAA"));

//(10) - 02 de abril de 2019
// function twoStrings(s1, s2) {
//     var chart = false;

//     for (var i = 0; i < s1.length; i++) {

//         if(s2.includes(s1[i])) {
//             chart = true;

//         } 
//     }
//     return chart


// }

// console.log(twoStrings("hello", "world"));

//(11) - 02 de abril de 2019

// function checkMagazine(magazine, note) {
//     var status = "Yes";  
//     var magazineObject = {};

//     for (var i = 0; i < magazine.length; i++) {

//         if (magazineObject.hasOwnProperty(magazine[i])) {
//             magazineObject[magazine[i]] += 1;

//         } else {
//             magazineObject[magazine[i]] = 1;
//         }
//     }

//     for (var j = 0; j < note.length; j++) {

//         if (magazineObject.hasOwnProperty(note[j])) {
//             if (magazineObject[note[j]] > 0) {
//                 magazineObject[note[j]] -= 1;
//             } else {

//                 status = "No";
//             }
//         } else {
//             status = "No";
//         }
//     }
//     console.log(status);
// }


// checkMagazine(['give', 'me', 'one', 'grand', 'today', 'night'], ['give', 'one', 'grand', 'today']);

//(12)  - 02 de abril de 2019 - solucion usando el metodo sort()
// function maximumToys(prices, k) {
//     var budget = k;
//     var countCompras = 0;

//     var pricesSort = prices.sort(function (a, b) { return a - b });


//     for (var i = 0; i < pricesSort.length; i++) {
//         if (budget > 0 && budget > pricesSort[i]) {
//             budget -= pricesSort[i];
//             countCompras++;

//         }

//     }

//     return countCompras;
// }


// console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));

//(12)  - 02 de abril de 2019 - solucion ordenandolo manualmente - por que esto rompe los otros test?
// function maximumToys(prices, k) {
//     var budget = k;
//     var countCompras = 0;

//     for (var i = 0; i < prices.length; i++) {

//         for (var j = 0; j < prices.length - 1; j++) {

//             if (prices[j] > prices[j + 1]) {
//                 var primerElem = prices[j];
//                 var segundoElem = prices[j + 1];

//                 prices[j + 1] = primerElem;
//                 prices[j] = segundoElem;
//             }
//         }
//     }

//     for (var i = 0; i < prices.length; i++) {
//         if (budget > 0 && budget > prices[i]) {
//             budget -= prices[i];
//             countCompras++;

//         }

//     }

//     return countCompras;
// }


// console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));

//(13)  - 02 de abril de 2019 

// function makeAnagram(a, b) {
//     var aDic = {};
//     var bDic = {};
//     var countDel = 0;

//     for (var i = 0; i < a.length; i++) {
//         if (aDic.hasOwnProperty(a[i])) {
//             aDic[a[i]] += 1;
//         } else {
//             aDic[a[i]] = 1;
//         }
//     }

//     var aDicKeys = Object.keys(aDic);

//     for (var j = 0; j < b.length; j++) {
//         if (bDic.hasOwnProperty(b[j])) {
//             bDic[b[j]] += 1;
//         } else {
//             bDic[b[j]] = 1;
//         }
//     }

//     var bDicKeys = Object.keys(bDic);

//     for (var m = 0; m < aDicKeys.length; m++) {
//         for (var t = 0; t < bDicKeys.length; t++) {


//         }    }

//     for (var m = 0; m < aDicKeys.length; m++) {
//         var aKey = aDicKeys[m];
//         var aKeyValue = aDic[aKey];

//         if (bDic.hasOwnProperty(aKey)) {

//             var bKey = aKey;
//             var bKeyValue = bDic[bKey]


//             //si existe y tienen el mismo valor
//             if (aKeyValue === bKeyValue) {

//             } else {
//                 //si existe pero no tienen el mismo valor
//                 if (aKeyValue < bKeyValue) {

//                 } else {
//                     countDel += Math.abs(aKeyValue - bKeyValue);
//                     aDic[aKey] = bDic[bKey];
//                 }

//             }

//         } else {
//             //si no existe
//             delete aDic[aKey];
//             countDel += aKeyValue;

//         }

//     }

//     console.log(aDic);

//     for (var p = 0; p < bDicKeys.length; p++) {
//         var bKey = bDicKeys[p];
//         var bKeyValue = bDic[bKey];

//         if (aDic.hasOwnProperty(bKey)) {

//             var aKey = bKey;
//             var aKeyValue = aDic[aKey]

//             if (aKeyValue === bKeyValue) {

//             } else {
//                 countDel += Math.abs(aKeyValue - bKeyValue);

//             }

//         } else {
//             delete bDic[bKey];
//             countDel += bKeyValue;

//         }

//     }

//     return countDel;

// }

// //console.log(makeAnagram("cde", "abc"));
// console.log(makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke"));
//console.log(makeAnagram("famor", "amorrr"));

//(14)  - 06 de abril de 2019 

//VER RECURSIVIDAD VS ITERACION

// function superReducedString(s) {

//     if (s === "") {
//         return "Empty String";
//     }
    

//     var newString = "";
//     var i = 0;

//     while (i < s.length) {
//         if (s[i] === s[i + 1]) {
//             i += 2;
//         } else {
//             newString = newString.concat(s[i]);
//             i++;
//         }
//     }

//     if(s === newString) {
//         return s;
//     } else {
//         return superReducedString(newString);
//     }

// }
// console.log(superReducedString("aaabccddd"));
// console.log(superReducedString("aa"));
// console.log(superReducedString("baab"));


// function holaRecursivo(i) {
//     console.log(i);
//     i++;
//      if(i<10){
//          hola(i);
//      } else {

//      }
// }

// function holaIterativo(i) {    
//     while (i<10) {
//         console.log(i);
//         i++;
//     }
// }

// function superReducedString(s) {

//     var actual = s; //baab
//     var next = s;
//     do  {
//         actual = next;
//         if (actual === "") {
//             return "Empty String";
//         }

//         var newString = "";
//         var i = 0;

//         while (i < actual.length) {
//             if (actual[i] === actual[i + 1]) {
//                 i += 2;
//             } else {
//                 newString = newString.concat(actual[i]);
//                 i++;
//             }
//         }
//         next = newString;
//     } while (actual != next)

//     return newString;
// }
// console.log(superReducedString("aaabccddd"));
// console.log(superReducedString("aa"));
// console.log(superReducedString("baab"));

//COMBINACION - CARTAS
var  array = [2, 1, 1, 0];

//var  array = [3,3,6,1,3,9,4,2,13,5,5,1,3,11,2,1,0];
array = array.sort();
var combinaciones = 1; // lo inicialice en 1 porque al ser una multiplicacion si le ponia cero, siempre iba a dar cero.

// para cada pick
for ( var i = 0; i < array.length; i++) {
    var count = 0;

    for ( var j = 0 + i; j < array.length; j++ ) {
    
        if (array[j] <= i) {
            console.log("array[j] vale: ", array[j], "<=", i);
          count += 1;
        }

    }

    combinaciones *= count;
}

console.log(combinaciones);
