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
      $("#tempDisplay").text(temp);
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
        var year = $("#yearInput").val();
        var month = GetInputValue('monthInput');
        var day = GetInputValue('dayInput');
        var topSong = {
          "async": true,
          "crossDomain": true,
          "url": "https://billboard-api2.p.rapidapi.com/hot-100?date="+year+"-"+month+"-"+day+"&range=1-10",
          "method": "GET",
          "headers": {
            "x-rapidapi-key": "0f02775473mshc14b0d816c62eb9p13fc46jsnbc8853f8dafb",
            "x-rapidapi-host": "billboard-api2.p.rapidapi.com"
          }
        };
        $.ajax(topSong).done(function (response) {
          console.log(response.content[1].artist);
          var songNumberOne = response.content[1].title;
          var artistNumberOne = response.content[1].artist;
          $(".songResult").text(artistNumberOne);
          $(".songResult").append(" - "+ '"'+songNumberOne+'"');
        });
  });
  $(".homeBtn").click(function() {
    $(".resultsPage").fadeOut(400, function () {
      $('.frontPage').fadeIn();
  });
});
});
