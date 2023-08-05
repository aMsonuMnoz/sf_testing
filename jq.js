import $ from 'jquery';
import { getImageTag, imageURLs } from './bg';

function hideAll() {
    $("#overlay-models").css("visibility","hidden");
    $("#overlay-models").css("display","none");
    $('div[id^="overlay"]').hide();
    $(".ComputerLoading").remove();
    $("#crt-overlay").show();
}


$(function(){

    $("#overlay-models").css("display","none");

    $("#LinksInterface").on("click", function() {
        hideAll();
        $("#overlay-links").css("background",getImageTag());
        $("#overlay-links").css("background-size","cover");
        $("#overlay-links").show();
        
    });

    $("#ThreeDimInterface").on("click", function() {
        hideAll();
        $("#overlay-models").css("visibility","visible");
        $("#overlay-models").css("display","inline-block");
        
    });

    $("#PowerButton").on("click", function() {
        hideAll();

        $("#overlay-links").show();
        $('#overlay-links').prepend($('<img>',{class:'ComputerLoading',src:'images/CRT_off.webp'}));
        setTimeout(() => {
          $(".ComputerLoading").attr("src","images/Scene1-off.webp");
          $("#crt-overlay").hide();
        }, "1300");
        

    });

    $("#Lyrics").on("click", function() {

        hideAll();
        $("#overlay-lyrics").show();
        $("#overlay-lyrics").css("display","inline-block");
        
    });


  
  });