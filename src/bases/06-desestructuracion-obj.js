//Desestructuracion
//Asignacion Desestructurante

const persona = {
  nombre: "Carlos",
  edad: 27,
  clave: "Chronos",
};

//Desestructuracion de la persona
//const { nombre, edad, clave } = persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);

const useContext = ({ clave, nombre, edad, rango = "Capitan" }) => {
  //console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 12.123123,
      lng: 54.123123,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
