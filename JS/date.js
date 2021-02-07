
//Call of the API https://freegeoip.app/json/ to dynamically display the living area

let callBackGetSuccess = function(data) {
    console.log("donnees api", data);
    getLoca = document.getElementById('localisation');
    //console.log(data);
    getLoca.innerHTML = "in" + " " + data.country_name+","+ " " + data.country_code;
}

function getfreegeoipAPI() {
    let url = "https://freegeoip.app/json/";

    $.get(url, callBackGetSuccess).done(function() {
        //alert( "second success" );
    })
    .fail(function() {
        alert( "error" );
    })
    .always(function() {
        //alert( "finished" );
    });
}

getfreegeoipAPI();

//http://worldtimeapi.org/api/ip to dynamically display the different information concerning the weather in the year

/*let succes = function(data) {
    console.log("donnees api", data);
    //mobile
    getcurrentZone = document.querySelector('.currentZone');
    getDoty = document.querySelector('.doty');
    getDotw = document.querySelector('.dotw');
    getWk = document.querySelector('.wk');
    //desktop-tablet
    getcurrentZoneId = document.getElementById('currentZone');
    getDotyId = document.getElementById('doty');
    getDotwId = document.getElementById('dotw');
    getWkId = document.getElementById('wk');
    //console.log(data.datetime);
    getcurrentZone.innerHTML = data.timezone;
    getDoty.innerHTML = data.day_of_year;
    getDotw.innerHTML = data.day_of_week;
    getWk.innerHTML = data.week_number;
    //
    getcurrentZoneId.innerHTML = data.timezone;
    getDotyId.innerHTML = data.day_of_year;
    getDotwId.innerHTML = data.day_of_week;
    getWkId.innerHTML = data.week_number;

    if (getDotwId.innerHTML === "0") {
        getDotwId.innerHTML = "7";
    }

    if(getDotw.innerHTML === "0") {
        getDotw.innerHTML = "7";
    }
}

function getworldtimeapiAPI() {
    let url = "http://worldtimeapi.org/api/ip";

    $.get(url, succes).done(function() {
        //alert( "second success" );
    })
    .fail(function() {
        alert( "error" );
    })
    .always(function() {
        //alert( "finished" );
    });
}

getworldtimeapiAPI();*/

let getcurrentZone = document.querySelector('.currentZone'),
    getDoty = document.querySelector('.doty'),
    getDotw = document.querySelector('.dotw'),  
    getWk = document.querySelector('.wk'),
    //desktop-tablet
    getcurrentZoneId = document.getElementById('currentZone'),
    getDotyId = document.getElementById('doty'),
    getDotwId = document.getElementById('dotw'),
    getWkId = document.getElementById('wk');

fetch('http://worldtimeapi.org/api/ip')
    .then(res => {
        if(res.ok){
            res.json().then(data => {
                getcurrentZoneId.innerHTML = data.timezone;
            })
        } else{
            console.log("ERROR");
        }
    })

