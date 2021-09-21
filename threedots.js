const age = [20,22,28,30];
const age2 = [20,22,19,30]
const totalAge = age.concat(age2).concat([5]);
console.log(totalAge);

// or in es6 style 

const totalAge2 = [...age,...age2,...totalAge];
console.log(totalAge2);


// A Simple example from a Math 
const Minuster = 660;
const Business = 780;
const shocib = 220;
const BestRich = Math.max(Minuster,Business,shocib);
console.log(BestRich);
// or 
const compeetion = [Math.random()*1000000,220,7800]
const takapoisa = Math.max(compeetion);
console.log(takapoisa);
// if we want to fix the error then follow the bellow code
const compeetion2 = [Math.random()*10,220,7800]
const takapoisa1 = Math.max(...compeetion2);
console.log(takapoisa1);