$(document).ready(function(){
  var weather = new XMLHttpRequest();
  // var r = weather.current_observation;
  var dis

  $.ajax({
    type:"GET",
    url: "http://api.wunderground.com/api/3758d4a57136a50e/conditions/q/NY/New_York_City.json",
    success: function(data, textStatus, jqXHR){
      console.log(data.current_observation);
      console.log(data.response);
      console.log(textStatus);
      console.log(jqXHR);
      dis = "Current location:" + data.current_observation.display_location.city + "<p><strong>";
      dis +=  "current temp: " + data.current_observation.temperature_string + "<p><strong>";
      dis +=  " current wind speed: " + data.current_observation.wind_string +"<p><strong>";
      dis += "current wind direction:" +data.current_observation.wind_dir_string;
      document.getElementById("here").innerHTML = dis;
    },
    error: function(jqXHR, textStatus, errorThrown){
     console.log(jqXHR);
     console.log(textStatus);
     console.log(errorThrown);
    }
  })
});