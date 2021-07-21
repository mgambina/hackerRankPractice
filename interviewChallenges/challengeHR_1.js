//Equipos
//grupos de 3, tiene que tener al menos un hombre (m) y una mujer(w) si o si
//devolver un integer con la cantidad de combinaciones posibles

function diverseDeputation(m, w) {

    var maleCount = m;
    var femaleCount = w;
    var maleComb = 0;
    var femaleComb = 0;

    //Si alguno de los dos es cero, no puede haber combinacion asi que tiene que retornar cero
    if (maleCount === 0 || femaleCount === 0) {
        return 0;
    }

    //formula del factorial
    function factorial(param) {
    
        if (param === 0) {
            return 1;
        }

        return param * factorial(param-1);
    }

    //formula de combinacion 
    // n!
    //---------
    //(n-r)! r!
    function combinaciones (n, r) {
            var factorialN = factorial(n);
            var factorialR = factorial(r);
            var factorialResta = factorial(n - r);
            var resultado = factorialN / (factorialResta * factorialR);
            return resultado;
    }

    //maleComb = es la posibilidad de elegir 2 hombres y luego combinarlo con una mujer
    //si la cantidad de hombres es menor a dos, no puedo cumplir con el caso MMW --> combinacion = cero.
    if (maleCount < 2) {
        maleComb = 0;
    } else {
           maleComb = combinaciones(maleCount, 2) * femaleCount;
           //lo multiplico por la cantidad de mujeres porque seria lo mismo que calcular 3 C 1 que da 3 (cantidad de mujeres)
    }

    if (femaleCount < 2) {
        femaleComb = 0;
    } else {
        femaleComb = combinaciones(femaleCount, 2) * maleCount;
    }

    // para poder calcular el conjunto tengo que sumar las posibilidades de tener MMW y las posibilidades de tener WWM
    var combTotales = maleComb + femaleComb;

   return combTotales;
}

console.log(diverseDeputation(1,3));

//Palindromo - Palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda.

function countPalindromes(s) {
    var initialString = s;
    var initialStringLength = initialString.length;
    var fila = [];

    //The substr() method extracts parts of a string, beginning at the character at the specified position, 
    //and returns the specified number of characters.
    //The substr() method does not change the original string.


    //para crear todas las combinaciones posibles
    for (var i = 0; i < initialStringLength; i++) {
        for (var j = 0; j < initialStringLength - i; j++) {
            fila.push(initialString.substr(j, i + 1))
        }
       
    }

   console.log(fila);

    var palindromeCount = 0;

    //para recorrer el array fila completo
    for (var k = 0; k < fila.length; k++) {

            function reverse (string) {
                return string.split("").reverse().join("");
            }

            stringReversed = reverse(fila[k]);


            if (fila[k] === stringReversed) {
                palindromeCount += 1;
            }


    }
    return palindromeCount;
}


console.log(countPalindromes("aaa"));

//Ejercicio LoterryCoupons

// cada persona que juega tiene un cupon (n) que se numeran de 1 en adelante. El numero del cupon esta escrito y es
//coupon[i]
//el valor del cupon es la suma de los digitos que componen ese numero n
// ejemplo: coupons = [1,2,3,4,5,6,7,8,9,10,11,12]
//ejemplo: coupon_sums = [1,2,3,4,5,6,7,8,9,1,2,3]
//The largest number of winners is 2 which will occur for tickets numbered [1,10], [2,11] and [3,12]. The maximun number
//of possible winners occurs for any 3 possible values of s, so 3 is the answer.
// tiene que devoler "the number of ways to choose s, in such way that there is at least one winner and the price is
// split among the highest number of people"

function lotteryCoupons(n) {
    var coupons = [];
    var coupons_sums = [];
    var object = {};

    for (var i = 0; i < n; i++) {
        coupons.push(i + 1)
    }

    //recorro la array de cupones - esta compuesta por numeros, no strings
    for (var j = 0; j < coupons.length; j++) {
        var sum = 0;
        var num = coupons[j];
        var numToString = num.toString();


        //recorro cada item en la array de cupones (que a este punto, son strings)
        for (var m = 0; m < numToString.length; m++) {

            var charToNum = 0;
            charToNum = parseInt(numToString[m]);

            sum += charToNum;

        }

        coupons_sums.push(sum);

    }

    //para crear el objeto con las key con las sumas y los values con la cantidad de ocurrencias
    for (var b = 0; b < coupons_sums.length; b++) {
        if (object.hasOwnProperty(coupons_sums[b])) {
            object[coupons_sums[b]] += 1;
        } else {
            object[coupons_sums[b]] = 1;
        }
    }

    var objectKeys = Object.keys(object);

    var max = 0;
    var winners = 0;

    //para averiguar el valor maximo del objeto
    for (var p = 0; p < objectKeys.length; p++) {

        var objectKey = objectKeys[p];
        var objectKeyValue = object[objectKey];

        if (objectKeyValue > max) {
            max = objectKeyValue
        }
    }

    var objectValues = Object.values(object);
    // for (var w = 0; w < objectKeys.length; w++) {
    //     var objectKeyWinners = objectKeys[w];
    //     var objectKeyValueWinners = object[objectKeyWinners];

    //     if (objectKeyValueWinners === max) {
    //         winners += 1;
    //     }
    // }

    for (var w = 0; w < objectValues.length; w++) {
        if (objectValues[w] === max) {
            winners += 1;
        }
    }

    return winners;
}

console.log(lotteryCoupons(22));


