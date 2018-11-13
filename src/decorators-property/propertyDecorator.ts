function propertyDeco() {
    return function (target: any, prop: string) {
        console.log("PropertyDecorator:" + prop);
    }

}


class MyClassProperty {

   
    myObject: {
        name: "rajasekhar",
        email: "rajasekhar.mailto@gmail.com",
        enumerable:true
    }
    @propertyDeco()
    countryName: string = "India";

}
var test=new MyClassProperty();
for(var key in test){
console.log("::::"+key);
}
