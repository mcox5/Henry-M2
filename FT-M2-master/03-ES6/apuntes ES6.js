//variables let y const

var variableConVar="variableConVar";
let variableConLet="variableConLet";
const variableConConst="variableConConst";

//La variable declarada con var tiene alcance del contexto de ejecución
//la variable declarada con let y const tiene alcance de llaves

//let no me deja pisar una variable con el mismo nombre, OJO que si podemos cambiar su valor pero NO declarar una igual
//a la variable con const NO le podemos reasignar un valor

const miArray=[1,2,3];
miArray.push(4);
console.log(miArray);
 //en este caso no violamos la restriccion de const ya que el array sigue siendo el mismo!, lo mismo para los objetos!

 //cuando utilizamos un for conviene definir las variables con los que recorrimos con un let para que no se salgan del alcance del for y se nos enrede con otra cosa que no queramos

 //conviene olvidanos de var ya que corremos el riesgo de que un contexto menor o un bloque menor pise nuestra variable de un contexto mayor


 //ARROW FUNCTIONS
//  function sumar (a,b) {
//     //const suma = a+b;
//     return suma
//  }

 //la arrow function es la definición de una función que voy a tener que guardar en una variable
//la variable tiene el nombre de la funcion, recibe los parámetros y luego de la flecha recibe el cuerpo de la funcion
//  const sumar = (a,b)=>{
//     const suma = a+b;
//     return suma;
//  } 
//console.log(sumar(1,3));
 //la arrow function tiene un return implicito!
 //cuando la arrow function tiene un return en una sola linea de código, se podría escribir de la siguiente manera: parentesis, flechita y resultado fuera de paréntesis:
 const sumar = (a,b)=> a+b;
console.log(sumar(1,3));
//para escribir callback las arrow functions funcionan muy bien!
let hola = "hola";


//Clases
//ahora podremos escribir las clases como en un lenguaje mas orientados a objetos

class Personas {
    constructor(nombre, apellido, edad) {
        this.nombre= nombre;
        this.apellido= apellido;
        this.edad = edad;
    }
    getNombre() {
        console.log(this.nombre); 
    }
}

//ahora getNombre se agrega al prototype sin la necesidad de hacer un Personas.prototype.getNombre

//introducimos el concepto de herencia, donde por ejemplo, queremos crear una clase de empleado que va a extender de una clase de persona

class Empleado extends Personas {
    constructor(sector, nombre, apellido, edad) {
        super(nombre, apellido, edad) //el super llama al constructor de la clase que hereda!
        this.sector = sector;
    }
}

const empleado1 = new Empleado("Jorge", "Vega", 20, "Learning")
console.log(empleado1); //vemos que empleado1 es un Empleado! pero que hereda propiedades de persona


//Object literals: Nos sirve para cuando trabajemos con el backend con objetos muy grandes!

function crearObjeto(nombre,apellido,edad) {
    const objeto = {
        nombre:nombre, //las variables tienen el mismo nombre de la propiedad se puede poner por si solo,
        apellido, //aca vemos como se puede aplicar lo anterior
        edad 
    };


    return objeto;
}

const miObjeto = crearObjeto("juan", "perez" , 20);
console.log(miObjeto);


//Template Strings : sirven para agregar variables en un string sin hacer el más y cortando el string, se utiliza el comando ${variable}

const auto= "Fiat";
const color= "rojo";
const nombre ="Leandro";
console.log("Mi nombre es" + nombre + "y tengo un " + auto);
//console.log(Mi nombre es ${nombre}); //hay que ocupar los backsting que no los pillo


//destructoring 

// const miArray=[1,2,"HOla",true];
// const num1= miArray[0];
// const num2= miArray[1];
// const palabra= miArray[2];
// const booleano= miArray[3];

// es lo mismo que 
const miArray2=[1,2,"HOla",true]; //
const[num1,num2,palabra,booleano]=miArray2 //en una sola linea puedo declarar mis constantes, ojo que recorre y guarda las variables en orden!
console.log(palabra);

const miObjeto2={
    nombre:"Matias",
    apellido: "Cox",
    edad: 20
}


//defaultRestSpread //nos permite darle un valor a un parametro si es que no le mandan nada! pero si le damos un valor a ese parametro, ocupa el valor que se le pidio.
const sumar2=(a,b=6)=>{
    const suma=a+b;
    return suma
};
console.log(sumar2(12,2));
//Spread Operator
const miArray3=[1,2,3]
const miArray4=[...miArray3,10,20] // en este caso es un array TOTALMENTE nuevo pero que tiene una copia de los elementos de miArray3
console.log(miArray4);

//lo anterior se puede replicar con objetos

const miObjetoprueba={a:"a",b:"b"}
const miObjetoprueba2={...miObjetoprueba}
console.log(miObjetoprueba2); //creamos una copia totalmente distinta del objeta y podemos manejar ese objeto nuevo sin modificar el objeto original

//rest 
function f(x,y,z) {
    return x+y+z;
}
f(...[1,2,3])// en este caso le estaríamos pasando le estamos pasando los parámetros por separados
console.log(...[1,2,3]);