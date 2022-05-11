document.querySelectorAll('.image-container img').forEach(image => {
    image.addEventListener('click', () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src').replace('thumbs/', 'larges/');
    });
});

document.querySelector('.popup-image span').addEventListener('click', () => {
    document.querySelector('.popup-image').style.display = 'none';
});