function palindromo(palabra){
    let index_inicial = 0;
    let index_final = (palabra.length - 1) ;
    while(index_inicial < index_final){
        if(palabra[index_inicial] !== palabra[index_final]){
            return false;
        };
        index_inicial++;
        index_final--;
    };
    return true;
};

console.log(palindromo('ana'));