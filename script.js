
$(document).ready(function () {

//Create value from input
var cityInput = $('.cityInput');
var stateInput = $('.stateInput');
var monthInput = $('.monthInput');
var yearInput = $('.yearInput');
var hourInput = $('.hourInput');
var minuteInput = $('.minuteInput')
var dayInput = $('.dayInput');






     function performSearch(event) {

    event.preventDefault();

    console.log(yearInput.val());
    console.log(dayInput.val());

    var apiKey = "G9CVLC87MQTZ38PJ3ZJZCWRZJ";
   /*  var queryURL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history?&aggregateHours=24&startDateTime="+yearInput+"-"+monthInput+"-"+dayInput+"T"+hourInput+":"+minuteInput+":00&endDateTime="+yearInput+"-"+monthInput+"-"+dayInput+"T"+hourInput+":"+minuteInput+":30&unitGroup=us&contentType=csv&dayStartTime=0:0:00&dayEndTime=0:0:00&location="+cityInput+","+stateInput+",US&key="+apiKey; */
    var startDate = `${yearInput.val()}-${monthInput.val()}-${dayInput.val()}`;
    console.log(startDate);
    var endDate = "";


    var queryURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/richmond%2Cva/${startDate}/${endDate}?unitGroup=us&key=${apiKey}`

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      formatSearch(response);
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


