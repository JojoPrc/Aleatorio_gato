    const generateButton = document.getElementById('generateButton');
    const catContainer = document.getElementById('catContainer');
    const loadingSpinner = document.getElementById('loadingSpinner');
    generateButton.addEventListener('click', generateCat);

    async function generateCat() {
        if (catContainer.childElementCount >= 5) {
            catContainer.firstElementChild.remove();
        }

        loadingSpinner.style.display = 'block';

        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        const imageUrl = data[0].url;

        const catImage = document.createElement('img');
        catImage.classList.add('cat-image');
        catImage.src = imageUrl;

        catContainer.appendChild(catImage);

        loadingSpinner.style.display = 'none';
    }
