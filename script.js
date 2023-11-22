let hours = document.getElementById("hours")
let mins = document.getElementById("mins")
let sec = document.getElementById("sec")
let date = document.getElementById("date")
let month = document.getElementById("month")
let year = document.getElementById("year")
let day = document.getElementById("day")

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let days = weekday[d.getDay()];

const allMonth = ["January","February","March","April","May","June","July", "August", "September", "October", "November", "December"];
const m = new Date();
let months = allMonth[d.getMonth()];


setInterval(() => {
    let currentTime = new Date();
    hours.innerHTML = (currentTime.getHours() < 10 ? "0": "") + currentTime.getHours()
    mins.innerHTML = (currentTime.getMinutes() < 10 ? "0": "") + currentTime.getMinutes()
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0": "") + currentTime.getSeconds()
    date.innerHTML = (currentTime.getDate() < 10 ? "0": "") + currentTime.getDate()
    month.innerHTML = currentTime.getMonth() + 1
    year.innerHTML = currentTime.getFullYear()
    day.innerHTML =  days
    month.innerHTML =  months
}, 1000)

console.log(setInterval)
