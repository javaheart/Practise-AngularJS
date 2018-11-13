
function parameterDeco(target:any,prop:string,index:number){
console.log("parameterDeco::"+index);
}
class Emp{
    getEmployeeDetails(@parameterDeco empNo:string,ename:string){
        console.log(empNo+"----"+ename);
    }

}
var e1=new Emp();
e1.getEmployeeDetails("1211","rajasekhar");