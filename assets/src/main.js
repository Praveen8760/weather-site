
// API info

const cityAPIKey=`b146fcb1834046b3b8692372f5129f92`;



// date function
const date_update=()=>{
    const date=new Date();
    const date_node=document.querySelector(".date");
    let day=date.getDay();
    let current_date=date.getDate();
    let month=date.getMonth()+1;
    let today_day="";

    switch(day){
        case 0:
            day="Sunday";
            break;
        case 1:
            day="Monday";
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesday";
            break;
        case 4:
            day="Thusday";
            break;
        case 5:
            day="Friday";
            break;
        case 6:
            day="Saturday";
            break;
    }
    switch(month){
        case 1:
            month="January";
            break;
        case 2:
            month="Febuary";
            break;
        case 3:
            month="March";
            break;
        case 4:
            month="April";
            break;
        case 5:
            month="May";
            break;
        case 6:
            month="June";
            break;
        case 7:
            month="July";
            break;
        case 8:
            month="August";
            break;
        case 9:
            month="September";
            break;
        case 10:
            month="October";
            break;
        case 11:
            month="November";
            break;
        case 12:
            month="December";
            break;
        }
        today_day=day+" "+current_date+","+month;
        date_node.textContent=today_day; 
    }
    

location
let lat;
let long;
var city;
function geoLoction(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else{
        alert("not")
    }
}
async function showPosition(position){
    lat=position.coords.latitude;
    long=position.coords.longitude;
    console.log(lat);
    console.log(long);
    await getCityName(lat,long);
}
function showError(error){
    switch(error.code){
        case error.PERMISSION_DENIED:
            geoLoction();
            breakS;
        case error.TIMEOUT:
            alert("Turn on Location");
            geoLoction();
            break;
    }
}

async function getCityName(lat,long){
    const city_name_node=document.querySelector(".city_name");
    const url=await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=b146fcb1834046b3b8692372f5129f92`)
    .then((response)=>{
        const data=response.json();
        return data
    })
    .then((data)=>{
        data=data["results"];
        city=data[0]["components"].city;
        console.log(city);
        city_name_node.textContent=city;
    })  
}



// date fixing
document.addEventListener("DOMContentLoaded",date_update())
// loaction getting
document.addEventListener("DOMContentLoaded",geoLoction())