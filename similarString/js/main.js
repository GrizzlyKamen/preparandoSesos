function split(palabra){
    let palabra_por_letra = [];
    for(let i = 0; i< palabra.length; i++){
        palabra_por_letra.push(palabra[i]);
    };
    return palabra_por_letra;
};

console.log(split('ciao'));