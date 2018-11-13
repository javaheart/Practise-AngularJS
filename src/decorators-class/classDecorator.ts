
function functionDecorator(target:Function)
{
    console.log("inside function decorator!..");
}

@functionDecorator
class MyClass {
    constructor() {

        console.log("Constructor called");
    }


}
var c11=new MyClass();
console.log(c11);
