
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


    // apiKey2 = "YreeZrO5piLWfH99ELO1qsiST1iuNaBz1sMlVyUc"
    
    // var queryUrl2 = "https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date="+yearInput"-"+monthValue"-"+dayInput+"&dim=0.15&"+apiKey2;

    // $.ajax({
    //   url: queryUrl2,
    //   method: "GET",
    // }).then(function (response) {
    //   $("#earth-day").append(response)
    // });
    
  };

  let search = document.querySelector(".submitBtn")

  search.addEventListener("click", ()=> {
    console.log("search pressed")
    sendApiRequest()
  })

  async function sendApiRequest() {
    let API_KEY = "YreeZrO5piLWfH99ELO1qsiST1iuNaBz1sMlVyUc"
    let response = await fetch (`https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=${API_KEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
  }
  
  function useApiData(data) {
    document.querySelector("#earth-day").innerHTML = data[0].dscovr_j2000_position.image
  }


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


