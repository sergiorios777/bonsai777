let sintomas = document.querySelector('.sintomas');
let elementos = document.querySelectorAll('.elemento p');
let btnPrev = document.querySelector('.slide__prev');
let btnNext = document.querySelector('.slide__next');
let cajaSlides = document.querySelector('.slides');

elementos.forEach((elem)=> {
    elem.addEventListener('click', () => {
        if (elem.textContent !=="") {
            sintomas.hidden = false;
            mostrarSintomas(elem.textContent);
            mostrarImagenes(elem.textContent);
        }
    });
});

btnPrev.addEventListener('click', () => {
    
});

function mostrarImagenes(elemento)
{
    
    let divImg = document.querySelector('#imagenes');
    divImg.innerHTML = '';
    
    filtrarImagenes(elemento, data => {
        data.forEach(element => {
            let figura = document.createElement('figure');
            let figTit = document.createElement('figcaption');
            let imagen = document.createElement('img');

            figura.className = "col s12 m6 l3";
            imagen.className = "materialboxed";
            imagen.ariaLabel = element.titulo;
            imagen.src = element.url;
            imagen.height = "200";
            //imagen.width = "150";
            figTit.textContent = element.titulo;

            figura.appendChild(imagen);
            figura.appendChild(figTit);
            divImg.appendChild(figura);
        });
        activarMaterialImg()
    });
}

function mostrarSintomas(elemento)
{
    sintomas.innerHTML = '';
    devuelveSintomas(elemento, data =>{
        data.forEach(deficiencia => {
            sintomas.innerHTML = deficiencia.sintomas;
        });
    });   
}

function devuelveSintomas(elemento, callback)
{
    fetch('jsonFiles/texto-deficiencia.json')
        .then(response => response.json())
        .then(data => {
            callback(data.filter(el => el["elemento"] === elemento));;
        });
}

function filtrarImagenes(elemento, callback)
{
    fetch('jsonFiles/imagenes-deficiencia.json')
        .then(response => response.json())
        .then(data => {
            callback(data.filter(el => el["elemento"]===elemento))
        });
}