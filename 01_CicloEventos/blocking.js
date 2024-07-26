const fs = require("fs");

const hola = require("./non-blocking.js");
console.log("Inciar del programa");
// Es bloqueante por que es asyncrono
const data = fs.readFileSync("archivos.txt", "utf8");

console.log(data);

console.log("fin del programa");
console.log(hola.hola);
