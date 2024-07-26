const fs = require("fs");

console.log("Inicio del programa");
// No es bloqueante
fs.readFile("archivos.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  } else {
    console.log(data);
  }
});
console.log("Fin del programa");
let hola = "hola amigo";
module.exports = {
  hola,
};
