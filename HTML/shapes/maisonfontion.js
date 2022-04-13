function max(a, b, c) {
     
    
    console.log(" le nombre maximun est = ", Math.max ( a, b, c) );

}

// tableau

let array = [2,8,20,11];
let largest = array [0];
    for (i = 0; i < array.length; i++){
        if (largest < array[i]){
            largest = array[i];
        }
   }
    console.log(largest);

    // 3.interet

function simpleInteret( p, r, t) {
    let cal = (p * r * t ) / 100 ; 
    console.log("simple interet est = ", cal);
    

}


    const numberOfWord = (sentence) => {
    let spaces = 0;
    for ( let index = 0; index < sentence.length; index ++){
        if (sentence [index]== " "){
            spaces = spaces + 1
           }
        }
        return spaces +1
    }
console.log(numberOfWord ("je ne veux pas manger3 avec la nourriture"));

// function invocation

max(4, 5, 6);
simpleInteret(4, 5, 6);