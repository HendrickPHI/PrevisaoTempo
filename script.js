let key = "cebcd482eda57fa9a6714c1c2ba91885"

function putOnScreen(given){
    console.log(given);
    document.querySelector(".city").innerHTML = "Tempo em " + given.name;
    document.querySelector(".temp").innerHTML = Math.floor(given.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = "Umidade: " + Math.floor(given.main.humidity) + "%";
    document.querySelector(".account").innerHTML = given.weather[0].description;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + given.weather[0].icon + ".png";
}

async function searchCity(city){

    let given = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    city + "&appid=" + key + "&lang=pt-br" + "&units=metric"
    ).then(answer => answer.json());

    putOnScreen(given);
}

function clickOnButton(){
    let city = document.querySelector(".input-city").value;
    
    searchCity(city)
}