let vSun = 0;
let vWater = 0;
let vBreak = 0;

let btn_sun = document.getElementById("btn-sun");
let btn_sun_5 = document.getElementById("btn-sun-5");   
let btn_water = document.getElementById("btn-water");
let btn_water_5 = document.getElementById("btn-water-5");
let btn_break = document.getElementById("btn-break");
let btn_break_5 = document.getElementById("btn-break-5");
let btn_reset = document.getElementById("btn-reset");

let sun_value = document.getElementById("sun-value");
let water_value = document.getElementById("water-value");
let break_value = document.getElementById("break-value");
let total_value = document.getElementById("total-value");

btn_sun.addEventListener("click", () => {
    ++vSun;
    sun_value.innerText = vSun;
    total_value.innerText = vSun + vWater + vBreak;
    console.log(total_value.innerText);
    console.log(sun_value.innerText);
});

btn_sun_5.addEventListener("click", () => {
    vSun += 5;
    sun_value.innerText = vSun;
    total_value.innerText = vSun + vWater + vBreak;
    console.log(total_value.innerText);
    console.log(sun_value.innerText);
});

btn_water.addEventListener("click", () => {
    ++vWater;
    water_value.innerText = vWater;
    total_value.innerText = vSun + vWater + vBreak;
    console.log(total_value.innerText);
    console.log(water_value.innerText);
});

btn_water_5.addEventListener("click", () => {
    vWater += 5;
    water_value.innerText = vWater;
    total_value.innerText = vSun + vWater + vBreak;
    console.log(total_value.innerText);
    console.log(water_value.innerText);
});

btn_break.addEventListener("click", () => {
    ++vBreak;
    break_value.innerText = vBreak;
    total_value.innerText = vSun + vWater + vBreak;
    console.log(total_value.innerText);
    console.log(break_value.innerText);
});

btn_break_5.addEventListener("click", () => {
    vBreak += 5;
    break_value.innerText = vBreak;
    total_value.innerText = vSun + vWater + vBreak;
    console.log(total_value.innerText);
    console.log(break_value.innerText);
});

btn_reset.addEventListener("click", () => {
    vSun = 0;
    vWater = 0; 
    vBreak = 0;

    sun_value.innerText = vSun;
    water_value.innerText = vWater;
    break_value.innerText = vBreak;

    total_value.innerText = 0;
    
    console.log(sun_value.innerText);
    console.log(water_value.innerText);
    console.log(break_value.innerText);
});