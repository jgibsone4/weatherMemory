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
      var cloudcover = response.days[0].cloudcover;
      console.log(response);
      $("#conditionsDisplay").text(conditions);
      $("#tempDisplay").text(temp);
      
      if (conditions = "Clear") {
        $(".headerImage").attr("src", "assets/images/clearDayBg.png")
        $("body").css("background-color","#639edc");
        $(".nameText").css("color", "#efefef");
        $(".descText").css("color", "#efefef");
      }
      if (conditions = "Partially cloudy") {
        $(".headerImage").attr("src", "assets/images/partlyCloudyDayBg.png")
        $("body").css("background-color","#4e91ab");
        $(".nameText").css("color", "#0f394a");
        $(".descText").css("color", "#0f394a");
      }

      

    });

    $("#cityName").text(cityInput);
    $("#stateName").text(stateInput);
    $("#monthDisplay").text(monthValue);
    $("#dayDisplay").text(dayInput);
    $("#yearDisplay").text(yearInput);

    
    
  };

  

  //Call the function
  $(".submitBtn").click(performSearch);

  //Button Event Listeners - Toggles between Search and Results Page
  $(".submitBtn").click(function() {
    $(".frontPage").fadeOut(400, function () {
            $('.resultsPage').fadeIn();
        });

        // var year = $("#yearInput").val();
        // var month = GetInputValue('monthInput');
        // var day = GetInputValue('dayInput');
        
        // var topSong = {
        //   "async": true,
        //   "crossDomain": true,
        //   "url": "https://billboard-api2.p.rapidapi.com/hot-100?date="+year+"-"+month+"-"+day+"&range=1-10",
        //   "method": "GET",
        //   "headers": {
        //     "x-rapidapi-key": "1aed5862e1mshd7e0b92aad20dadp15dcf4jsn5123a112cbee",
        //     "x-rapidapi-host": "billboard-api2.p.rapidapi.com"
        //   }
        // };
        
        // $.ajax(topSong).done(function (response) {
        //   console.log(response.content[1].artist);
        //   var songNumberOne = response.content[1].title;
        //   var artistNumberOne = response.content[1].artist;
  
        //   $(".songResult").text(artistNumberOne)
        // });
  });

  $(".homeBtn").click(function() {
    $(".resultsPage").fadeOut(400, function () {
      $('.frontPage').fadeIn()
        $(".headerImage").attr("src", "assets/images/landingBg.png")
        $("body").css("background-color","#322634");
        $(".nameText").css("color", "#d38e7e");
        $(".descText").css("color", "#81656d");
      
  });
  
});

});


