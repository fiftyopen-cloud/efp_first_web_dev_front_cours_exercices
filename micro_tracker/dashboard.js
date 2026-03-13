let vSun = 0;
let vWater = 0;
let vBreak = 0;

let btn_sun = document.getElementById("btn-sun");
let btn_water = document.getElementById("btn-water");
let btn_break = document.getElementById("btn-break");

let sun_value = document.getElementById("sun-value");
let water_value = document.getElementById("water-value");
let break_value = document.getElementById("break-value");

btn_sun.addEventListener("click", () => {
    sun_value.innerText = parseInt(sun_value.innerText) + 1;
    console.log(sun_value.innerText);
});

btn_water.addEventListener("click", () => {
    water_value.innerText = parseInt(water_value.innerText) + 1;
    console.log(water_value.innerText);
});

btn_break.addEventListener("click", () => {
    break_value.innerText = parseInt(break_value.innerText) + 1;
    console.log(break_value.innerText);
});


