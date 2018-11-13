function add(a, b) {
    var v: number = 12;
    return a + b;


}
var a = add(12, 20);


var x = (a, b) => {
    console.log("Sum of Variables::::" + (a + b));
    return a + b;
}
console.log("I am getting ..." + x(10, 20));
