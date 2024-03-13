import $ from 'jquery';



export var imageURLs = [
    "url(/Scene4-B.webp)"
  , "url(/Scene2-B.webp)"
  , "url(/Scene3-B.webp)"
  , "url(/Scene5-B.webp)"
  , "url(/Scene8-glitch.webp)"
  , "url(/Scene7-Website.webp)"
  , "url(/waterfal.webp"
];
export function getImageTag() {
    var randomIndex = Math.floor(Math.random() * imageURLs.length);
    var img = imageURLs[randomIndex];
    return img;
}

$("#overlay-links").css("background",getImageTag());
$("#overlay-links").css("background-size","cover");