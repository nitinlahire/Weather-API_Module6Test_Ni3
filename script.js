function fetchWeather() {
  
  document.querySelector('.result-report').classList.remove("d-none");
  const location = document.getElementById('cityinput').value;
  const token = document.getElementById('Token').value;
  const key = "UVWMTQALQ9BM357GVJ3ZU7846";


  if (location==null || location==''){  
    alert("Please Enter Location");  
    return false;  
  }
  else if(token==null || token==''){
    alert("Please Enter Access Token")
    return false;
  } 
  else if(token.length<25){  
    alert("Access Token must be at least 25 characters long.");  
    return false;  
    }  

  console.log(location);
   var url =`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${token}&contentType=json`;
 
   
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector('.errorDiv').classList.add("d-none");
      const location = data.address;
      const lat = data.latitude;
      const long = data.longitude;
      const timezone = data.timezone;
      const windspeed = data.currentConditions.windspeed;
      const pressure = data.currentConditions.pressure;
      const humidity = data.currentConditions.humidity;
      const winddirection = data.currentConditions.winddir;
      const uv_index = data.currentConditions.uvindex;
      const feelslike = data.currentConditions.feelslike;

      document.querySelector(".location-result").textContent = location;
      document.querySelector(".lat-result").textContent = lat;
      document.querySelector(".long-result").textContent = long;
      document.querySelector(".timezone-result").textContent = timezone;
      document.querySelector(".windspeed-result").textContent = windspeed;
      document.querySelector(".pressure-result").textContent = pressure;
      document.querySelector(".humidity-result").textContent = humidity;
      document.querySelector(".winddirection-result").textContent = winddirection;
      document.querySelector(".UVIndex-result").textContent = uv_index;
      document.querySelector(".winFeelsLike-result").textContent = feelslike;
    })
    .catch(err => {
      document.querySelector('.result-report').classList.add("d-none");
      document.querySelector('.errorDiv').classList.remove("d-none");
     
   });
   
}
