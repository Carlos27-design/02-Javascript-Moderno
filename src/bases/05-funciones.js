//Funciones en JS

//Funcion no recomendada
//function saludar(nombre) {
//return `Hola, como estas: ${nombre}`;
//}

const saludar = function (nombre) {
  return `Hola, como estas: ${nombre}`;
};

//Funcion lamda
const saludar2 = (nombre) => {
  return `Hola, como estas: ${nombre}`;
};

const saludar3 = (nombre) => `Hola, como estas: ${nombre}`;

const saludar4 = () => "Hola Mundo";

//console.log(saludar("Pedro"));

console.log(saludar("Carlos"));

console.log(saludar2("Vegeta"));

console.log(saludar3("Peter"));

console.log(saludar4());

//Hay un error porque falta return para retornar un valor
//const getUser = () => {
//{
//uid: "ABC123",
//username: "Elpedo"
//};
//};

//Si no se hace con un return hay que hacerlo de forma explicita con () ejemplo

const getUser = () => ({
  uid: "ABC123",
  username: "Elpedo",
});

const user = getUser();

console.log(user);

//Tarea
//1. Tranformar a una funcion de flecha
//2. Tengo que retornar un objeto implicito
//3. Probarlo
const getUserActive = (nombre) => ({
  uid: "ABC623",
  username: nombre,
});

const userActive = getUserActive("Jhon");
console.log(userActive);
