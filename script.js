
function selectValue(){
  var value = $("#monthInput").val();
  $(".monthResult").text(value);
  return value
};  
  
  $('select').formSelect();

  var cityInput = "Fredericksburg";
  var stateInput = "VA";
  var yearInput = "1985";
  var monthInput = $("#monthInput").on("change", selectValue);
  var mTest = parseInt($("#monthInput").val(), 10);
  var dayInput = "13";
  //var hourInput = "09";
  //var minuteInput = "25";

  //$("#monthInput").on("change",function(){
    //Getting Value
    //var monthInput = $("#monthInput").val();
    //$(".monthResult").text(monthInput);
  //});


  function performSearch(event) {
    event.preventDefault();
    
    //var apiKey = "G9CVLC87MQTZ38PJ3ZJZCWRZJ";

    var queryURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+cityInput+"%2C%20"+stateInput+"%2C%20US/"+yearInput+"-"+monthInput+"-"+dayInput+"/"+yearInput+"-"+monthInput+"-"+dayInput+"?unitGroup=us&key=G9CVLC87MQTZ38PJ3ZJZCWRZJ&include=obs%2Cfcst"

    //var queryURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+cityInput+"%2C%20"+stateInput+"%2C%20US/"+yearInput+"-"+monthInput+"-"+dayInput+"/"+yearInput+"-"+monthInput+"-"+dayInput+"?unitGroup=us&key=G9CVLC87MQTZ38PJ3ZJZCWRZJ&include=obs%2Cfcst"

    
    //"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history?&aggregateHours=24&startDateTime="+yearInput+"-"+monthInput+"-"+dayInput+"T"+hourInput+":"+minuteInput+":00&endDateTime="+yearInput+"-"+monthInput+"-"+dayInput+"T"+hourInput+":"+minuteInput+":00&unitGroup=us&contentType=json&dayStartTime=0:0:00&dayEndTime=0:0:00&location="+cityInput+","+stateInput+",US&key=G9CVLC87MQTZ38PJ3ZJZCWRZJ"
    console.log(monthInput);
    
  
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      //var weatherCon = response.locations[cityInput+","+stateInput+",US"].values[0].conditions;
      console.log(response);
      //console.log(weatherCon);
      
      
      
    });

    

    // var apiKey  = "gs7YZMi9EDZOcxQZ3oiMyOokV9g4S74u4MiKtOI9";
    // var queryURL ="https://api.nasa.gov/planetary/apod?api_key="+apiKey;
    // $.ajax({
    //   url: queryURL,
    //   method: "GET",
    // }).then(function (response) {
    //   console.log(response);
      
    // });
  };


  //Call the function
  $(".submitBtn").click(performSearch);

