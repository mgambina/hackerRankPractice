//Email thread
//si el body es el mismo, se considera que son del mismo thread
//la respuesta va a estar siempre adelante del mail previamente enviado separado por "---"
//el email se da en el orden en que fue enviado
//3 campos: sender/el que recibe/body
//el thread incluye siempre a las mismas dos personas
//por cada mail determinar el thread id y el email number de ese thread

//n es la cantidad de emails
// es una array de emails
//tiene que devolver una array bidimensional [(1,1),(2,1),(1,2)] donde el primer numero (integer) es el email thread id,
//y el segundo es la cantidad de emails en el thread

function getEmailThreads(emails) {

    //creo una array de objetos donde voy a guardar los resultados
    let arrayObjetos = [];

    //itero sobre la array de emails para deteminar las partes (sender/receiver/body)
    for (let i = 0; i < emails.length; i++) {

        //objeto modelo
        let objeto = {
            personas: [],
            body: "",
            thread: 1,
        }

        //dividir las partes de cada envio
        let parts = emails[i].split(",");

        //personas = sender y receiver y con el trim le elimino los espacios vacios
        objeto.personas = [parts[0].trim(), parts[1].trim()];

        //como adentro del body tambien hay , tengo que concatenar los mensajes y eliminar los espacios
        for (let j = 2; j < parts.length; j++) {
            objeto.body = objeto.body.concat(parts[j].trim());

        }

        //por default asumo que es un nuevo thread
        let nuevoThread = true;
       
        for (let k = 0; k < arrayObjetos.length; k++) {
            
            //objetoComparacion --> es el objeto que uso como base para ver si es un nuevo thread
            //objeto es el que estoy creando en cada vuelta de i
            let objetoComparacion = arrayObjetos[k];
            if (objetoComparacion.personas[0] === objeto.personas[0] && objetoComparacion.personas[1] === objeto.personas[1] ||
                objetoComparacion.personas[1] === objeto.personas[0] && objetoComparacion.personas[0] === objeto.personas[1]) {
                
                //si tiene las mismas personas y ademas contiene parte del body, entonces no es un nuevo thread -> false
                if (objeto.body.includes(objetoComparacion.body)) {

                    //le sumo uno para ir contando cuantas replies tuvo ese thread
                    objetoComparacion.thread += 1;
                    nuevoThread = false;
            
                    console.log(("algo" + " " + objetoComparacion.thread));
                    //arrayResultado.push(["algo",objetoComparacion.thread]);
                   
                }
            }

        }

        //si es un nuevo thread, lo agrego a la arrayObjetos
        if (nuevoThread === true) {
            arrayObjetos.push(objeto);
            //como i empieza en cero, tengo que sumar 1
            console.log((i + 1) + " " + 1);
        } 

    }
    
    
    return arrayObjetos;
    //return arrayResultado;
}

getEmailThreads(['abc@gmail.com, x@gmail.com, hello x, how are you?',
    'c@gmail.com, abc@gmail.com, did you take a look at the event?',
    'x@gmail.com, abc@gmail.com, i am great. how are you?---hello x, how are you?']);


//Minimum Sum
//array que contiene integers
//arthur puede sacar cualquier numero de la array y tiene que cambiarlo por la mitad de ese numero (redondeado para arriba)
//y devolverlo a la array
// ella le da un numero de movimientos y el tiene que minimizar la suma de la array
//devuelve la suma de la array 

//k cant de mov y num es el array


// function minSum(num, k) {
//     //PRIMER PARTE: consigo al array

//     let sortedArray = num;

//     function findArray(param) {

//         let maxArray = Math.max.apply(null, param);

//         let maxArrayIndex = param.indexOf(maxArray);

//         param[maxArrayIndex] = Math.ceil(maxArray / 2);

//     }

//     for (let j = 0; j < k; j++) {
//         findArray(sortedArray);
//         //console.log(sortedArray);
//     }



//     //SEGUNDA PARTE: una vez que tengo el array final.
//     let sumArray = 0;
//     //recorro el array final y calculo la suma total
//     for (let i = 0; i < sortedArray.length; i++) {
//         sumArray += sortedArray[i]
//     }

//     //devuelvo la minima suma del array
//     return sumArray;

// }

// console.log(minSum([10,20,7], 4));