function asincrona(callback) {
    setTimeout(function () {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (error) {
            callback(error);
        }
    }, 1000);
}


asincrona(function (err, dato) {
    if (err) {
        console.error('Tenemos un error')
        console.error(err)
        return false;
        //throw err No funciona con en tryCatch
    }
    console.log('todo ha ido bien y data:', dato)
})
