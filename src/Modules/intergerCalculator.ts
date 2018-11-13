import { Calculator } from "./Calculator";
import DV,{division, PI} from "./division";
var c=new Calculator();
var sum=c.add(121,1212);
console.log("Sum:::"+sum);
console.log("division:::"+division(12,1));
console.log(PI);
var dv=new DV();
console.log(dv.myDefaultMethod());