const city      = document.querySelector(".city");
const btn       = document.querySelector(".btn");
const result    = document.querySelector(".result");
const cityName  = document.querySelector(".city-name");
const content   = document.querySelector(".content-area");
const temp      = document.querySelector(".temp");
const pressure  = document.querySelector(".pressure");
const wind      = document.querySelector(".wind");
const humidity  = document.querySelector(".humidity");
const body      = document.querySelector("body");
const error     = document.querySelector(".error");
const output    = document.querySelector(".output");



// btn.addEventListener("click", () => {
//     var KEY = "c329a797ba824791997141049192204";
//     var URL = "https://api.apixu.com/v1";
//     var search = city.value;
//     fetch(`${URL}/current.json?key=${KEY}&q=${search}`)
//       .then(response => response.json())
//       .then(result => {
//         cityName.innerHTML = `${result.location.name},${result.location. country}`;
//         temp.innerHTML = `${result.current.temp_c}`;
//         pressure.innerHTML = `${result.current.pressure_mb}`;
//         wind.innerHTML = `Winds at ${result.current.wind_mph} m/s`;
//         humidity.innerHTML = `Humadity levels at ${result.current.humidity}%`;
//         console.log(result);
//       })
//   });

// btn.addEventListener("click", () => {
//     content.style = "opacity:1;";
//     if (city.value == ''){
//       output.style = "display: none;"
//     }
//     else{
//       error.style = "display: none;"
//     }
//   });
  

