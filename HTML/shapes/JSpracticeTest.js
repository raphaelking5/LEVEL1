// 1.even numbers
var i  = 0
for ( i = 0;  i <= 20; i ++){
    if (i % 2 == 0) {
        console.log(i + "est un nombre paire") ;
        
    }
}

// 2.the maximum

function max(a, b, ) {
     
    if (a > b)

    console.log(" the max number is = ", a  );
    if (b > a )
    console.log(" the max number is = ", b  );
    

}

// 3.air du cercle

function aireDucercle( r) {
    let cal = 3.14* (r * r) ; 
    console.log(" l'air du est = ", cal);
    

}

// 4. convertion

function convertirCelciusToFahrenheit( nombre) {
    let cal = (nombre * 1.8) + 32 ; 
    console.log("convertir de celcius en Fahrenheit = ", cal);
    

}

// 5. circonference du rectangle

function circonferenceDuRectangle(L, l) {
    
    let cal = (L + l)*2;
    console.log(" la circonference du rectangle est = ", cal);

}





// function invocation

aireDucercle(6);
max(1, 5);
circonferenceDuRectangle(6, 3);
convertirCelciusToFahrenheit(35);
