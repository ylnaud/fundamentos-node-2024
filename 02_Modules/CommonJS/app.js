const { sumar, elevarAlCuadrado } = require("./calculadora.js");

try {
  let resultado = elevarAlCuadrado(2);
  console.log(resultado);
} catch (error) {
  console.log(error.message);
}

try {
  let resultado = sumar(4, 10);
  console.log(resultado);
} catch (error) {
  console.log(error.message);
}
