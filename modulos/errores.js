function otraFuncion(){
    seRompe();
}

function seRompe(){
    return 3 + Z;
}

function seRompeAsincrona(cb){
    setTimeout(()=>{
        try {
            return 3 + Z;
        } catch (err) {
            console.error('Error en mi funcion asincrona')
            cb(err);
        }
    })
}

try{
    seRompeAsincrona((err)=>{
        console.log(err.message)
    });
}catch(err){
    console.error('Vaya, algo se ha roto...')
    console.error(err);
    console.log('pero no pasa nada lo hemos capturado')
}

console.log('esto de aqui esta al final');