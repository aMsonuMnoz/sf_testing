import $ from 'jquery';

var imageURLs = [
    "images/Scene1.webp"
  , "images/Scene2.webp"
  , "images/Scene3.webp"
  , "images/Scene5.webp"
  , "images/Scene6_glitch.webp"
  , "images/Scene7_website.webp"
];
function getImageTag() {
 
 var randomIndex = Math.floor(Math.random() * imageURLs.length);
 var img = imageURLs[randomIndex];
 return img;
}


$(function(){

  $('#Interface').prepend($('<img>',{id:'Computer',src:getImageTag()}));
  $("#Interface2").css("display","none");

    $("#LinksInterface").on("click", function() {
        $("#Interface2").css("display","none");
        $("#Interface").show();
        
    });

    $("#3dInterface").on("click", function() {

        $("#Interface2").css("display","inline-block");
        $("#Interface").hide();
        
    });


  
  });