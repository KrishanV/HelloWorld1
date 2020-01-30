class HelloWorld{
    
    constructor(public name:string){

    }
    greet(){
        console.log("'Hello World!' My name is " + this.name + ".");
    }
}
const helloWorld = new HelloWorld("Krishan Verma");
helloWorld.greet();
