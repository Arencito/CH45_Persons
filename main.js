const divData = document.getElementById("divData");

class Person {
    //Propiedades / Propiedades de instancia
    name="";
    email="";
    age=0;
    resume="";
    id=0;
    //Propiedad estática, sólo se puede hacer mediante clase
    //Propiedad de clase
    static total =0;
    constructor (name, email, age, resume){
        this.name=name.toUpperCase();
        this.email=email.toLowerCase();
        this.age=(age<18)?18:age;
        this.resume=resume;
        Person.total++;
        this.id= Person.total;
    }//constructor
    printInfo(div){
        //Método
        div.insertAdjacentHTML("beforeend", 
         `<div class="card text-bg-dark mb-3" style="max-width: 18rem;">
         <div class="card-header"> ${this.id} - ${this.email}</div>
         <div class="card-body" id="cardBody_${this.id}">
           <h5 class="card-title">${this.name} - ${this.age}</h5>
           <p class="card-text">${this.resume}</p>
         </div>
         </div>`);
}//printinfo

setEmail(email){
    const regex = new RegExp ("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
   this.email = (regex.test(email)? email:"sincorreo@dominio.com");

}//setEmail

static printTotal(div){
    div.insertAdjacentHTML("afterbegin",
        `<div class="alert alert-primary" role="alert">
  Personas en total : <strong> ${Person.total} </strong>
</div>`)}//printTotal
//con "printinfo" no hace falta declarar los objetos uno por uno para ser impresos en la consola.
}//class Person

class Employee extends Person {
    department="";
    salary= 0;
    constructor(name, email, age, resume, department, salary){
        super(name, email, age, resume);
        this.department=department;
        this.salary=salary;
    }//Constructor
    printInfo(div){
        super.printInfo(div);
        let cardBody = document.getElementById(`cardBody_${this.id}`);
        cardBody.insertAdjacentHTML("beforeend",
            `<p class="card-text">${this.department}</p>
            <p class="card-text text-end">${this.salary} MXN</p>`);
    }//printInfo

}//Employee / clase heredada
const employees = new Array();

employees.push (new Employee ("Esmeralda","ESME@ciudadesmeralda.com", 16, "Java FullStack Developer", "Development", 450));
employees.push  (new Employee ("Ricardo", "rcervantes@GMAIL.com", 20, "Java FullStack Developer", "IT", 380));//Declaración de nueva persona (objeto)
employees.push (new Employee ("Eduardo", "ehuertaislas@outlook.com", 21, "Java FullStack Developer", "IT", 380))


employees[2].setEmail("ehuertaislas@");
employees.forEach((emp)=> emp.printInfo(divData));

Person.printTotal(divData);

// Esme.printInfo(divData);
// Ricardo.printInfo(divData);
// Eduardo.printInfo(divData);
// Person.printTotal(divData);

//console.log(Esme.name, Esme.age, Esme.email, Esme.resume);
//console.log(Ricardo.name, Ricardo.age, Ricardo.email, Ricardo.resume);

//console.log(Person.total);