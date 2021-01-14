$(document).ready(function () {
<<<<<<< HEAD

  $(document).ready(function(){
    $('select').formSelect();
  });

//Create value from input
var cityInput = $('.cityInput').val();
var stateInput = $('.stateInput').val();
var monthInput = $('.monthInput').val();
var yearInput = $('.yearInput').val();
var hourInput = $('.hourInput').val();
var minuteInput = $('.minuteInput').val();
var dayInput = $('.dayInput').val();


//https://www.youtube.com/watch?v=BvU4L2C1wcI

     function performSearch(event) {
=======
  //Create value from input
  var cityInput = $(".cityInput");
  var stateInput = $(".stateInput");
  var monthInput = $(".monthInput");
  var yearInput = $(".yearInput");
  var hourInput = $(".hourInput");
  var minuteInput = $(".minuteInput");
  var dayInput = $(".dayInput");

  function performSearch(event) {
>>>>>>> 241d4c67ce80209536fc69d91221b90c6fec0ebf
    event.preventDefault();

    console.log(yearInput.val());
    console.log(dayInput.val());

    var apiKey = "G9CVLC87MQTZ38PJ3ZJZCWRZJ";
<<<<<<< HEAD
    var queryURL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history?&aggregateHours=24&startDateTime="+yearInput+"-"+monthInput+"-"+dayInput+"T"+hourInput+":"+minuteInput+":00&endDateTime="+yearInput+"-"+monthInput+"-"+dayInput+"T"+hourInput+":"+minuteInput+":30&unitGroup=us&contentType=json&dayStartTime=0:0:00&dayEndTime=0:0:00&location="+cityInput+","+stateInput+",US&key="+apiKey;


=======

    var queryURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Fredericksburg%2C%20VA%2C%20US?unitGroup=us&key=U6CNYSFK8K66GHL8X59APHAQF&include=obs%2Cfcst%2Cstats%2Chours%2Calerts%2Ccurrent%2Cevents="+apiKey;
    var startDate = `${yearInput.val()}-${monthInput.val()}-${dayInput.val()}`;
  
    var endDate = 
      "${yearInput.val()}-${monthInput.val()}-${dayInput.val()}-${hourInput.val()}-${minuteInput.val()}:30-"; // error in console
      console.log(startDate);
console.log(endDate);
    
>>>>>>> 241d4c67ce80209536fc69d91221b90c6fec0ebf

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      formatSearch(response);
    });
    var apiKey  = "gs7YZMi9EDZOcxQZ3oiMyOokV9g4S74u4MiKtOI9";
    var queryURL ="https://api.nasa.gov/planetary/apod?api_key="+apiKey;
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      
    });

    function formatSearch(jsonObject) {
      // rename and correct display results
      /* var startDateInput = jsonObject.startDateInput;
        var endDateInput = jsonObject.endDateInput;
        var startTimeInput = jsonObject.startTimeInput;
        var endTimeInput = jsonObject.endTimeInput;
        var birthLocationInput = jsonObject.birthLocationInput; */

      //What is displayed
      $("#city-name").text(cityInput.val());
      /*  $(".stateInput").text(stateInput.val());
        $(".historical-weather").text(historicalweatherOutput);  */
    }
  }
  //Call the function
  $(".submitBtn").click(performSearch);
});
