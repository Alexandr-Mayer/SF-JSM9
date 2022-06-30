//Поиск кнопки и контейнера(изображения)
const btnNode = document.querySelector('.button');
const resultNode = document.querySelector('.result');

//Создание XHR запроса

function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('get', url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };

    xhr.onerror = function () {
        console.log('Ошибка! Статус ответа', xhr.status);
    };
    xhr.send();
};

//Выводим изображение на страницу

function displauResult(apiData) {
    let cards = '';

    apiData.forEach(item => {
        const cardBlock = `
        <div class="card">
        <img
            src="${item.download_url}"
            class="card-image"
        />
        <p>${item.author}</p>
        </div>
        `;
        cards = cards + cardBlock;
    });

    resultNode.innerHTML = cards;
};

//Добавляем обработчик на кнопку

btnNode.addEventListener("click", () => {
    const value = document.querySelector('input').value;
    if (value < 1 || value > 10 || isNaN(value)) {
        alert ("Число вне диапозона от 1 до 10")
    } else {
        useRequest(`https://picsum.photos/v2/list?limit=${value}`, displauResult);
    };
});
