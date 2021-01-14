$(document).ready(function(){
  $('select').formSelect();
});

$(document).ready(function () {
//Create value from input
// var cityInput = $(".cityInput");
// var stateInput = $(".stateInput");
// var monthInput = $(".monthInput");
// var yearInput = $(".yearInput");
// var hourInput = $(".hourInput");
// var minuteInput = $(".minuteInput");
// var dayInput = $(".dayInput");

var cityInput = "Richmond";
var stateInput = "VA";
var yearInput = "1985";
var monthInput = "02";
var dayInput = "13";
var hourInput = "22";
var minuteInput = "25";




function performSearch(event) {
  event.preventDefault();

  // console.log(yearInput.val());
  // console.log(dayInput.val());

  var apiKey = "G9CVLC87MQTZ38PJ3ZJZCWRZJ";

  var queryURL =   "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history?&aggregateHours=24&startDateTime="+yearInput+"-"+monthInput+"-"+dayInput+"T"+hourInput+":"+minuteInput+":00&endDateTime="+yearInput+"-"+monthInput+"-"+dayInput+"T"+hourInput+":"+minuteInput+":00&unitGroup=us&contentType=json&dayStartTime=0:0:00&dayEndTime=0:0:00&location="+cityInput+","+stateInput+",US&key=G9CVLC87MQTZ38PJ3ZJZCWRZJ"
  
  // "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=24&locationMode=single&contentType=json&unitGroup=us&key="+apiKey+"&locations=New York City,NY"

  // "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Fredericksburg%2C%20VA%2C%20US?unitGroup=us&key=U6CNYSFK8K66GHL8X59APHAQF&include=obs%2Cfcst%2Cstats%2Chours%2Calerts%2Ccurrent%2Cevents="+apiKey;
  // var startDate = `${yearInput.val()}-${monthInput.val()}-${dayInput.val()}`;

//     var endDate = 
//       "${yearInput.val()}-${monthInput.val()}-${dayInput.val()}-${hourInput.val()}-${minuteInput.val()}:30-"; // error in console
//       console.log(startDate);
// console.log(endDate);
  

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
     var weatherCon = response.locations[cityInput+","+stateInput+",US"].values[0].conditions;
     var tempResult = response.locations[cityInput+","+stateInput+",US"].values[0].temp;
 console.log(weatherCon);
  console.log (tempResult);
    console.log(response);
    var humidityResult = response.locations[cityInput+","+stateInput+",US"].values[0].humidity;
    var maxTempResult = response.locations[cityInput+","+stateInput+",US"].values[0].maxt;
  var minTempResult = response.locations[cityInput+","+stateInput+",US"].values[0].mint;
  var snowDepthResult = response.locations[cityInput+","+stateInput+",US"].values[0].snowdepth;
  console.log(humidityResult);
  console.log (minTempResult);
  console.log (maxTempResult);
  console.log(snowDepthResult);
  console.log(response);
  });

  // var apiKey  = "gs7YZMi9EDZOcxQZ3oiMyOokV9g4S74u4MiKtOI9";
  // var queryURL ="https://api.nasa.gov/planetary/apod?api_key="+apiKey;
  // $.ajax({
  //   url: queryURL,
  //   method: "GET",
  // }).then(function (response) {
  //   console.log(response);
    
  // });

/*   function formatSearch(jsonObject) {
    // rename and correct display results */
    /* var startDateInput = jsonObject.startDateInput;
      var endDateInput = jsonObject.endDateInput;
      var startTimeInput = jsonObject.startTimeInput;
      var endTimeInput = jsonObject.endTimeInput;
      var birthLocationInput = jsonObject.birthLocationInput; */

    //What is displayed
  /*   $("#city-name").text(cityInput.val()); */
    /*  $(".stateInput").text(stateInput.val());
      $(".historical-weather").text(historicalweatherOutput);  */
 /*  } */
}
//Call the function
$(".submitBtn").click(performSearch);
});
