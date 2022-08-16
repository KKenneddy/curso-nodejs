//const process =require('process')

process.on('beforeExit', ()=>{
    console.log('ale, el proceso va a terminar')
});

process.on('exit', ()=>{
    console.log('ale, el proceso acabo')
    setTimeout(()=>{
        console.log('esto no se va a ver nunca')
    },0)
});

process.on('uncaughtException', (err, origin)=>{
    console.error('Vaya se nos ha olvidado capturar el error')
    console.log(os.constants);
    console.error(err)
})
//process.on('unhandledRejection')

//functionquenoexiste();

console.log('eso si el error no se recoje no sale')