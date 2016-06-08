$(document).ready(function(){
  var weather = new XMLHttpRequest();
  // var r = weather.current_observation;
  var yeah

  $.ajax({
    type:"GET",
    url: "http://api.wunderground.com/api/3758d4a57136a50e/conditions/q/NY/New_York_City.json",
    success: function(data, textStatus, jqXHR){
      console.log(data.current_observation); //current_observation is from the key-value pair response, from reading the documentation
      console.log(data.response);
      console.log(textStatus);
      console.log(jqXHR);
      yeah = "Current location:" + data.current_observation.display_location.full + "<p><strong>";
      yeah += "current temp:" + data.current_observation.temperature_string + "<p><strong>";
      yeah += "feels like:" + data.current_observation.feelslike_string + "<p><strong>";
      yeah += "solar radiation:" + data.current_observation.solarradiation + "<p><strong>";
      yeah += "wind direction:" + data.current_observation.wind_dir + "<p><strong>";
      yeah += "wind speed:" + data.current_observation.wind_mph + "<p><strong>";

      document.getElementById("here").innerHTML = yeah;
    },
    error: function(jqXHR, textStatus, errorThrown){
     console.log(jqXHR);
     console.log(textStatus);
     console.log(errorThrown);
    }
  })
});









// $(document).ready(function(){
//   var weather = new XMLHttpRequest();
//   var dis //= "Current location:" + current_observation.display_location + "<p><strong>";
//   // var r = JSON.parse(weather.response);
//   $.ajax({
//     type:"GET",
//     url: "http://api.wunderground.com/api/3758d4a57136a50e/geolookup/conditions/q/NY/New_York_City.json",
//     dataType: "jsonp",
//     success: function(parsed_json){
      
//       var location = parsed_json["location"]["city"];
//       var temp_f = parsed_json["current_observation"]["temp_f"];
//       document.getElementById("here").innerHTML = location += "<p><strong>" + temp_f + "<p><strong>";
//     },
//     error: function(jqXHR, textStatus, errorThrown){
//      console.log(jqXHR);
//      console.log(textStatus);
//      console.log(errorThrown);
//     }
//   });
// }); 
//this is the basic version














//start of jshapiro's suggestions
// $(document).ready(function(){
//   var weather = new XMLHttpRequest();
//   // var r = weather.current_observation;
//   var dis

//   $.ajax({
//     type:"GET",
//     url: "http://api.wunderground.com/api/3758d4a57136a50e/conditions/q/NY/New_York_City.json",
//     success: function(data, textStatus, jqXHR){
//       console.log(data.current_observation);
//       console.log(data.response);
//       console.log(textStatus);
//       console.log(jqXHR);
//       dis = "Current location:" + data.current_observation.display_location.city + "<p><strong>";
//       dis +=  "current temp: " + data.current_observation.temperature_string + "<p><strong>";
//       dis +=  " current wind speed: " + data.current_observation.wind_string +"<p><strong>";
//       dis += "current wind direction:" +data.current_observation.wind_dir_string;
//       document.getElementById("here").innerHTML = dis;
//     },
//     error: function(jqXHR, textStatus, errorThrown){
//      console.log(jqXHR);
//      console.log(textStatus);
//      console.log(errorThrown);
//     }
//   })
// });
//end of jshapiro's suggestions


















  // var weather = new XMLHttpRequest();
  // var r = JSON.parse(weather.response);
  // var dis = "Current location:" + r.current_observation.display_location + "<p><strong>";


  // dis +=  "current temp: " + r.current_observation.temperature_string + "<p><strong>";
  // dis +=  " current wind speed: " + r.current_observation.wind_string +"<p><strong>";
  // dis += "current wind direction:" +r.current_observation.wind_dir_string;
  // document.getElementById("here").innerHTML = dis;

    // dis +=  "current temp: " + r.current_observation.temperature_string + "<p><strong>";
    // dis +=  " current wind speed: " + r.current_observation.wind_string +"<p><strong>";
    // dis += "current wind direction:" +r.current_observation.wind_dir_string;
    // document.getElementById("here").innerHTML = dis;
  // });

// var weather = new XMLHttpRequest();
// weather.open("GET", "http://api.wunderground.com/api/3758d4a57136a50e/conditions/q/NY/New_York_City.json", false); // on this line of code conditions, NY, and New_York_City can be substituted for what kind and which cities you want results for 
// weather.send(null);

// var r = JSON.parse(weather.response);

// var dis = "Current location: " + r.current_observation.display_location + "<p><strong>";
// dis +=  "current temp: " + r.current_observation.temperature_string + "<p><strong>";
// dis +=  " current wind speed: " + r.current_observation.wind_string +"<p><strong>"
// dis += "current wind direction:" +r.current_observation.wind_dir_string;
// document.getElementById("here").innerHTML = dis;