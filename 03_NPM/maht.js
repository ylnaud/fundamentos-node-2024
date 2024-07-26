 function sumar(a, b) {
    return a + b;
  }
  
  function restar(a, b) {
    return a - b;
  }
  
  function dividir(a, b) {
    return a / b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function elevarAlCuadrado(numero) {
    if (typeof numero !== "number") {
      throw new Error("El argumento debe ser numero.");
    }
    return numero * numero;
  }
  export {
    sumar,
    restar,
    dividir,
    multiplicar,
    elevarAlCuadrado
  
  }