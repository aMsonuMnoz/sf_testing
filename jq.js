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
    $(".Cover").toggle();
    $("#Listen").toggle();
    $("#newSong").toggle();
    $("#donate").toggle();
    $("#movie").toggle();
    $("#movie2").toggle();
}

$(function(){

    $("#Interface").hide();
    $("#overlay-models").css("visibility","hidden");

    $("#enter").on("click", function() {
        $("#enter").css("display", "none");
        $("#titleLink").show();
        $("#titleLink").css("display","block");
        $("#Interface").css("opacity", "100%");
        $("#Interface").css("z-index", "0").show("slow").css("display", "inline-block");
        $("#overlay-models").css("visibility","hidden");
        // $("#Overlord").css("background", "url('images/snow.webp')");
        $("#Navigation").css("pointer-events", "all").css("opacity", "100%");
        $("#messages").hide();
        $('.pretitleLink').toggleClass('pretitleLink titleLink', '800');

    })


// changes marquee text
    const animated = document.querySelector(".marquee");
    let i = 0;
    let taglines = [ 
        "Show March 9th Acadia Bar and Grill Houston",
        "Farm Route 6, Mile 75 now streaming... click FR6M75.mp4 to watch the live video",
        "Click every button!",
        "Escape from Beautiful Mountain coming soon...",
        "Rest here before continuing to your next web site.",
        "e-Merch e-Store on the way",
        "View our press kit, book us for a show",
        "Make sure you sign the guestbook before you leave to let me know exactly what you think about things",
        "Strong John Fisher's guitar tuning: Eb Bb Bb Gb Bb D, Capo: 6",
        "Follow our Instagram for updates about us",
        "Join our discord and show us some art"
    ];

    animated.addEventListener("animationiteration", () => {
        $("#tagline").text(taglines[i]);
        i++;
        if (i%10==0) {
            i=0;
        }
        $("#tagline").append("<img alt='sunglasses cool guy' id='OKAY' src = 'images/OKAY.webp'>");
    });
    

    $("#LinksInterface").on("click", function() {
        hideAll();
        $("#overlay-loading").show();
        $("#overlay-links").css("background",getImageTag());
        $("#overlay-links").css("background-size","cover");
        $("#overlay-links").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
          }, "800");
    });


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
          }, "400");
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
          }, "800");
        
    });

    $("#Guestbook").on("click", function() {
        hideAll();
        $("#overlay-loading").show();
        $("#overlay-guest").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
          }, "800");
        
    });

    $("#Radio").on("click", function() {
        hideAll();
        $("#overlay-loading").show();
        $("#overlay-radio").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
          }, "800");
        
    });

    $("#Merch").on("click", function() {
        hideAll();
        $("#overlay-loading").show();
        $("#overlay-merch").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
          }, "800");
        
    });

    $("#Mail").on("click", function(){
        hideAll();
        $("#sjf_video").hide();
        $("#fr6m75_video").hide();
        $("#overlay-loading").show();
        $("#overlay-email").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
          }, "800");
    })

    $("#movie").on("click", function(){
        hideAll();
        $("#sjf_video").hide();
        $("#overlay-loading").show();
        $("#fr6m75_video").show();
        $("#overlay-email").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
          }, "800");
    })

    $("#movie2").on("click", function(){
        hideAll();
        $("#fr6m75_video").hide();
        $("#overlay-loading").show();
        $("#sjf_video").show();
        $("#overlay-email").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
          }, "800");
    })
  });
