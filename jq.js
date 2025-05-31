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
    $("#movie-list").hide();
}

function linksOff() {

    $("#Socials").toggle();
    $("#messages").toggle();
    $("#nextimg").toggle();
    $("#EFBM").toggle();
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
        $("#Navigation").css("pointer-events", "all").css("opacity", "100%");

    })


// changes marquee text
    const animated = document.querySelector(".marquee");
    let i = 0;
    let taglines = [ 
        "The future is here...is it all you imagined?",
        "Click every button!",
        "Thank you for coming along!",
        "More from me coming eventually",
        "Rest here before continuing to your next web site.",
        "If you're seeing this, you're in the future",
        "The guestbook I was using shut down, so now I have to build my own",
        "Strong John Fisher's guitar tuning: Eb Bb Bb Gb Bb D, Capo: 6",
        "I can stay and chat here for as long as you like",
        "Add me on discord strongbad__ (two underscores)"
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

    $("#nextimg").on("click", function() {
        hideAll();
        $("#overlay-loading").show();
        $("#overlay-links").css("background",getImageTag());
        $("#overlay-links").css("background-size","cover");
        $("#overlay-links").show();
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

    $("#Sitemap").on("click", function() {
        hideAll();
        $("#overlay-loading").show();
        $("#overlay-sitemap").show();
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

    $("#Movies").on("click", function(){
        hideAll();
        $("#overlay-loading").show();
        $("#overlay-movies").show();
        $("#movie-list").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
          }, "800");
    })

    $("#fr6m75").on("click", function(){
        $("#sjf_video").hide();
        $("#Live_video").hide();
        $("#overlay-loading").show();
        $("#fr6m75_video").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
          }, "800");
    })
    $("#sjf_v").on("click", function(){
        $("#fr6m75_video").hide();
        $("#Live_video").hide();
        $("#overlay-loading").show();
        $("#sjf_video").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
          }, "800");
    })
    $("#Live").on("click", function(){
        $("#sjf_video").hide();
        $("#fr6m75_video").hide();
        $("#overlay-loading").show();
        $("#Live_video").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
          }, "800");
    })

  });
