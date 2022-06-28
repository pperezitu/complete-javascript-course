// @ts-check
'use strict';

console.log('---- desafio uno ----');

// Julia y Kate están haciendo un estudio sobre perros. Así que cada uno de ellos preguntó a 5 dueños de perros
// sobre la edad de su perro y almacenó los datos en una matriz (una matriz para cada uno). Para
// ahora, solo les interesa saber si un perro es adulto o cachorro.
// Un perro es adulto si tiene al menos 3 años y es cachorro si tiene menos de 3 años.
// antiguo.
// Sus tareas:
// Cree una función 'checkDogs', que acepte 2 matrices de edades de perros
// ('dogsJulia' y 'dogsKate'), y hace lo siguiente:
// 1. Julia descubrió que los dueños del primero y de los dos últimos perros en realidad tienen
// ¡gatos, no perros! Así que cree una copia superficial de la matriz de Julia y elimine el gato.
// edades de esa matriz copiada (porque es una mala práctica mutar la función
// parámetros)
// 2. Cree una matriz con los datos de Julia (corregidos) y Kate
// 3. Para cada perro restante, registre en la consola si es un adulto ("Perro número 1
// es un adulto y tiene 5 años") o un cachorro ("El perro número 2 todavía es un cachorro
   
// ")
// 4. Ejecute la función para ambos conjuntos de datos de prueba
// Datos de prueba:
// - Datos 1: datos de Julia [3, 5, 2, 12, 7], datos de Kate [4, 1, 15, 8, 3]
// - Datos 2: datos de Julia [9, 16, 6, 8, 3], datos de Kate [10, 5, 6, 1, 4]
// Sugerencias: utilice las herramientas de todas las lecciones de esta sección hasta el momento   
// BUENA SUERTE   

let datosJulia = [3, 5, 2, 12, 7];
let datosKate = [4, 1, 15, 8, 3];
// let allData = [datosJulia, datosKate]

const checkDogs = (datosJulia, datosKate) => {
    const dogsJuliaCorrected = datosJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    console.log(dogsJuliaCorrected);
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
