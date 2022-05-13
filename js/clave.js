/*
 * Condiconal
*/      

let select1n = document.querySelector('#sintomas1n');
let select2n = document.querySelector('#sintomas2n');
let select3n = document.querySelector('#sintomas3n');
let select4n = document.querySelector('#sintomas4n');

let inputSelects = document.querySelectorAll('select')

document.addEventListener("DOMContentLoaded", function() {
    configuraNavegador();
    estableceSintomas(0);
});

inputSelects.forEach((elem) => {
    elem.addEventListener('change', () => {
        if (elem.value !== "") {
            let id = Number(elem.value);
            estableceSintomas(id);
            estableceResultado(id);
        }
    })
});

function configuraNavegador()
{
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems);
}

function renderizarSelect()
{
    let elems = document.querySelectorAll('select');
    let instances = M.FormSelect.init(elems);
}

function activarMaterialImg()
{
    let elems = document.querySelectorAll('.materialboxed');
    let instances = M.Materialbox.init(elems);
}

function estableceSintomas(id)
{
    let nivel = 0;
    if (id === 0) {
        nivel = 1;
    } else {
        nivel = id.toString().length + 1;
    }
    
    let select = devuelveSelect(nivel);
    
    reiniciaSelects(nivel);

    devuelveSintomas(nivel, id, data =>{
        data.forEach(sintomas => {
            let opt = document.createElement('option');
            opt.value = sintomas.id;
            opt.text = sintomas.texto;
            select.appendChild(opt);
        });
    
        renderizarSelect();
    });

    if (nivel > 1) { estaleceImagenes(id) }
}

function estableceResultado(id)
{
    let resultado = document.querySelector('#resultado');

    devuelveResultado(id, data => data.forEach(elemento => {
        resultado.textContent = elemento.texto;
        if (elemento.final) {
            resultado.setAttribute('class', 'teal accent-2');
        } else {
            resultado.className = '';
        }
    }));
}

function estaleceImagenes(id)
{
    
    let divImg = document.querySelector('#imagenes');
    divImg.innerHTML = '';
    
    filtrarImagenes(id, data => {
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

function filtrarImagenes(id, callback)
{
    fetch('jsonFiles/imagenes-deficiencia.json')
        .then(response => response.json())
        .then(data => {
            let nivel = id.toString().length;
            if (nivel === 1) {
                callback(data.filter(el => el["n1"]===id))
            } else if (nivel === 2) {
                callback(data.filter(el => el["n2"]===id))
            } else if (nivel === 3) {
                callback(data.filter(el => el["n3"]===id))
            } else if (nivel === 4) {
                callback(data.filter(el => el["n4"]===id))
            }
        });
}

function devuelveSintomas(nivel, idpadre, callback)
{
    fetch('jsonFiles/sintomas.json')
        .then(response => response.json())
        .then(data => {
            callback(data.filter(el => el["nivel"]===nivel && el["padre"]===idpadre));;
        });
}

function devuelveResultado(id, callback)
{
    fetch('jsonFiles/resultados.json')
        .then(response => response.json())
        .then(data => {
            callback(data.filter(el => el["id"]===id));
        });
}

function reiniciaSelects(nivel)
{
    let inicio = nivel;

    for (let i = inicio; i <= 4; i++)
    {
        let select = devuelveSelect(i);

        select.length = 0;

        let opt = document.createElement('option');
        opt.value = "";
        opt.text = "---Seleccione un síntoma---";
        select.appendChild(opt);
    }

}

function devuelveSelect(i)
{
    switch (i)
    {
        case 1:
            return select1n;
            break;
        case 2:
            return select2n;
            break;
        
        case 3:
            return select3n;
            break;
        
        case 4:
            return select4n;
            break;
    }
}
