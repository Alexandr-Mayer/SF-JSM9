//Получаем JSON
const jsonstring = `
      {
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;
//Переводим в JS объект
const data = JSON.parse(jsonstring);
//Выводим в консоль
console.log(data);