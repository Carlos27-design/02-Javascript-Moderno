//Esto lo que hace es importar los heroes de mi clase heroes
//import { heroes } from './data/heroes';

//Aqui lo que estamos haciendo son importaciones individuales y por defecto
//import heroes, { owners } from '../data/heroes';

import heroes from '../data/heroes';

//console.log(owners);

//Aqui lo que estamos haciendo es importar por defecto a la clase hero la diferencia que a la importación se le puede derivar cualquier nombre
//import heroes from './data/heroes';

//console.log(heroes);

export const getHeroeById = (id) => heroes.find((hero) => hero.id === id);

//console.log(getHeroeById(4));

//find en este caso no sirve Hay que utilizar el filter para Obtener todos los heroes de DC o Marvel
export const getHeroeByOwner = (owner) =>
  heroes.filter((hero) => hero.owner === owner);

//console.log(getHeroeByOwner('Marvel'));
