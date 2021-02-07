function $(id){return document.getElementById(id)}
 
function hms(){
    var today=new Date();
    var hrs=today.getHours(),mns=today.getMinutes();
    var str=(hrs<10?"0"+hrs:hrs)+":"+(mns<10?"0"+mns:mns);
    $("clock").innerHTML=str + `<span class="test">utc</span>`;
    setTimeout(hms,1000);// réécriture toutes les 1000 millisecondes 
}
hms();// lancement de la fonction

var currentTime = new Date().getHours();
const getContainer = document.querySelector('.container');
const getIcon = document.querySelector('.content-logo__day__nigth');
const bg = document.querySelector('.slide-information');
const getContentInformation = document.querySelector('.content-information__slide');
const getContentInformationMobile = document.querySelector('.content-information__slide__mobile');

if (document.body) {
    if (6 <= currentTime && currentTime < 18) {
        getContainer.style.backgroundImage = "url('assets/desktop/bg-image-daytime.jpg')";
        getIcon.style.backgroundImage = "url('assets/desktop/icon-sun.svg')";
        bg.style.background = "rgba(255, 255, 255, 0.75)";
        getContentInformation.style.color = "#303030";
        getContentInformationMobile.style.color = "#303030";
    }
    else {
        getContainer.style.backgroundImage = "url('assets/desktop/bg-image-nighttime.jpg')";
        getIcon.style.backgroundImage = "url('assets/desktop/icon-moon.svg')";
        bg.style.background = "rgba(0, 0, 0, 0.75)";
    }
}

const getTextGen = document.querySelector('.text-gen');
if (document.body) {
    if (5 <= currentTime && currentTime < 12) {
        getTextGen.innerHTML = "good morning";
    }
    else if (12 <= currentTime && currentTime < 18) {
        getTextGen.innerHTML = "good afternoon";
    }
    else {
        getTextGen.innerHTML = "good evening";
    }
}

// Create a media condition that targets viewports at least 768px wide
const tabletQuery = window.matchMedia('(min-width: 376px) and (max-width: 768px');
// Check if the media query is true
// Changes the image according to the user's screen size
if (tabletQuery.matches) {
    if (document.body) {
        if (6 <= currentTime && currentTime < 18) {
            getContainer.style.backgroundImage = "url('assets/tablet/bg-image-daytime.jpg')";
        }
        else {
            getContainer.style.backgroundImage = "url('assets/tablet/bg-image-nighttime.jpg')";
        }
    }
  //alert('Media Query Matched!')
}

const mobileQuery = window.matchMedia('(max-width: 375px)');

if (mobileQuery.matches) {
    if(document.body) {
        if (6 <= currentTime && currentTime < 18) {
            getContainer.style.backgroundImage = "url('assets/mobile/bg-image-daytime.jpg')";
        }
        else {
            getContainer.style.backgroundImage = "url('assets/mobile/bg-image-nighttime.jpg')";
        }
    }
}





