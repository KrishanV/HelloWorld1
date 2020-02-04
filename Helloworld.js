var HelloWorld = /** @class */ (function () {
    function HelloWorld(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    HelloWorld.prototype.greet = function () {
        console.log("'Hello World!' My name is " + this.firstName + " " + this.lastName + ".");
    };
    return HelloWorld;
}());
var helloWorld = new HelloWorld("Krishan", "Verma");
helloWorld.greet();
