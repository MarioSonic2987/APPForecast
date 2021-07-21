//Seleccionamos elementos del HTML
const main = document.querySelector('main');
const resultadosBusqueda = document.getElementById('resultado-busqueda');


export const renderizarHTML = (tiempo) => {
    main.classList.remove('inicial');
    resultadosBusqueda.innerHTML = `<div class="item">
                                    <h1 class="titulo">${tiempo.city_name}</h1>
                                    <img src="https://www.weatherbit.io/static/img/icons/${tiempo.weather.icon}.png"></img>
                                    <p class="datos-tiempo">Previsión: ${tiempo.weather.description}</p>
                                    <p class="datos-tiempo">Temperatura actual: ${tiempo.temp} ºC</p>
                                    <p class="datos-tiempo">Viento: ${tiempo.wind_spd} km/h ${tiempo.wind_cdir} (${tiempo.wind_cdir_full})</p>
                                    <p class="datos-tiempo">Radiación ultravioleta (UV): ${Math.round(tiempo.uv)}</p>
                                    <p class="datos-observacion">Fecha de observación: ${tiempo.ob_time}</p>
                                </div>`
}