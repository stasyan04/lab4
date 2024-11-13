document.addEventListener('DOMContentLoaded', () => {

    const element8 = document.getElementById('element8');
    const element9 = document.getElementById('element9');

    if (element8 && element9) {
        let useGetElementIdForElement8 = true;
        let useQuerySelectorForElement9 = true;

        element8.addEventListener('click', () => {
            if (useGetElementIdForElement8) {
                const elem = document.getElementById('element8');
                toggleColors(elem);
            } else {
                const elem = document.querySelector('#element8');
                toggleColors(elem);
            }
            useGetElementIdForElement8 = !useGetElementIdForElement8;
        });

        element9.addEventListener('click', () => {
            if (useQuerySelectorForElement9) {
                const elem = document.querySelector('#element9');
                toggleColors(elem);
            } else {
                const elem = document.getElementById('element9');
                toggleColors(elem);
            }
            useQuerySelectorForElement9 = !useQuerySelectorForElement9;
        });
    }

    function toggleColors(element) {
        if (element.style.backgroundColor === 'green') {
            element.style.backgroundColor = '';
            element.style.color = '';
        } else {
            element.style.backgroundColor = 'green';
            element.style.color = 'red';
        }
    }

    const addImageBtn = document.getElementById('addImageBtn');
    const increaseBtn = document.getElementById('increaseBtn');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const deleteBtn = document.getElementById('deleteBtn');

    addImageBtn.addEventListener('click', () => {
        if (!document.getElementById('parisImage')) {
            const img = document.createElement('img');
            img.id = 'parisImage';
            img.src = 'paris.jpg';
            img.alt = 'Париж, Ейфелева вежа';
            img.width = 600;

            const buttonsDiv = document.getElementById('image-buttons');
            buttonsDiv.parentNode.insertBefore(img, buttonsDiv);
        } else {
            alert('Зображення вже існує.');
        }
    });

    increaseBtn.addEventListener('click', () => {
        const img = document.getElementById('parisImage');
        if (img) {
            let currentWidth = img.width;
            img.width = currentWidth + 50;
        }
    });

    decreaseBtn.addEventListener('click', () => {
        const img = document.getElementById('parisImage');
        if (img) {
            let currentWidth = img.width;
            if (currentWidth > 50) {
                img.width = currentWidth - 50;
            }
        }
    });

    deleteBtn.addEventListener('click', () => {
        const img = document.getElementById('parisImage');
        if (img) {
            img.remove();
        }
    });
});