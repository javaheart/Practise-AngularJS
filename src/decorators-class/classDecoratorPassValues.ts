function dec(obj: any) {
   return  function innterFunDecorator(taget: Function) {
        console.log("Inside closure Decorator:::"+obj);
    }
}

@dec("Rajasekhar")
class Demo1 {

}

