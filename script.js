document.addEventListener('DOMContentLoaded', () => {
    const skinSelect = document.getElementById('skin-select');
    const hairSelect = document.getElementById('hair-select');
    const faceSelect = document.getElementById('face-select');
    const shirtSelect = document.getElementById('shirt-select');
    const pantsSelect = document.getElementById('pants-select');
    const shoesSelect = document.getElementById('shoes-select');

    const skinHead = document.getElementById('skin-head');
    const hair = document.getElementById('hair');
    const face = document.getElementById('face');
    const shirtBody = document.getElementById('shirt-body');
    const pantsLeft = document.getElementById('pants-left');
    const pantsRight = document.getElementById('pants-right');
    const shoeLeft = document.getElementById('shoe-left');
    const shoeRight = document.getElementById('shoe-right');
    console.log(faceSelect);
    console.log(face);
    function handleImageClick(event, elementToUpdate) {
        const selectedImage = event.target.dataset.src;
        elementToUpdate.src = selectedImage;
    }

    skinSelect.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            handleImageClick(event, skinHead);
        }
    });

    hairSelect.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            handleImageClick(event, hair);
        }
    });

    faceSelect.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            handleImageClick(event, face);
        }
    });

    shirtSelect.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            handleImageClick(event, shirtBody);
        }
    });

    pantsSelect.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            const selectedPants = event.target.dataset.src;
            pantsLeft.src = selectedPants;
            pantsRight.src = selectedPants;
        }
    });

    shoesSelect.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            const selectedShoes = event.target.dataset.src;
            shoeLeft.src = selectedShoes;
            shoeRight.src = selectedShoes;
        }
    });
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Fetch the JSON data
    fetch('./images.json')
        .then(response => response.json())
        .then(data => {
            const populateSelector = (selectorId, images) => {
                const selector = document.getElementById(selectorId);
                selector.innerHTML = ''; // Clear any existing images
                images.forEach(src => {
                    const img = document.createElement('img');
                    img.src = src;
                    img.alt = src.split('/').pop(); // Use the filename as alt text
                    img.dataset.src = src;
                    selector.appendChild(img);
                });
            };

            // Populate each selector with the fetched data
            Object.keys(data).forEach(selectorId => {
                populateSelector(selectorId, data[selectorId]);
            });
        })
        .catch(error => console.error('Error fetching JSON data:', error));
});
document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.categories button');
    const selectors = document.querySelectorAll('.selectors > div');

    categories.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            // Hide all selectors
            selectors.forEach(selector => {
                selector.style.display = 'none';
            });

            // Show selected category
            const selectedSelector = document.getElementById(`${category}-select`);
            if (selectedSelector) {
                selectedSelector.style.display = 'flex';
            }
        });
    });

    // Optionally, show the first category by default
    if (categories.length > 0) {
        categories[0].click();
    }
});
