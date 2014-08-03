$(document).ready(function() {

  $("nav a").click(function(event){
    event.preventDefault();
    var goToPage = "."+$(this).attr("rel");

    console.log(goToPage);

    $(".container").children().removeClass("currentPage");
    $(goToPage).addClass("currentPage");


  });

  $( "img" ).click(function() {
    $(this).toggleClass("zoom");
    $(this).siblings().toggle("slow");


    });




});
