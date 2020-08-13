(function () {
  const API_KEY = "20d67a9c6f5bce56354b6ae7e2ea65cc";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";

  const textElem = document.querySelector(".location");

  function getWeather(obj) {
    //
    fetch(
      `${BASE_URL}lat=${obj.lat}&lon=${obj.log}&appid=${API_KEY}&units=metric`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        //console.log(JSON.stringify(myJson));
        console.log(myJson);
        textElem.innerHTML = "location : " + myJson.name;
      });
  }

  function handlerSuccess(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    //console.log( lat , log );
    const coordObj = {
      lat: lat,
      log: log,
    };
    getWeather(coordObj);
  }
  function handlerError() {
    console.log("Geolocation is not supported by this browser.");
  }
  function getLocation() {
    navigator.geolocation.getCurrentPosition(handlerSuccess, handlerError);
  }
  getLocation();
})();
