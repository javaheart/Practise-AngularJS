//To hide variables from global scope -Javascrit doesn't have module concept since from begining 
//But from es6 onwards javascript introduces cooncept on Modules
export 
class Calculator
{
    add(a:number,b:number){
        return a+b;
    }

}
var c=new Calculator();
var v=c.add(12,20);
console.log("Why I am calling ...:",v);
