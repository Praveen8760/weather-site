
// API info

const cityAPIKey=`b146fcb1834046b3b8692372f5129f92`;

let user_city;
const city_node=document.querySelector(".location")
function get_data(){
    user_city=city_node.textContent;
    console.log(user_city);
    get_weather(user_city )
}

// date function
let img;
let temp;
let wind_speed;
let wind_dir;
let rain;
let humidity_val;


const temp_node=document.querySelector(".temp");
const wind_speed_node=document.querySelector(".wind_speed");
const wind_dir_node=document.querySelector(".wind_dir");
const rain_node=document.querySelector(".rain_val");
const humidity_node=document.querySelector(".humidity_val");
const wea_img_nod=document.querySelector('.weather_img');
const body=document.querySelector("body")
const date_update=()=>{
    const date=new Date();
    const date_node=document.querySelector(".date");
    let day=date.getDay();
    let hours=date.getHours();
    let current_date=date.getDate();
    let month=date.getMonth()+1;
    let today_day="";
    if(hours>=18){
        body.style.background="radial-gradient(122.94% 61.75% at 50% 0%, #5451AC 0%, rgba(178, 164, 252, 0.00) 100%), #F59660";
    }
    else{
        body.style.background="radial-gradient(122.94% 61.75% at 50% 0%, #FECE0E 0%, rgba(178, 164, 252, 0.00) 100%), #F59660";
    }
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

    
// let lat;
// let long;
// var city;
// function geoLoction(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition)
//     }
//     else{
//         alert("Turn On Location")
//     }
// }
// async function showPosition(position){
//     lat=position.coords.latitude;
//     long=position.coords.longitude;
//     console.log(lat);
//     console.log(long);
//     getCityName(lat,long);
// }
// function showError(error){
//     switch(error.code){
//         case error.PERMISSION_DENIED:
//             geoLoction();
//             breaks;
//         case error.TIMEOUT:
//             alert("Turn on Location");
//             geoLoction();
//             break;
//     }
// }
function get_img(img){
    const time=new Date();
    let current_time=time.getHours();
    if(current_time>=18){
        switch(img){
            case 'Mist' || 'Haze':
                wea_img_nod.src='/static/img/N_Haze.svg';
                break
            case 'Sunny':
                wea_img_nod.src='/static/img/N_Sunny.svg';
                break;
            case 'Patchy rain possible':
                wea_img_nod.src='/static/img/N_Rain.svg'
            case 'Moderate or heavy snow with thunder':
                wea_img_nod.src='/static/img/N_Snow.svg';
                break;
            default:
                wea_img_nod.src='/static/img/D_Sunny.svg';
                break
        }
    }
    else{
        switch(img){
            case 'Mist' || 'Haze':
                wea_img_nod.src='/static/img/D_Haze.svg';
                break
            case 'Sunny':
                wea_img_nod.src='/static/img/D_Sunny.svg';
                break;
            case 'Moderate or heavy snow with thunder':
                wea_img_nod.src='/static/img/D_Snow.svg';
                break;
            case 'Patchy rain possible':
                wea_img_nod.src='/static/img/N_Rain.svg';
                break;
            default:
                wea_img_nod.src='/static/img/D_Sunny.svg';
                break
        }
    }
}
// async function getCityName(lat,long){
//     const city_name_node=document.querySelector(".city_name");
//     const url=await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=b146fcb1834046b3b8692372f5129f92`)
//     .then(async(response)=>{
//         const data=await response.json();
//         return data
//     })
//     .then(async(data)=>{
//         data=await data["results"];
//         city=await data[0]["components"].city;
//         console.log(city);
//         get_weather(city);
//     })  
// }

async function get_weather(city){
    const weather_data=await fetch(`http://api.weatherstack.com/current?access_key=e89e31092923ea45cdb53a2f429ad88e&query=${city}`)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        const weather_data=data;
        console.log(weather_data);

        if(weather_data['success']==false){
            alert("Can't Obtain Data")
            get_data();
        }
        temp=weather_data['current']['temperature'];
        wind_speed=weather_data['current']['wind_speed'];
        wind_dir=weather_data['current']["wind_dir"];
        rain=weather_data['current']['precip'];
        humidity_val=weather_data['current']['humidity'];
        img=weather_data['current']['weather_descriptions'][0];
        if(rain>=10){
            wea_img_nod.src="'/static/img/D_Rain.svg'"
        }
        else{
            get_img(img,humidity_val);
        }
        console.log(img);
        temp_node.innerHTML=temp+'&deg;';
        wind_speed_node.textContent=wind_speed;
        wind_dir_node.textContent=wind_dir;
        rain_node.textContent=rain+"%";
        humidity_node.textContent=humidity_val+"%";
    })
}

// date fixing
document.addEventListener("DOMContentLoaded",date_update());
// loaction getting
// document.addEventListener("DOMContentLoaded",geoLoction());
document.addEventListener("DOMContentLoaded",get_data());