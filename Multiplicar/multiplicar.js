const fs = require('fs');
var colors = require('colors');
let listarTabla = (base, limite = 10) => {
    console.log('==================='.rainbow);
    console.log(`====Tabla del ${ base }====`.rainbow);
    console.log('==================='.rainbow);
    return new Promise((resolve, reject) => {
        if (!Number(limite)) {
            reject('El limite no es un número.');
            return;
        }
        for (let i = 1; i <= limite; i++) {
            console.log(`${base}*${i}=${base*i}`);
        }
    });
}
let crearArchivo = (base, limite = 10) => {
    console.log('==========================================='.rainbow);
    console.log(`=Archivo creado: Tabla del: ${ base } hasta el: ${ limite } =`.rainbow);
    console.log('==========================================='.rainbow);
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un número');
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            //console.log(`${ base } * ${ i } = ${ base * i}`);
            data += `${ base } * ${ i } = ${ base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`)
            console.log(`El archivo tabla-${ base }.txt ha sido creado`);
        });
    });
}
module.exports = {
    crearArchivo,
    listarTabla
}