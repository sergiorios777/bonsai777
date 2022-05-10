const imgs = document.querySelectorAll('img');

imgs.forEach((el) =>
    {
        el.addEventListener('click', () => 
        {
            const divGrande = document.querySelector('.imagen-grande');
            const imgGrande = document.querySelector('.imagen-grande img');
            const figGrande = document.querySelector('.imagen-grande figure');
            const figTitulo = document.querySelector('.imagen-grande figcaption');

            divGrande.innerHTML = "";

            imgGrande.setAttribute('src', el.src.replace('thumbs/', 'medios/'));
            figGrande.appendChild(imgGrande);
            figTitulo.textContent = "titulo del imagen";
            divGrande.appendChild(figGrande);

            //imgGrande.addEventListener('click', mostrarImagen(el.src.replace('thumbs/', 'imagenes/')));
        })
    }
);

function mostrarImagen(origen)
{
    const divImagen = document.createElement('div');
    const foto = document.createElement('img');
    foto.setAttribute('src', origen)

    divImagen.setAttribute('class', 'central');

    document.querySelector('body').appendChild(divImagen);
    divImagen.appendChild(foto);
}