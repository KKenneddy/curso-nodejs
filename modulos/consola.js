console.log('algo');

console.error('algo');

console.warn('algo');

var tabla = [
    {a: 1, b:'Z'},
    {a: 2, b:'Otra'}
]
console.table(tabla);

console.group('Conversacion:');
console.log('Hola');
console.log('bla bla');
console.log('Adios');
console.groupEnd('conver')
console.log('otra cosa');

function function1(){
    console.group('funcion 1')
    console.log('Esto es de la funcion 1')
    console.log('Esto tambien')
    function2();
    console.groupEnd('funcion 1')
}
function function2(){
    console.group('funcion 2')
    console.log('ahora estamos en la funcion 2')
    console.groupEnd('funcion 2')
}
console.log('empezamos')
function1();

console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')
console.count('veces')
console.count('veces')