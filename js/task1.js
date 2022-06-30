//Этап 1. Подгтовка данных

//Создание экземпляра класса DOMParser. Он позволит парсить XML

const parser = new DOMParser();

//XML заготовка
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

//Этап 2. Получение данных

//Парсинг XML

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

//Получение всех студентов
const studentNode = xmlDOM.querySelectorAll("student");

//Заготовка для JS объекта
let result = {
    list: [],
};

//Перебираем студентов
studentNode.forEach((student) => {
    const nameNode = student.querySelector("name");
    const firstNode = student.querySelector("first");
    const secondNode = student.querySelector("second");
    const ageNode = student.querySelector("age");
    const profNode = student.querySelector("prof");
    const langAttr = nameNode.getAttribute("lang");

//Создаем объект для каждого студента
    let arr = {
        name: `${firstNode.textContent} ${secondNode.textContent}`,
        age: `${ageNode.textContent}`,
        prof: `${profNode.textContent}`,
        lang: langAttr,
    };
//Добавляем объект в массив 
    result.list.push(arr);
});

//Выводим в консоль
console.log(result);




