let mandado = ["durazno","platano","uvas","manzana","mango"]

console.log(mandado.length)
let localizar_uva = mandado[2]
console.log(localizar_uva)

let ultimo_elemento = mandado[mandado.length - 1]
console.log(ultimo_elemento)

mandado.sort()

mandado.forEach(function(elemento,indice){
               console.log(elemento,indice)
               })

let nuevo_elemento = mandado.push("naranjas")
console.log(mandado)

let nuevo_inicio = mandado.unshift("piña")
console.log(mandado)

let eliminar_elemento = mandado.shift()
console.log(eliminar_elemento)
console.log(mandado)

let localiza_platano = mandado[3]
let eliminar_el = mandado.pop()
console.log(mandado)

let posicionar_elemento = mandado.indexOf("platano")
console.log(posicionar_elemento)

mandado.splice(posicionar_elemento,1)
console.log(mandado)
//-------------- POO -----------
class Personas{
    constructor(nombre,libros){
      this.nombre = nombre;
      this.libros = libros || [];
    }
    
    set setLibros(libros){
      this.libros.push(libros);
    }
    
    get getLibros(){
      return this.libros
    }
    
    buscarlibros(titulo){
      return this.libros.find((item)=> item.titulo === titulo)
    }
  }
  
  const personaUno = new Personas("Jesus")
  personaUno.setLibros = {titulo: "Metamorfosis", autor: "Franz Kafka"}
  personaUno.setLibros = {titulo: "El amor en un día", autor: "Nome Lose"}
  
  console.log(personaUno.buscarlibros("Metamorfosis"))
  console.log(personaUno.getLibros)

  //----------------------------------
  class Persona{
    constructor(nombre,edad){
      this.nombre = nombre;
      this.edad = edad;
    }
    
    saludar(){
      return `${this.nombre} está saludando`
    }
    
    probarSaludo(){
      return `${this.nombre} está saludando`
    }
  }
  // extends es una clase hija 
  class Otra extends Persona{
    constructor(nombre,edad,mail){
      super(nombre,edad);
      this.mail = mail;
    }
    
    trabajo(){
      return `Te envie un correo ${this.mail}`
    }
  }
  
  let juanito = new Otra("Juan",35,"juanito@gmail.com")
  console.log(juanito.saludar())
  console.log(juanito.probarSaludo())
 