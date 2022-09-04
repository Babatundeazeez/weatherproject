//   async function fetchText() {
//     let response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/oyo%20state?unitGroup=metric&key=C4N54GE4K5JCAC6A22TMYZQ7Y&contentType=json ');
//     let data = await response.text();
//     console.log(data);
//   }

// const myApi = '23764f371fea4f98484023baa4961f96'
// window.addEventListener('load', () => {
//     let long;
//     let lat;
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition((position) => {
//             console.log(position);
//              long = position.coords.longitude;
//             lat = position.coords.latitude;
//             console.log(long, lat);
//            // const base = `https://myApi.openweathermap.org/data/2.5/weather?${myApi}&unit= metric`;
//             //console.log(base);
//         });
//     }
// });



// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e488434d1emsha7703b71fef81f4p1379cbjsna1d16aa3d739',
// 		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
// 	}
// };
// function fetchText(){
//      count = document.getElementById('Country');
//      country = count.value;

//      apiIbadan = `https://open-weather13.p.rapidapi.com/city/${country}`

// fetch(apiIbadan, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// }

let country;
let count;
let apiCountry;
let data;
let icon = document.getElementById('icon');
let tempC = document.getElementById('tempc');
let tempF = document.getElementById('tempf');
let place = document.getElementById('place');
let des = document.getElementById('des');
let sunrise = document.getElementById('sunrise');
let sunset = document.getElementById('sunset');


const optionsT = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e1d5101152msh0c186d404d2e5e7p1c516ejsn4869ac0e5025',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};




function fetchText(){
    count = document.getElementById('country')
    country = count.value;
     apiCountry = `https://open-weather13.p.rapidapi.com/city/${country}`
    fetch(apiCountry, optionsT)
	.then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));


    .then((data) => {
        const { temp } = data.main;
        const place = data.name;
        const { description, icon } = data.weather[0];
        const {sunrise, sunset } = data.sys;
        console.log(data);

        const fahrenheit = ( temp * 9) / 5 + 32;

        // converting epoch time to GMT
        const sunriseGMT = new Date(sunrise * 1000);
        const sunsetGMT = new Date(sunset * 1000); 

        // DOM MANIPULATION TO THE INTERFACE
        icon.innerHTML = `<img src="./image/sun-img.jpg" alt="">`;
         place.textContent = `${country}`;
      
         tempC.textContent = `${temp.toFixed(2)} °C `;
         tempF.textContent = `${fahrenheit.toFixed(2)} °F ` ;
         sunrise.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
         sunset.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
         des.textContent = `${description}`;

         console.log(sunrise.textContent);


    });
    

    

            };

            
           // tempC.textContent = `${temp.toFixed(2)} °C C`;
            // fetchText()

            // if (navigator.geolocation) {
            //     navigator.geolocation.getCurrentPosition((position) => {
            //       // Storing Longitude and Latitude in variables
            //       long = position.coords.longitude;
            //       lat = position.coords.latitude;
            //       const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
            
            //       // Using fetch to get data
            //       fetch(base)
            //         .then((response) => {
            //           return response.json();
            //         })
            //         .then((data) => {
            //           const { temp } = data.main;
            //           const place = data.name;
            //           const { description, icon } = data.weather[0];
            //           const { sunrise, sunset } = data.sys;
            //         });
            //     });
            //   }
    
