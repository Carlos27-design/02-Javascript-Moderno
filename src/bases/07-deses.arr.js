//Desestructuracion de arreglos

const personajes = ["Naruto", "Sasuke", "Sakura"];

//Extraccion de la informacion del arreglos
//Nunca hay que tener elementos vacios
const [, , p3] = personajes;
console.log(p3);

//Funcion que retorna un arreglo
const retornarArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornarArreglo();

console.log(letras, numeros);

//Tarea
//1. El primer valor del arreglo se llamara nombre
//2. Se llamara setNombre
const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola mundo");
    },
  ];
};

const [nombre, setNombre] = useState("Perro");

console.log(nombre);
setNombre();
