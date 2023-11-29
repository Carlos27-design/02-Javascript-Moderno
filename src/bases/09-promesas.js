//Promesas

import { getHeroeById } from './bases/08-import-export';

//const promesa = new Promise((resolve, reject) => {
//setTimeout(() => {
//Tarea
//Importar el 08-export-import

//const p1 = getHeroeById(2);
//resolve(p1);
//}, 2000);
//});

//promesa
//.then((hero) => {
//console.log('heroes', hero);
//})
//.catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Tarea
      //Importar el 08-export-import

      const p1 = getHeroeById(id);
      if (p1) {
        resolve(p1);
      }
      reject('No se puede encontrar el heroes');
    }, 2000);
  });
};

getHeroeByIdAsync(1).then(console.log).catch(console.warn);
