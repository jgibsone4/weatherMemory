
$(document).ready(function() {
  $(".resultsPage").hide();

  $('select').formSelect();
  
  function GetInputValue(field){
    var sel = document.getElementById(field)
    return sel.options[sel.selectedIndex].value
  }

  function performSearch(event) {
    event.preventDefault();

    monthValue=GetInputValue('monthInput');
    dayInput = GetInputValue('dayInput');
    var yearInput = $("#yearInput").val();
    var cityInput = $("#cityInput").val();
    var stateInput = $("#stateInput").val();
   
    var apiKey = "G9CVLC87MQTZ38PJ3ZJZCWRZJ";

    var queryURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+cityInput+"%2C%20"+stateInput+"%2C%20US/"+yearInput+"-"+monthValue+"-"+dayInput+"/"+yearInput+"-"+monthValue+"-"+dayInput+"?unitGroup=us&key="+apiKey+"&include=obs%2Cfcst%2Cstats%2Calerts"

  
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      var conditions = response.days[0].conditions;
      var precip = response.days[0].precip;
      var temp = response.days[0].temp;
      var snowdepth = response.days[0].snowdepth;
      var address = response.days[0].address;
      console.log(response);
      $("#conditionsDisplay").text(conditions);
    });

    $("#cityName").text(cityInput);
    $("#stateName").text(stateInput);
    $("#monthDisplay").text(monthValue);
    $("#dayDisplay").text(dayInput);
    $("#yearDisplay").text(yearInput);


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

  //Button Event Listeners - Toggles between Search and Results Page
  $(".submitBtn").click(function() {
    $(".frontPage").fadeOut(400, function () {
            $('.resultsPage').fadeIn();
        });
  });

  $(".homeBtn").click(function() {
    $(".resultsPage").fadeOut(400, function () {
      $('.frontPage').fadeIn();
  });
});

});


