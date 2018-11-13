function methodDeco(target:Object,key:string,desc:PropertyDescriptor){

console.log("I am a method decorator....Object::"+Object);
console.log("I am a method decorator....key::"+key);
console.log("I am a method decorator....desc.value:::"+desc.value);
}

class ABC {
userName:string="rajasekhar.burepalli";
    @methodDeco
    myMethod() {
        console.log("I am a method...");
    }

}
var aa=new ABC();
aa.myMethod();
