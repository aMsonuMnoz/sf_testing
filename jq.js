import $ from 'jquery';


function hideAll() {
    $("#Interface2").css("visibility","hidden");
    $("#Interface2").css("display","none");
    $('div[id^="Interface"]').hide();
    $(".ComputerLoading").remove();
}



$(function(){

    $("#Interface2").css("display","none");

    $("#LinksInterface").on("click", function() {
        hideAll();
        $("#Interface").show();
        
    });

    $("#ThreeDimInterface").on("click", function() {
        hideAll();
        $("#Interface2").css("visibility","visible");
        $("#Interface2").css("display","inline-block");
        
    });

    $("#PowerButton").on("click", function() {
        hideAll();

        $("#Interface").show();
        $('#Interface').prepend($('<img>',{class:'ComputerLoading',src:'images/CRT_off.webp'}));
        setTimeout(() => {
          $(".ComputerLoading").attr("src","images/Scene8_off.png");
        }, "1000");

    });

    $("#Lyrics").on("click", function() {

        hideAll();
        $("#Interface3").show();
        $("#Interface3").css("display","inline-block");
        
    });


  
  });