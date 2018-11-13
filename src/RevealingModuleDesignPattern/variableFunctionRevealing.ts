//Revealed Module Deisgn Pattern

function f1() {

    var a = 1221;
    
    var v= function demo(){
        console.log("Inside Demo method");
    }
    return {
        aa:a, //This is called variable revealed Module Design pattern
        vv:v////This is called function revealed Module Design pattern
           
    }
}
var c = f1();
console.log(c.aa);
console.log(c.vv());
