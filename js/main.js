'use strict';
   
var video = document.getElementById("play");

document.getElementById('header-intro').style.display = 'none';
    
video.onended = function () {
    document.getElementById('header-intro').style.display = '';
};