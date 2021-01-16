var $monthInput = $("#monthInput");
var $dayInput = $("#dayInput");
var $yearInput = $("#yearInput");
var $cityInput = $("#cityInput");
var $stateInput = $("#stateInput");

$(document).ready(function() {
  //Hides the second page upon loading the page
  $(".resultsPage").hide();
  //Activates the materialize select option
  $('select').formSelect();
  //Grabs the value from the selected option
  function GetInputValue(field){
    var sel = document.getElementById(field)
    return sel.options[sel.selectedIndex].value
  }
  //The main function
  function performSearch(event) {
    event.preventDefault();
    //Input variables
    monthValue=GetInputValue('monthInput');
    dayInput = GetInputValue('dayInput');
    var yearInput = $("#yearInput").val();
    var cityInput = $("#cityInput").val();
    var stateInput = $("#stateInput").val();
  
    var apiKey = "G9CVLC87MQTZ38PJ3ZJZCWRZJ";
    var queryURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+cityInput+"%2C%20"+stateInput+"%2C%20US/"+yearInput+"-"+monthValue+"-"+dayInput+"/"+yearInput+"-"+monthValue+"-"+dayInput+"?unitGroup=us&key="+apiKey+"&include=obs%2Cfcst%2Cstats%2Calerts"
    //Visual Crossing API ajax call
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      //output variables
      var conditions = response.days[0].conditions;
      var precip = response.days[0].precip;
      var temp = response.days[0].temp;
      var snowdepth = response.days[0].snowdepth;
      var address = response.days[0].address;
      var cloudcover = response.days[0].cloudcover;
      console.log(response);
      $("#conditionsDisplay").text(conditions);
      $("#tempDisplay").text(temp);
      //theoretically changes the page styling depending on the conditions variable
      if (conditions === "Clear") {
        $(".headerImage").attr("src", "assets/images/clearDayBg.png")
        $("body").css("background-color","#639edc");
        $(".nameText").css("color", "#efefef");
        $(".descText").css("color", "#efefef");
      }
      if (conditions === "Partially cloudy") {
        $(".headerImage").attr("src", "assets/images/partlyCloudyDayBg.png")
        $("body").css("background-color","#4e91ab");
        $(".nameText").css("color", "#0f394a");
        $(".descText").css("color", "#0f394a");
      }
      if (conditions === "Rain, Partially cloudy") {
        $(".headerImage").attr("src", "assets/images/rainpartiallycloudBg.png")
        $("body").css("background-color","#3c4f55");
        $(".nameText").css("color", "#d7d0bd");
        $(".descText").css("color", "#d7d0bd");
      }
      if (conditions === "Rain") {
        $(".headerImage").attr("src", "assets/images/cloudySkyBg.png")
        $("body").css("background-color","#343b41");
        $(".nameText").css("color", "#9ea0a1");
        $(".descText").css("color", "#9ea0a1");
      }
      if (conditions === "Overcast") {
        $(".headerImage").attr("src", "assets/images/overcastBg.png")
        $("body").css("background-color","#e7e7e7");
        $(".nameText").css("color", "#454c52");
        $(".descText").css("color", "#454c52");
      }
      if (conditions === "Rain, Overcast") {
        $(".headerImage").attr("src", "assets/images/overcastBg.png")
        $("body").css("background-color","#2d4047");
        $(".nameText").css("color", "#454c52");
        $(".descText").css("color", "#454c52");
      }

    });
  
    //adds the output variables to the appropriate div 
    $("#cityName").text(cityInput);
    $("#stateName").text(stateInput);
    $("#monthDisplay").text(monthValue);
    $("#dayDisplay").text(dayInput);
    $("#yearDisplay").text(yearInput);
  };
  //call the function
  $(".submitBtn").click(performSearch);

  //Button Event Listeners - Toggles between Search and Results Page
  $(".submitBtn").click(function() {
    $(".frontPage").fadeOut(400, function () {
        $('.resultsPage').fadeIn();
    });
      //runs the Billboard API ajax
      var year = $("#yearInput").val();
        var month = GetInputValue('monthInput');
        var day = GetInputValue('dayInput');
        var topSong = {
          "async": true,
          "crossDomain": true,
          "url": "https://billboard-api2.p.rapidapi.com/hot-100?date="+year+"-"+month+"-"+day+"&range=1-10",
          "method": "GET",
          "headers": {
            "x-rapidapi-key": "de96edc644msh4e9015568cdc7ddp15bd4ejsn6cb25671ff5b",
            "x-rapidapi-host": "billboard-api2.p.rapidapi.com"
          }
        };
        $.ajax(topSong).done(function (response) {
          console.log(response.content[1].artist);
          var songNumberOne = response.content[1].title;
          var artistNumberOne = response.content[1].artist;
          //adds the api result to the appropriate span
          $(".songResult").text(artistNumberOne);
          $(".songResult").append(" - "+ '"'+songNumberOne+'"');
        });
  });
  //The return button to get back to the search page
  $(".homeBtn").click(function() {
    $(".resultsPage").fadeOut(400, function () {
      $('.frontPage').fadeIn()
      $(".headerImage").attr("src", "assets/images/landingBg.png")
      $("body").css("background-color","#322634");
      $(".nameText").css("color", "#d38e7e");
      $(".descText").css("color", "#81656d");
            localStorage.setItem("month", $monthInput.val());
            localStorage.setItem("day", $dayInput.val());
            localStorage.setItem("year", $yearInput.val());
            localStorage.setItem("city", $cityInput.val());
            localStorage.setItem("state", $stateInput.val());
            //event persists when saved
            $("#monthInput").append(localStorage.getItem("month"));
            $("#dayInput").append(localStorage.getItem("day"));
            $("#yearInput").append(localStorage.getItem("year"));
            $("#cityInput").append(localStorage.getItem("city"));
            $("#stateInput").append(localStorage.getItem("state"));
    });
  });
});
    
       
 


