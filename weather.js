const API_KEY ='9e953dc0ecb937ec1ba80a5f4aca43e7';
const COORDS = 'coords';
const weather =document.querySelector(".js-weather");


function getWeather(lat,lon)
{
    fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json();
    }).then(function(json)
    {
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText =`${temperature} @ ${place}`;
    });
}
function saveCoords(coordsObj)
{
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position)
{
    
const latitude = position.coords.latitude;
const longitude = position.coords.longitude;
const coordsObj={
    latitude:latitude,
    longitude:longitude
};
console.log(latitude,longitude);
saveCoords(coordsObj);
getWeather(latitude,longitude);
}
function handleGeoError()
{
    console.log("Cant Access Geo Location");
}

function askForCoords()
{
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoSuccess);
     
}

function loadCoord()
{
    const loadCoords = localStorage.getItem(COORDS);
    if(loadCoords===null)
    {
        askForCoords();
    }
    else
    {
        const parseCoords = JSON.parse(loadCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
        console.log(parseCoords);
    }
}


function init()
{
loadCoord();
}

init();