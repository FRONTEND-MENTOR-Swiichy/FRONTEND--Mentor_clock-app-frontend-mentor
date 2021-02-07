
getLoca = document.getElementById('localisation');

fetch('https://freegeoip.app/json/')
    .then(res => {
        if(res.ok){
            res.json().then(data => {
                getLoca.innerHTML = "in" + " " + data.country_name+","+ " " + data.country_code;
            })
        } else {
            console.log("ERROR");
        }
    });

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
                //desktop
                getcurrentZoneId.innerHTML = data.timezone;
                getDotyId.innerHTML = data.day_of_year;
                getDotwId.innerHTML = data.day_of_week;
                getWkId.innerHTML = data.week_number;
                //mobile
                getcurrentZone.innerHTML = data.timezone;
                getDoty.innerHTML = data.day_of_year;
                getDotw.innerHTML = data.day_of_week;
                getWk.innerHTML = data.week_number;

                if(getDotwId.innerHTML == "0") {
                    getDotwId.innerHTML = "7";
                }
                if(getDotw.innerHTML == "0") {
                    getDotw.innerHTML = "7";
                }
            })
        } else{
            console.log("ERROR");
        }
    });

    

