function deco(ob: any) {

    return function dec1(target: Function) {
        console.log("Passing Object::" + ob['name'])

    }
}

@deco({name:"hello"})
class Demo2 {


}