// function esPrimo(num) {
//    if(num < 0){
//       console.log('No es primo, es negativo')
//       return false
//    }else if(num == 0 || num == 1){
//       console.log('No es primo, es 0 o 1')
//       return false
//    }else if(num % num === 0 && num % 1 === 0){
//       contador = 2
//       siONo = null
//       while(siONo === null || siONo === false && contador < num){
//          if(num % contador === 0){
//             siONo = true
//          }else siONo = false
//          console.log(contador)
//          contador += 1
//          console.log(siONo)
//       }
//       console.log('-------------------------------')
//       console.log(contador)
//       console.log(siONo)
//       if(siONo == true){
//          return false
//       }else return true

// const { arrayContiene } = require("./M05 JavaScript Arrays/homework")

//    }
// }

// function esPrimo(num) {
//    if(num < 0){
//       return false
//    }else if(num == 0 || num == 1){
//       return false
//    }else if(num % num === 0 && num % 1 === 0){
//       contador = 2
//       siONo = null
//       while(siONo === null || siONo === false && contador < num){
//          if(num % contador === 0){
//             siONo = true
//          }else siONo = false
//          contador += 1
//       }
//       if(siONo == true){
//          return false
//       }else return true
//    }
// }

// var contenedor = esPrimo(38)

// if (contenedor == true){
//    console.log('Es un numero primo')
// }else if (contenedor == false){
//    console.log('No es un numero primo')
// }else console.log('No info')

// function doWhile(num) {
//    var i = 0;
//    contenedor = num
//    do {
//       contenedor = contenedor + 5;
//       i = i + 1;
//    } while (i < 8);
//    console.log(contenedor);
//    return(contenedor)
   
// }

// doWhile(12)


// function dePalabrasAFrase(palabras) {
//     cadena = ''
//     for(var i = 0; i < palabras.length; i++){
//         if (cadena === ''){
//             cadena = cadena + palabras[i]
//         }else cadena = cadena + " " + palabras[i]
//     }console.log(cadena)
//     return cadena
// }

// var palabras = ['Hola', 'Mundo']
// dePalabrasAFrase(palabras)

// function arrayContiene(array, elemento) {
//     contiene = null
//     for(var i = 0; i < array.length; i++){
//        if (array.includes(elemento)){
//           contiene = true
//        }
//     }if (contiene === true){
//         console.log('SI')
//         return true
//     }else console.log('NO')
//     return false
//  }

// array = ['H', 'Mundo']

// arrayContiene(array, 'H')

// function multiplicarArgumentos() {

//     if(arguments.length === 0){
//         console.log(0)
//         return(0)
//     } else if(arguments.length === 1){
//         console.log(arguments[0])
//         return arguments[0]
//     } 
//     else if(arguments.length > 1){
//         var multiplicacion = 1
//         for (var i = 0; i < arguments.length; i++) {
//             multiplicacion = multiplicacion * arguments[i]
//         }
//         console.log(multiplicacion)
//         return multiplicacion
//     }
    
// }

// arreglo = [1,2,3,4,5]
// multiplicarArgumentos(5)

// function empiezaConNueve(num) {
//     // Esta función recibe por parámetro un número.
//     // Debe retornar true si el entero inicia con 9 y false en otro caso.
//     // Tu código:
//     numAString = num.toString()
//     dividirNum = numAString.split('')
//     console.log(dividirNum)

//     if(Number(dividirNum[0]) === 9){
//         console.log('SI')
//         return true
//     } else
//         console.log('NO') 
//         return false
// }

// empiezaConNueve(9)

    // function todosIguales(array) {
    // Si todos los elementos del arreglo son iguales, retornar true.
    // Caso contrario retornar false.
    // Tu código:
//     siONo = null
//     for (var i = 1; i < array.length; i++) {
//         if (siONo === null && array[i] !== array[i - 1]) {
//             siONo = false
//             console.log(array[i])
//             console.log(i)
//         }
//     }
//     if (siONo === false){
//         console.log('NO')
//         return false
//     } else 
//         console.log('SI')
//         return true    
// }

// arreglo = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,2,2,3,1,1,1]
// todosIguales(arreglo)

// function mesesDelAño(array) {
//     // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
//     // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
//     // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
//     // Tu código:
//     if (array.includes("Enero") && array.includes("Marzo") && array.includes("Noviembre")) {
//         var arreglo1 = ["Enero", "Marzo", "Noviembre"]
//         console.log(arreglo1)
//         return arreglo1
//     } else 
//         console.log("No se encontraron los meses pedidos")
//         return ("No se encontraron los meses pedidos")
// }

// function mesesDelAño(array) {
//     // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
//     // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
//     // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
//     // Tu código:
//     arreglo = []
//     for(var i = 0; i < array.length; i++){
//         if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
//             arreglo.push(array[i])
//         }
//     }
//     if(arreglo.length < 3){
//         console.log('NO')
//         return("No se encontraron los meses pedidos")
//     } else console.log(arreglo)
//         return arreglo
// }

// var arreglo = ["Febrero", "Marzo","Enero","Diciembre","Octubre","Noviembre"]
// mesesDelAño(arreglo)

// function breakStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un arreglo y retornarlo.
    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
    // la ejecución y retornar el string: "Se interrumpió la ejecución".
    // [PISTA]: utiliza el statement 'break'.
    // Tu código:

    // for(var i = 0; i < 10; i++){
    //     if(i === numAumentar){
    //         return("Se interrumpió la ejecución")
    //         break
            
    //     }else numAumentar = numAumentar + 2
    //         arreglo.push(numAumentar)

    // }
    // console.log(arreglo)

//     var numAumentar = num
//     var arreglo = []
//     var iterador = 1
//     while (iterador < 11) {
//         if (iterador === numAumentar) {
//             console.log("Se interrumpió la ejecución")
//             break
//         }
//         numAumentar = numAumentar + 2
//         arreglo.push(numAumentar)
//         console.log(iterador)
//         iterador += 1
//     }
//     console.log(arreglo)

// }


// breakStatement(1)

function continueStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un array y retornarlo.
    // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
    // se continua con la siguiente iteración.
    // [PISTA]: utiliza el statement 'continue'.
    // Tu código:
    var numAumentar = num
    var arreglo = []
    var iterador = 1
    while (iterador < 11) {
        if (iterador === 5) {
            iterador +=1
            continue
        }
        numAumentar = numAumentar + 2
        arreglo.push(numAumentar)
        iterador += 1
    } console.log(arreglo)
    return arreglo

}

continueStatement(3)