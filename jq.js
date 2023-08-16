import $ from 'jquery';
import { getImageTag, imageURLs } from './bg';

export function hideAll() {
    $("#overlay-models").css("visibility","hidden");
    $('div[id^="overlay"]').hide();
    $("#overlay-models").css("display","inline-block");
    $("#crt-overlay").show();
    $(".ComputerLoading").remove();
    $("#scroll").hide();
    $("#back-to-list").hide();
}

function linksOff() {
    $("#Buttons").toggle();
    $("#Socials").toggle();
    $("#Cover").toggle();
    $("#Listen").toggle();
    $("#newSong").toggle();
}


$(function(){
    $("#Interface").hide();
    $("#Interface").css("visibility","visible");
    $("#Interface").show("slow");
    $("#overlay-models").css("visibility","hidden");
    

    $("#LinksInterface").on("click", function() {
        hideAll();
        $("#overlay-loading").show();
        $("#overlay-links").css("background",getImageTag());
        $("#overlay-links").css("background-size","cover");
        $("#overlay-links").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
          }, "200");
    });

    // $("#ThreeDimInterface").on("click", function() {
    //     hideAll();
    //     loadModel(0);
    //     $("#overlay-loading").show();
    //     $("#overlay-models").css("visibility","visible");
    //     setTimeout(() => {
    //         $("#overlay-loading").hide();
    //       }, "200")
    // });

    $("#PowerButton").on("click", function() {
        hideAll();

        $("#overlay-loading").show();

        setTimeout(() => {
            $('#overlay-loading').prepend($('<img>',{class:'ComputerLoading',src:'images/Scene1-off.webp'}));
            $("#crt-overlay").hide();
        }, "1800");
    });

    $("#LinksOff").on("click", function() {
        hideAll();
        $("#overlay-loading").show();
        $("#overlay-links").show();
        linksOff();
        setTimeout(() => {
            $("#overlay-loading").hide();
          }, "200");
    });

    $("#Lyrics").on("click", function() {
        hideAll();
        $("#overlay-loading").show();
        $("#sub-songlist").show();
        $("#sub-song").empty();
        $("#sub-song").hide();
        $("#overlay-lyrics").show();
        $("#scroll").show();
        $("#overlay-lyrics").css("display","inline-block");
        setTimeout(() => {
            $("#overlay-loading").hide();
          }, "200");
        
    });

    $("#Guestbook").on("click", function() {
        hideAll();
        $("#overlay-loading").show();
        $("#overlay-guest").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
          }, "200");
        
    });

    $("#Merch").on("click", function() {
        hideAll();
        $("#overlay-loading").show();
        $("#overlay-merch").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
          }, "200");
        
    });

    $("#Mail").on("click", function(){
        hideAll();
        $("#overlay-loading").show();
        $("#overlay-email").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
          }, "200");
    })
  });