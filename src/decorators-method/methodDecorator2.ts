class MyClass2 {

    companyName: string = "java-heart";
    constructor() {
        console.log("Consturctor called!.....");
    }

    @isEnumerableDeco
    method2() {
        console.log("method called1.");

    }
}
function isEnumerableDeco(target: any, prop: string, desc: PropertyDescriptor) {
    desc.enumerable = false;
    console.log("Inside Deco..desc.value:" + desc.value);
    console.log("Inside Deco..prop:" + prop);

}
var m = new MyClass2();
m.method2();

//Iterator Logic
console.log("Iteration Logic Here Below");
for (var key in m) {
    console.log("::::==>"+key);
}
