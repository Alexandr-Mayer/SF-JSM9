//Поиск кнопки и контейнера(изображения)
const btnNode = document.querySelector('.button');
const resultNode = document.querySelector('.result');

//Добавляем обратботчик

btnNode.addEventListener('click', () => {
    const width = document.querySelector('#input_width').value;
    const height = document.querySelector('#input_height').value;

    if (width < 100 || width > 300 || height < 100 || height > 300 || isNaN(width) || isNaN(height)) {
        resultNode.innerHTML = `<p>Одно из чисел вне диапозона от 100 до 300<p>`;
    } else {
        fetch(`http://picsum.photos/${width}/${height}`)
        .then((response) => {
            return response;
        })
        .then((data) => {
            const cardBlock = `
            <div class="card">
            <img src="${data.url}" class="card-image">
            </div>`;
            resultNode.innerHTML = cardBlock;
        })
        .catch(() => {
            console.log("Ошибка загрузки!!!");
        });
    }
});