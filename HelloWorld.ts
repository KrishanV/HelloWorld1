class HelloWorld{
    
    constructor(public Firstname:string, lastName:string){

    }
    greet(){
        console.log("'Hello World!' My name is " + this.firstName + " " + this.lastName + ".");
    }
}
const helloWorld = new HelloWorld("Krishan" + "Verma");
helloWorld.greet();
