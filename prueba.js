// // function esPrimo(num) {
// //    if(num < 0){
// //       console.log('No es primo, es negativo')
// //       return false
// //    }else if(num == 0 || num == 1){
// //       console.log('No es primo, es 0 o 1')
// //       return false
// //    }else if(num % num === 0 && num % 1 === 0){
// //       contador = 2
// //       siONo = null
// //       while(siONo === null || siONo === false && contador < num){
// //          if(num % contador === 0){
// //             siONo = true
// //          }else siONo = false
// //          console.log(contador)
// //          contador += 1
// //          console.log(siONo)
// //       }
// //       console.log('-------------------------------')
// //       console.log(contador)
// //       console.log(siONo)
// //       if(siONo == true){
// //          return false
// //       }else return true

// //    }
// // }

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

function doWhile(num) {
   var i = 0;
   contenedor = num
   do {
      contenedor = contenedor + 5;
      i = i + 1;
   } while (i < 8);
   console.log(contenedor);
   return(contenedor)
   
}

doWhile(12)