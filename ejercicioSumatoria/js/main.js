function sumatoria(num){
    let resultado = 0;
    for(let i = 1; i <= num; i++){
        resultado += i
    };
    return resultado;
};

console.log(sumatoria(9));