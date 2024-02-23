import $ from 'jquery';

function songSelect(song) {
    $("#overlay-loading").show();
    $("#sub-songlist").hide();
    $("#sub-song").load("songs/"+song);
    $("#sub-song").show();
    setTimeout(() => {
        $("#overlay-loading").hide();
    }, "200");
    $("#back-to-list").show();
}

$(function(){   
    $("#back-to-list").on("click", function(){
        $("#overlay-loading").show();
        $("#sub-songlist").show();
        $("#sub-song").empty();
        $("#sub-song").hide();
        setTimeout(() => {
            $("#overlay-loading").hide();
        }, "200");
        $("#back-to-list").hide();
    });

    $("#ohwell").on("click", function(){
        songSelect("Oh_Well.html");
    });

    $("#roses").on("click", function(){
        songSelect("Roses.html");
    });

    $("#sleeping").on("click", function(){
        songSelect("Sleeping_Outside.html");
    });

    $("#about").on("click", function(){
        songSelect("About_Death.html");
    });

    $("#toma").on("click", function(){
        songSelect("Toma.html");
    });

    $("#vasty").on("click", function(){
        songSelect("Vastilios.html");
    });

    $("#smn").on("click", function(){
        songSelect("Say_My_Name.html");
    });

    $("#dga").on("click", function(){
        songSelect("Days_Go_Away.html");
    });

    $("#wftc").on("click", function(){
        songSelect("Waiting_for_the_calf_to_die.html");
    });

    $("#lms").on("click", function(){
        songSelect("Let_me_sleep.html");
    });

    $("#gc").on("click", function(){
        songSelect("Garden_City.html");
    });

    $("#giar").on("click", function(){
        songSelect("Give_it_a_rest.html");
    });

    $("#lmk").on("click", function(){
        songSelect("Let_me_know.html");
    });

    $("#dia").on("click", function(){
        songSelect("Dialogue.html");
    });

    $("#sewn").on("click", function(){
        songSelect("Sewn.html");
    });

    $("#sjf").on("click", function(){
        songSelect("Strong_John_Fisher.html");
    });

    $("#fr6").on("click", function(){
        songSelect("Farm_Route_6.html");
    });

});