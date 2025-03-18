function loopDeImpares(num, palabra){
    for(let vuelta = 0; vuelta < 101; vuelta++){
        console.log(`Vuelta número ${vuelta + 1}.`);
        if ((vuelta + num)%2 !== 0){
            console.log(`${palabra}.`);
        };
    };  
};

let numerillo = parseInt(prompt("Ingresa un número: "));
let palabririjilla = prompt("Ingresa una palabra: ");

loopDeImpares(numerillo, palabririjilla);