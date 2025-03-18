function loopDePares(num) {
    for(let vuelta = 0; vuelta < 101; vuelta++){
        console.log(`Vuelta número ${vuelta + 1}.`);
        if ((vuelta + num)%2 === 0){
            console.log(`El número ${vuelta+num} es par en la vuelta ${vuelta+1}.`);
        };
    };
    //return 0;     
}

let numerillo = parseInt(prompt("Ingresa un número: "));

loopDePares(numerillo);