function add(num1,num2) {
    return num1+num2;
}
let total = add(10,12);
console.log(total)
// But if we forget to add a number then follow the code 
function add(num1,num2 = 10) {
    num2 = num2 || 20;
    return num1+num2;
    if (num2 == undefined) {
        num2 = 10;
    }
}
total = add(10,);
console.log(total)