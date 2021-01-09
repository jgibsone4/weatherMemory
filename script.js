$(document).ready(function(){

    var searchPage = $(".searchPage");
    var vaMapImg = $(".vaMapImg");

    $(searchPage).hide();

    $(vaMapImg).click(function(){
    $(vaMapImg).fadeOut("slow");
    $(searchPage).fadeIn("slow");
    })

    
});
