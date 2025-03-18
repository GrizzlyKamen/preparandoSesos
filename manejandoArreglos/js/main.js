function arrayHandler(arreglo1, arreglo2){
    if (arreglo1.length === arreglo2.length){
        for (let i = 0; i < arreglo1.length; i++){
            console.log(`Soy ${arreglo1[i]}, y yo soy ${arreglo2[i]}`)
        };
    }else{
        console.log("Los arreglos no tienen el mismo tamaño");
    };
};

console.log(arrayHandler([1, 2, 3, 4 ],['h', 'o', 'l', 'a']));