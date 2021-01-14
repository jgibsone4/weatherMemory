$(document).ready(function () {
  //Create value from input
  var cityInput = $(".cityInput");
  var stateInput = $(".stateInput");
  var monthInput = $(".monthInput");
  var yearInput = $(".yearInput");
  var hourInput = $(".hourInput");
  var minuteInput = $(".minuteInput");
  var dayInput = $(".dayInput");

  function performSearch(event) {
    event.preventDefault();

    console.log(yearInput.val());
    console.log(dayInput.val());

    var apiKey = "G9CVLC87MQTZ38PJ3ZJZCWRZJ";

    var queryURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Fredericksburg%2C%20VA%2C%20US?unitGroup=us&key=U6CNYSFK8K66GHL8X59APHAQF&include=obs%2Cfcst%2Cstats%2Chours%2Calerts%2Ccurrent%2Cevents="+apiKey;
    var startDate = `${yearInput.val()}-${monthInput.val()}-${dayInput.val()}`;
  
    var endDate = 
      "${yearInput.val()}-${monthInput.val()}-${dayInput.val()}-${hourInput.val()}-${minuteInput.val()}:30-"; // error in console
      console.log(startDate);
console.log(endDate);
    

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
