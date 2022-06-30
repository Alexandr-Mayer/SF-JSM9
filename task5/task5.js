const btnNode = document.querySelector('.button');
const resultNode = document.querySelector('.result');

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
        localStorage.setItem("cards", cards)
    });

    resultNode.innerHTML = cards;
};

btnNode.addEventListener('click', () => {
    const listNumber = document.querySelector('#input_number').value;
    const limit = document.querySelector('#input_limit').value;

    if ((listNumber < 1 || listNumber > 10) || (limit < 1 || limit > 10) || (isNaN(listNumber) || isNaN(limit))
    ) {
        resultNode.innerHTML = `<p>Одно из чисел вне диапозона от 1 до 10<p>`;
    } else if (listNumber < 1 || listNumber > 10 || isNaN(listNumber)) {
        resultNode.innerHTML = `<p>Номер страницы вне диапозона от 1 до 10<p>`;
    } else if (limit < 1 || limit > 10 || isNaN(limit)) {
        resultNode.innerHTML = `<p>Лимит вне диапозона от 1 до 10<p>`;
    } else {
        fetch(` https://picsum.photos/v2/list?page=${listNumber}&limit=${limit}`)
        .then ((response) => {
            return response.json();
        })
        .then ((apiData) => {
            displauResult(apiData);
        })
        .catch(() => {
            console.log("Ошибка загрузки");
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    let images = localStorage.getItem("cards");
    if (images) {
        resultNode.innerHTML = images;
    }
});