//A function will wrap another function ie.,A function will return another function  is called closure 
function mainFunction (a:number){

    return function innerFunction(){
    
          a++;
         console.log(a);
    }

}
var counter=mainFunction(1);
for(var i=1;i<121;i++){
counter();
}

