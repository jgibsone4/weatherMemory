//INPUT VARgit

var startDateInput;
var endDateInput;
var startTimeInput;
var endTimeInput;
var birthLocationInput;

var startDateInput = document.querySelector(".startDateInput");

//https://www.youtube.com/watch?v=BvU4L2C1wcI

$(document).ready(function () {
  $(".form-submit").submit(function (event) {
    //event listener
    performSearch(event);
  });

  function performSearch(event) {
    event.preventDefault();

    var apikey = "G9CVLC87MQTZ38PJ3ZJZCWRZJ";
    var queryURL =
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history?&aggregateHours=24&startDateTime=1975-04-22T00:00:00&endDateTime=1975-04-22T01:00:00&unitGroup=us&contentType=csv&dayStartTime=0:0:00&dayEndTime=0:0:00&location=Sterling,VA,US&key=" +
      apikey;

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
    });

    function formatSearch(jsonObject) {
      // rename and correct display results
      var startDateInput = jsonObject.startDateInput;
      var endDateInput = jsonObject.endDateInput;
      var startTimeInput = jsonObject.startTimeInput;
      var endTimeInput = jsonObject.endTimeInput;
      var birthLocationInput = jsonObject.birthLocationInput;

      //What is displayed
      $(".city-name").text(birthLocationInput); //??Change to output??
      $(".display-time").text(startTimeInput);
      ".historical-weather".text(historicalweatherOutput); //check reuslts in api
    }
  }
});

// //INPUT VAR
// var DateInput;
// var TimeInput;
// var birthLocationInput;
// var search;

// $(document).ready(function (){
//     $('.search').submit(function(event){ //event listener
//         performSearch(event);
//     });
//     });
//     $('.search').click(function(){
//         $.getJSON(queryURL, function( cityTempData ) {
//           // cityTempData is the json object
//           console.log('2) output the api data here', cityTempData);
//           $('#city-name').text(cityTempData.name);
//           console.log('show me main object', cityTempData.main);
//           $('#current-temp').text(cityTempData.main.temp);
//         });
//         function performSearch(event){
//             event.preventDefault();
//             var key = "G9CVLC87MQTZ38PJ3ZJZCWRZJ"
//             var queryURL =
//             "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history?&aggregateHours=24&startDateTime=1975-04-22T00:00:00&endDateTime=1975-04-22T01:00:00&unitGroup=us&contentType=csv&dayStartTime=0:0:00&dayEndTime=0:0:00&location=" + birthLocationInput.value + key
//             $.ajax({
//               url: queryURL,
//               method: "GET",
//             }).then(function (response) {
//               console.log(response);
//             });

//     function formatSearch(jsonObject) { // rename and correct display results
//         var startDateInput = jsonObject.name;
//         var endDateInput = jsonObject.end;        
//         var startTimeInput = jsonObject.end;  
//         var endTimeInput = jsonObject.end;  
//         var birthLocationInput = jsonObject.end;  
//     }
//     }})
