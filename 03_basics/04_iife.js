// Immediately Invocked Function Expressions (IIFE)

(function chai (){
    console.log(`DB CONNECTED`);        // - named IIFE
})();

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);     // - unnamed IIFE
})('anisha')

                   // there has to be a ; in between two IIFE