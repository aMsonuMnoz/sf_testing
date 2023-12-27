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
    })


// changes marquee text
    const animated = document.querySelector(".marquee");
    let i = 0;
    let taglines = [ 
        "Click every button",
        "Escape from Beautiful Mountain coming soon...",
        "Person reading this, hello from across the internet. Thank you for visiting",
        "Merch coming soon",
        "Happy Holidays from Sweet Fighter",
        "Make sure you sign the guestbook before you leave or you can send me an IM on AOL",
        "Strong John Fisher's guitar tuning: Eb Bb Bb Gb Bb D, Capo: 6",
        "Follow our Instagram for updates about us",
        "Join our discord and show us some art",
        "Strong John Fisher now streaming... click sjf.mp4 to watch the live video"
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
        $("#overlay-loading").show();
        $("#overlay-email").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
          }, "800");
    })
  });
