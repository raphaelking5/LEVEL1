
//                        forEach



const monTableau = [5, 6, 4, 3, 1, 2, 4, 5]
const dices = [
    { name : "des #1", value: 5, inline: true},
    { name : "des #2", value: 3, inline: true},
    { name : "des #3", value: 6, inline: true},
    { name : "des #4", value: 1, inline: true},
    { name : "des #5", value: 2, inline: true},
    { name : "des #6", value: 4, inline: true},
    
    ];
  // let total = 0;
 // dices.forEach (abracadabra => console.log(abracadabra) ); 
  //.forEach (abracadabra => console.log(abracadabra.value) ); 
 
  
//monTableau.forEach (item => console.log(item));
//monTableau.forEach (item => console.log(item * item));


//                        filter()


// la methode  filter() cree et retourne un nouvequ tableau contenant tous les elements du tableau dorigine qui
// remplissent une condition determinee par la fontion call back.
// filter() . je veux filtrer tous les  elements superieurs a 6 dans le tableau scores
const values = [12, 70, 3, 18, 11, 22, 2022];
//let set= values.filter(function (item) {
    //return item > 11;
//});

//console.log(set);
                                      




//                        find



//let set= values.find(function (item) {
   // return item > 20;
//});

//console.log(set);


//              reduce


const uint8 = [0, 1, 3, 2];
  function sum(previousValue, currentValue) {
     return previousValue + currentValue;

  }

  console.log(uint8.reduce(sum));