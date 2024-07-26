
  const Persona = {
    nombre:"Duanly",
    apellidos:"Vega Alderete"
  }

  const {nombre,apellidos} = Persona

console.log(`Nombre: ${nombre}\nApellidos: ${apellidos} `);

let edad = 17;

if (edad >= 18) {
  return console.log("eres mayor de Edad");
} else {
  return console.log("eres menos de edad");
}
