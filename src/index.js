//Importamos el css desde la carpeta donde se encuentra
import './css/style.css';

//Importamos las funciones que se necesitan para que funcione la aplicación
import { conexionAPILocalizacion, conexionAPITiempo } from "./js/http-provider";
import { renderizarHTML } from './js/renderizar-html';

//Elementos del DOM
const form = document.querySelector('form');
const input = document.getElementById('input');

//Variables para la paginación



//--------------------- EVENTOS ---------------------
form.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    const muestraLocal = await conexionAPILocalizacion(input.value);
    console.log(muestraLocal.lat);
    const muestraDatos = await conexionAPITiempo(muestraLocal.lat, muestraLocal.lng);
    renderizarHTML(muestraDatos);
});


