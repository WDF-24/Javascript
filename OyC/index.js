
let info = {
    nombre: 'Dany',
    edad: 24,
    ocupacion: 'estudiante',
   
    saldar: function(){
      console.log( 'Hola, buenas tardes ' + this.nombre + ' ,es un place saludarte ' + this.ocupacion)
    }
  }
  
  info.saldar()

  let laborables = new Object();
laborables = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
laborables.forEach(function(valor, ind, lista){ 
    lista[ind] = valor.toUpperCase();
 	});
console.table(laborables);

class Forma {
    constructor() {
      console.log("Soy una forma geométrica.");
    }
  }

const nuevaForma = new Forma()

class Cuadrado{
 constructor(lado1,lado2){
   this.lado1 = lado1;
   this.lado2 = lado2; 
 }
 
 get area(){
   return this.calcArea()
 }
 
 calcArea(){
   return this.lado1 * this.lado2
 }
}

const areaC = new Cuadrado(5,5);
console.log(areaC.area)

class Animal{
 constructor(tortuga){
   this.tortuga = tortuga
 }
 nadar(){
   console.log(`${this.tortuga} nada con sus aletas` )
 }
}

const animal = new Animal("Tortuga Pancho")
animal.nadar()


let hola = "como estas?"
 console.log("hola" + " "+ hola )
 console.log(`hola ${hola}`) 
