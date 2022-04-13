/**
 * some built in functions
 * console.log()
 * alert
 * if()
 * while()
 * for()
 * switch()
 */
//using the funtion keyword

function greetusers(){
    // here is the body of th function
    console.log("hello people ");
}
function multiplyTwoNumbers(number1,number2) {
    let result =number1 * number2;
    console.log("the result is = ", result);
}
greetusers();
multiplyTwoNumbers(5,6);

// exrcise

function raphaelKenzo(){
    console.log("salut ");
}

function operationsimple(number1,number2,number3) {
    let a =number1 * number2 * number3;
    let b =number1 - number2 - number3;
    let c =number1 + number2 + number3;
    let d =number1 / number2 / number3;
    let e =number1 % number2 % number3;
    console.log("the result of multiplication  = ", a);
    console.log("the result of soustraction = ", b);
    console.log("the result of addition = ", c);
    console.log("the result of division = ", d);
    console.log("the result of modulo = ", e);
}

// function invocation

operationsimple(5, 5, 6);
