class HelloWorld{
    
    constructor(public firstName:string, public lastName:string){
    }
    greet(){
        console.log("'Hello World!' My name is " + this.firstName + " " + this.lastName + ".");
    }
}
const helloWorld = new HelloWorld("Krishan", "Verma");
helloWorld.greet();
