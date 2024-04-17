setInterval(()=>{
    document.getElementById("hours").innerText = (new Date().getHours())+" : ";
    document.getElementById("minutes").innerText = (new Date().getMinutes() >= 10) ? (new Date().getMinutes())+" : " : "0"+(new Date().getMinutes())+" : ";
    document.getElementById("seconds").innerText = (new Date().getSeconds() >= 10) ? (new Date().getSeconds()) : "0"+(new Date().getSeconds());
} , 500);