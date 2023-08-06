import $ from 'jquery';
import { getImageTag, imageURLs } from './bg';

function hideAll() {
    $("#overlay-models").css("visibility","hidden");
    $('div[id^="overlay"]').hide();
    $("#overlay-models").css("display","inline-block");
    $(".ComputerLoading").remove();
    $("#crt-overlay").show();
}


$(function(){

    $("#overlay-models").css("visibility","hidden");

    $("#LinksInterface").on("click", function() {
        hideAll();
        $('#overlay-links').prepend($('<img>',{class:'ComputerLoading',src:'images/CRT_off.webp'}));
        $("#overlay-links").css("background",getImageTag());
        $("#overlay-links").css("background-size","cover");
        $("#overlay-links").show();
        setTimeout(() => {
            $(".ComputerLoading").remove();
          }, "200");
        
    });

    $("#ThreeDimInterface").on("click", function() {
        hideAll();

        $('#overlay-models').prepend($('<img>',{class:'ComputerLoading',src:'images/CRT_off.webp'}));
        $("#overlay-models").css("visibility","visible");
        $("#overlay-models").css("display","inline-block");
        setTimeout(() => {
            $(".ComputerLoading").remove();
          }, "200");
        
    });

    $("#PowerButton").on("click", function() {
        hideAll();

        $("#overlay-links").show();
        $('#overlay-links').prepend($('<img>',{class:'ComputerLoading',src:'images/CRT_off.webp'}));
        setTimeout(() => {
          $(".ComputerLoading").attr("src","images/Scene1-off.webp");
          $("#crt-overlay").hide();
        }, "1800");
        

    });

    $("#Lyrics").on("click", function() {
        hideAll();
        $('#overlay-lyrics').prepend($('<img>',{class:'ComputerLoading',src:'images/CRT_off.webp'}));
        $("#overlay-lyrics").show();
        $("#overlay-lyrics").css("display","inline-block");
        setTimeout(() => {
            $(".ComputerLoading").remove();
          }, "200");
        
    });

    $("#Mail").on("click", function() {
        hideAll();
        $('#overlay-guest').prepend($('<img>',{class:'ComputerLoading',src:'images/CRT_off.webp'}));
        $("#overlay-guest").show();
        $("#overlay-guest").css("display","inline-block");
        setTimeout(() => {
            $(".ComputerLoading").remove();
          }, "200");
        
    });


  
  });