console.log("Hola mundo"); 

let num = "Jorge";
let num1 = 16;

//  9 * num; 
//  console.log(9 * num)
//  console.log(num / num1);
//  console.log(num % num1); 
//  console.log(num *= num1);
// console.log(num1 += num);

let name = "Maribel"
let edad = 16;

// si...entonces
if(edad > 18){
    console.log(`${name}, es mayor de edad`)
} else {
console.log(`${name}, no es mayor de edad`)
}

//Switch
let nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

switch (nota) {
  case 10:
    calificacion = "Sobresaliente";
    break;
  case 9:
  case 8:
    calificacion = "Notable";
    break;
  case 7:
  case 6:
    calificacion = "Bien";
    break;
  case 5:
    calificacion = "Suficiente";
    break;
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    calificacion = "Insuficiente";
    break;
  default:
    // Cualquier otro caso
    calificacion = "Nota errónea";
    break;
}

console.log("He obtenido un", calificacion);


//While

i = 0;
while(i < 5){
    console.log("Valor de i", i)
    console.log(i = i +1)
}

i = 0;
while(i < 5){
    console.log("Valor de i", i)
    i = i +1
}

//inicio, condición, incremento
for (i = 0; i < 5; i++ ){
  console.log(i)
}

function bucle(){
  
  //variable local
  let i = 0;
while(i < 5){
    console.log("Valor de i", i)
    i = i +1
}
}

bucle()

function resta(num1,num2){
  let resultado = num1 - num2
  console.log(resultado)
}

resta(13,5)