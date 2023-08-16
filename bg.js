import $ from 'jquery';



export var imageURLs = [
    "url(images/Scene4-B.webp)"
  , "url(images/Scene2-B.webp)"
  , "url(images/Scene3-B.webp)"
  , "url(images/Scene5-B.webp)"
  , "url(images/Scene8-glitch.webp)"
  , "url(images/Scene7-Website.webp)"
  , "url(gifs/waterfal.webp"
];
export function getImageTag() {
    var randomIndex = Math.floor(Math.random() * imageURLs.length);
    var img = imageURLs[randomIndex];
    return img;
}

$(function(){
    $("#overlay-links").css("background",getImageTag());
    $("#overlay-links").css("background-size","cover");
});