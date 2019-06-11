$('#hide').hide();
$('#hide1').hide();
$("#btn").click(() => {
    
 var city = $('#cityInput').val();
console.log(city);
let appId = "&APPID=d2c88add7b631eb9d5c34c5c48de6565";
let units = "&units=metric";
$.ajax({
    //JSON URL
    url: 'https://api.openweathermap.org/data/2.5/weather?q='+city+appId+units,
    // type of request ('GET' or 'POSt')
    type: "GET",
    // json or html or xml
    dataType: "json",
    success: data => {
      convertHTML(data);
    },
    error: error => {
      console.log('There is an error'+ error);
    }

  });
  $('#hide').show();
  $('#hide1').show();
  function convertHTML(data) {
    console.log(data);
let cityName = city.toUpperCase()+ ', '+data.sys.country +' : ' + data.main.temp + '<sup>°C</sup>' ;
let wind = data.wind.speed+ ' km/h';
let humidity = data.main.humidity;
let description = data.weather[0].description;

    $('#cityNameId').html(cityName);
    $('#windId').html(wind);
    $('#humId').html(humidity);
    $('#desId').html(description); 
  }
});
