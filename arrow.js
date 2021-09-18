function doubleIt(num) {
    return num*2;
}
const result = doubleIt(10);
console.log(result);
// or 
const doubleIt2 = function good(num) {
    return num * 2;
}
const result2 = doubleIt2(30)
console.log(result2);
// or es6 Update 

const doubleIt3 = num => num*2;
const result3 = doubleIt3(20);
console.log(result3);

// If you have multipul peramiterss 

const add = (x,y) => x + y;
const result4 = add(10,20);
console.log(result4);

// If you don't have any peramiterss 
const give = () => Math.random()*10000;
const result5 = give();
console.log(result5)
// If you have to do many thhigs in Function 
const domanyThing = (x,y,z) => {
    const sum = x + y + z;
    const minus = x - y - z;
    const result = sum * -(minus);
    return result;
}
const result6 = domanyThing(10,12,9);
console.log(result6);