import $ from 'jquery';

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
        $("#overlay-loading").show();
        $("#sub-songlist").hide();
        $("#sub-song").load("songs/Oh_Well.html");
        $("#sub-song").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
        }, "200");
        $("#back-to-list").show();
    });

    $("#roses").on("click", function(){
        $("#overlay-loading").show();
        $("#sub-songlist").hide();
        $("#sub-song").load("songs/Roses.html");
        $("#sub-song").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
        }, "200");
        $("#back-to-list").show();
    });

    $("#sleeping").on("click", function(){
        $("#overlay-loading").show();
        $("#sub-songlist").hide();
        $("#sub-song").load("songs/Sleeping_Outside.html");
        $("#sub-song").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
        }, "200");
        $("#back-to-list").show();
    });

    $("#about").on("click", function(){
        $("#overlay-loading").show();
        $("#sub-songlist").hide();
        $("#sub-song").load("songs/About_Death.html");
        $("#sub-song").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
        }, "200");
        $("#back-to-list").show();
    });

    $("#toma").on("click", function(){
        $("#overlay-loading").show();
        $("#sub-songlist").hide();
        $("#sub-song").load("songs/Toma.html");
        $("#sub-song").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
        }, "200");
        $("#back-to-list").show();
    });

    $("#vasty").on("click", function(){
        $("#overlay-loading").show();
        $("#sub-songlist").hide();
        $("#sub-song").load("songs/Vastilios.html");
        $("#sub-song").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
        }, "200");
        $("#back-to-list").show();
    });

    $("#smn").on("click", function(){
        $("#overlay-loading").show();
        $("#sub-songlist").hide();
        $("#sub-song").load("songs/Say_My_Name.html");
        $("#sub-song").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
        }, "200");
        $("#back-to-list").show();
    });

    $("#dga").on("click", function(){
        $("#overlay-loading").show();
        $("#sub-songlist").hide();
        $("#sub-song").load("songs/Days_Go_Away.html");
        $("#sub-song").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
        }, "200");
        $("#back-to-list").show();
    });

    $("#wftc").on("click", function(){
        $("#overlay-loading").show();
        $("#sub-songlist").hide();
        $("#sub-song").load("songs/Waiting_for_the_calf_to_die.html");
        $("#sub-song").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
        }, "200");
        $("#back-to-list").show();
    });

    $("#lms").on("click", function(){
        $("#overlay-loading").show();
        $("#sub-songlist").hide();
        $("#sub-song").load("songs/Let_me_sleep.html");
        $("#sub-song").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
        }, "200");
        $("#back-to-list").show();
    });

    $("#gc").on("click", function(){
        $("#overlay-loading").show();
        $("#sub-songlist").hide();
        $("#sub-song").load("songs/Garden_City.html");
        $("#sub-song").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
        }, "200");
        $("#back-to-list").show();
    });

    $("#giar").on("click", function(){
        $("#overlay-loading").show();
        $("#sub-songlist").hide();
        $("#sub-song").load("songs/Give_it_a_rest.html");
        $("#sub-song").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
        }, "200");
        $("#back-to-list").show();
    });

    $("#lmk").on("click", function(){
        $("#overlay-loading").show();
        $("#sub-songlist").hide();
        $("#sub-song").load("songs/Let_me_know.html");
        $("#sub-song").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
        }, "200");
        $("#back-to-list").show();
    });

    $("#dia").on("click", function(){
        $("#overlay-loading").show();
        $("#sub-songlist").hide();
        $("#sub-song").load("songs/Dialogue.html");
        $("#sub-song").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
        }, "200");
        $("#back-to-list").show();
    });

    $("#sewn").on("click", function(){
        $("#overlay-loading").show();
        $("#sub-songlist").hide();
        $("#sub-song").load("songs/Sewn.html");
        $("#sub-song").show();
        setTimeout(() => {
            $("#overlay-loading").hide();
        }, "200");
        $("#back-to-list").show();
    });

});