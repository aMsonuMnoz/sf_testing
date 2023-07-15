import $ from 'jquery';




$(function(){

    $("#Interface2").css("display","none");

    $("#LinksInterface").on("click", function() {
        $("#Interface2").css("visibility","hidden");
        $("#Interface2").css("display","none");
        $("#Interface").show();
        
    });

    $("#3dInterface").on("click", function() {

        $("#Interface2").css("visibility","visible");
        $("#Interface2").css("display","inline-block");
        $("#Interface").hide();
        
    });


  
  });