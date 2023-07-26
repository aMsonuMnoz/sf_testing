import $ from 'jquery';




$(function(){

    $("#Interface2").css("display","none");

    $("#LinksInterface").on("click", function() {
        $("#Interface2").css("visibility","hidden");
        $("#Interface2").css("display","none");
        $(".ComputerLoading").remove();
        $("#Interface").show();
        
    });

    $("#ThreeDimInterface").on("click", function() {

        $("#Interface2").css("visibility","visible");
        $("#Interface2").css("display","inline-block");
        $("#Interface").hide();
        $(".ComputerLoading").remove();
        
    });

    $("#PowerButton").on("click", function() {
        $("#Interface2").css("visibility","hidden");
        $("#Interface2").css("display","none");
        $("#Interface").show();
        $('#Interface').prepend($('<img>',{class:'ComputerLoading',src:'images/CRT_off.webp'}));
        setTimeout(() => {
          $(".ComputerLoading").attr("src","images/Scene8_off.png");
        }, "1000");

    });


  
  });