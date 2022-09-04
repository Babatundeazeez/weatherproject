
let city = document.querySelector('.city');
let weather = {
    "api_Key": '207e83b401f0c23ce371a7c24fe1ee00',
        
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.api_Key
        )
            .then((response) => response.json())
            // .then((data) => console.log(data));

         .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { description, icon } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);

         city.innerText = "Weather in " + name;
        document.querySelector('.temp').innerText = "Temp: " + temp + " °C"
        document.getElementById('icon').src =
         "https://openweathermap.org/img/wn/" + icon + ".png";
         document.querySelector('.descrip').innerText = "cloud: " + description;
         document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
         document.querySelector('.wind').innerText = "Speed: " + speed + " Km/hr";
         document.querySelector(".weather").classList.remove("loading");
         document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/? " + name +" ')"
       


    },
    search: function (){
        this.fetchWeather(document.querySelector('.inp').value);

    }

};

document.querySelector('.search button').addEventListener("click", function(){
    weather.search();

});
document.querySelector('.inp').addEventListener('keyup', function(event){
    if (event.key =="Enter") {
        weather.search();
    }

});

weather.fetchWeather('oyo');




        
        










