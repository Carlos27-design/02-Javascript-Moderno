//Template String

const nombre = "Carlos";
const apellido = "Coronado";

//const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto = `El nombre completo es: ${nombre} ${apellido} ${1 + 1}`;

//console.log('El nombre completo es: ' + nombreCompleto);

console.log(nombreCompleto);

function getSaludo(nombre) {
  return `Hola ${nombre}`;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);
