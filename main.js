class Person {
    name="";
    email="";
    age=0;
    resume="";
    constructor (name, email, age, resume){
        this.name=name.toUpperCase();
        this.email=email.toLowerCase();
        this.age=(age<18)?18:age;
        this.resume=resume;
    }//constructor
}//class Person

let Esme = new Person ("Esmeralda","ESME@ciudadesmeralda.com", 16, "Java FullStack Developer");

console.log(Esme.name, Esme.age, Esme.email, Esme.resume);