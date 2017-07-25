var weatherApp = {

  scale: 'F',

  setup: function() {
    this.getCoords();
  },

  getCoords: function() {
    // if ("geolocation" in navigator) {
    //   navigator.geolocation.getCurrentPosition(weatherApp.geoSuccess, weatherApp.geoFail);
    // } else {
      weatherApp.geoFail();
    // }
  },

  geoSuccess: function(position) {
    console.log("Geolocation successful");
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    weatherApp.getWeatherData(weatherApp.weatherDataReady, lat, lon);
  },

  geoFail: function() {
    console.log("Geolocation unsuccessful, using ip-api.com");
    // $.getJSON("https://ip-api.com/json", weatherApp.ipApiCB);
    $.getJSON("https://ipapi.co/json", weatherApp.ipApiCB);

  },

  ipApiCB: function(locData) {
    var lat = locData.latitude.toString();
    var lon = locData.longitude.toString();
    weatherApp.getWeatherData(weatherApp.weatherDataReady, lat, lon);
  },

  getWeatherData: function(weatherDataReady, lat, lon) {
    var weatherKey = 'dbed1f53591ea590a560d6f326507643'
    var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' + lat + '&lon=' + lon + '&APPID=' + weatherKey;
    $.getJSON(weatherURL, weatherDataReady);
  },

  weatherDataReady: function(weatherData) {
    weatherApp.weatherData = weatherData;
    weatherApp.runApp();
  },

  runApp: function() {
    var data = weatherApp.weatherData;
    weatherApp.dispBackground(data);
    weatherApp.dispLocation(data);
    weatherApp.dispTemp();
    weatherApp.dispScale();
    weatherApp.dispDescription(data);
  },

  dispBackground: function() {
    $('.weather').css('background-image', 'url(' + weatherApp.getBackground() + ')');
  },

  dispLocation: function(data) {
    $('.location').text(data.name + ', ' + data.sys.country);
  },

  dispTemp: function() {
    $('.temp').text(weatherApp.tempStr());
  },

  dispScale: function() {
    $('.scale').text(weatherApp.scale)
      .click(weatherApp.changeScale)
      .css('cursor', 'pointer');
  },

  dispDescription: function(data) {
    $('.description').text(data.weather[0].main + " ")
      .append('<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png" alt="Weather Icon">');
  },

  getBackground: function() {
    var bg = '';
    switch (weatherApp.weatherData.weather[0].main) {
      case 'Thunderstorm':
      case 'Extreme':
        bg = 'https://s20.postimg.org/ugmg5o2a5/storm.jpg';
        break;
      case 'Drizzle':
      case 'Rain':
        bg = 'https://s20.postimg.org/f8efrhl71/rain.jpg';
        break;
      case 'Snow':
        bg = 'https://s20.postimg.org/6ov1tqcul/snow.png';
        break;
      case 'Clear':
        bg = 'https://s20.postimg.org/784qgqtn1/clear.jpg';
        break;
      case 'Clouds':
        bg = 'https://s20.postimg.org/ntccwekr1/overcast.jpg';
        break;
      default:
        bg = 'https://s20.postimg.org/ljjn7wmfh/sunny.jpg';
    };
    return bg;
  },

  getTemp: function() {
    var temp = Math.floor(weatherApp.weatherData.main.temp);
    if (weatherApp.scale === 'F') {
      return temp;
    } else {
      return Math.floor((temp - 32) * 5 / 9);
    }
  },

  tempStr: function() {
    return weatherApp.getTemp() + '°';
  },

  changeScale: function() {
    if (weatherApp.scale === 'F') {
      weatherApp.scale = 'C';
    } else {
      weatherApp.scale = 'F';
    }
    $('.temp').text(weatherApp.tempStr());
    $('.scale').text(weatherApp.scale);
  }
};

$(document).ready(function() {
  weatherApp.setup();
});
