const generateButton = document.getElementById('generateButton');
const catContainer = document.getElementById('catContainer');
const loadingSpinner = document.getElementById('loadingSpinner');
generateButton.addEventListener('click', generateCat);

let catCounter = 0;

async function generateCat() {
    if (catCounter >= 3) {
        while (catContainer.firstChild) {
            catContainer.firstChild.remove();
        }
        catCounter = 0;
    }

    if (catContainer.childElementCount >= 5) {
        return;
    }

    loadingSpinner.style.display = 'block';

    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        const imageUrl = data[0].url;

        const catImage = document.createElement('img');
        catImage.classList.add('cat-image');
        catImage.src = imageUrl;

        catContainer.appendChild(catImage);

        loadingSpinner.style.display = 'none';

        catCounter++;
    } catch (error) {
        console.error('Erro ao gerar imagem de gato:', error);
        loadingSpinner.style.display = 'none';
    }
}