import { createInterface } from "readline";
import chalk from "chalk";

const tasks = [];

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log(chalk.bgGreen.bold("😺😺😺😺😺 To do App 😺😺😺😺😺"));
  console.log(chalk.blueBright(`Menu de Opciones`));
  console.log(`1. Agregar tarea`);
  console.log("2. Listar tareas");
  console.log("3. Completar tarea");
  console.log("4. Salir");
}

function addTask() {
  rl.question(chalk.greenBright.bold("Escribe la tarea: "), (task) => {
    tasks.push({ task, completed: false });
    console.log(chalk.green.bold("Tarea agregada con éxito"));
    displayMenu();
    chooseOption();
  });
}
function listTasks() {
  console.log(chalk.yellowBright("Tareas:"));
  if (tasks.length === 0) {
    console.log(chalk.italic("No hay tareas pendientes."));
  } else {
    tasks.forEach((task, index) => {
      const status = task.completed 
        ? chalk.green("✓ Completada") 
        : chalk.red("✗ Pendiente");
      console.log(`${index + 1}. ${task.task} - ${status}`);
    });
  }
  console.log(); // Añade una línea en blanco para mejor legibilidad
  displayMenu();
  chooseOption();
}

function completeTask() {
  rl.question(chalk.magentaBright("Número de la tarea a completar: "), (number) => {
    const taskIndex = parseInt(number) - 1;
    if (taskIndex >= 0 && taskIndex < tasks.length) {
      tasks[taskIndex].completed = true;
      console.log(chalk.green.bold("Tarea completada con éxito"));
    } else {
      console.log(chalk.red("Número de tarea inválido"));
    }
    displayMenu();
    chooseOption();
  });
}

function chooseOption() {
  rl.question(`Digita el numero de tu opcion: `, (choice) => {
    switch (choice) {
      case "1":
        addTask();
        break;
      case "2":
        listTasks();
        break;
      case "3":
        completeTask();
        break;
      case "4":
        console.log(chalk.yellow.bold("Salir 👋😺"));
        rl.close();
        break;
      default:
        console.log(chalk.red("Opción inválida, intenta de nuevo\n"));
        displayMenu();
        chooseOption();
        break;
    }
  });
}

displayMenu();
chooseOption();