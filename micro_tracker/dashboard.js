let vSun = 0;
let vWater = 0;
let vBreak = 0;

let vSun_limit = 6; 
let vWater_limit = 6;
let vBreak_limit = 6;

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
    if (vSun < vSun_limit) {
        ++vSun;
        sun_value.innerText = vSun;
        total_value.innerText = vSun + vWater + vBreak;
        console.log(total_value.innerText);
        console.log(sun_value.innerText);
    } 
    
    btn_sun.disabled = (vSun+1 > vSun_limit);
    btn_sun_5.disabled = (vSun+5 > vSun_limit);

});

btn_sun_5.addEventListener("click", () => {
    if (vSun + 5 <= vSun_limit) {
        vSun += 5;
        sun_value.innerText = vSun;
        total_value.innerText = vSun + vWater + vBreak;
        console.log(total_value.innerText);
        console.log(sun_value.innerText);
    }

    btn_sun.disabled = (vSun+1 > vSun_limit);
    btn_sun_5.disabled = (vSun+5 > vSun_limit);
    
});

btn_water.addEventListener("click", () => {
    if (vWater + 1 <= vWater_limit) {
        ++vWater;
        water_value.innerText = vWater;
        total_value.innerText = vSun + vWater + vBreak;
        console.log(total_value.innerText);
        console.log(water_value.innerText);
    }

    btn_water.disabled = (vWater+1 > vWater_limit);
    btn_water_5.disabled = (vWater+5 > vWater_limit);

});

btn_water_5.addEventListener("click", () => {
    if (vWater + 5 <= vWater_limit) {
        vWater += 5;
        water_value.innerText = vWater;
        total_value.innerText = vSun + vWater + vBreak;
        console.log(total_value.innerText);
        console.log(water_value.innerText);
    }

    btn_water.disabled = (vWater+1 > vWater_limit);
    btn_water_5.disabled = (vWater+5 > vWater_limit);

});

btn_break.addEventListener("click", () => {
    if (vBreak < vBreak_limit) {
        ++vBreak;
        break_value.innerText = vBreak;
        total_value.innerText = vSun + vWater + vBreak;
        console.log(total_value.innerText);
        console.log(break_value.innerText);
    }

    btn_break.disabled = (vBreak+1 > vBreak_limit);
    btn_break_5.disabled = (vBreak+5 > vBreak_limit);

});

btn_break_5.addEventListener("click", () => {
    if (vBreak + 5 <= vBreak_limit) {
        vBreak += 5;
        break_value.innerText = vBreak;
        total_value.innerText = vSun + vWater + vBreak;
        console.log(total_value.innerText);
        console.log(break_value.innerText);
    }

    btn_break.disabled = (vBreak+1 > vBreak_limit);
    btn_break_5.disabled = (vBreak+5 > vBreak_limit);
});

btn_reset.addEventListener("click", () => {
    vSun = 0;
    vWater = 0; 
    vBreak = 0;

    sun_value.innerText = vSun;
    water_value.innerText = vWater;
    break_value.innerText = vBreak;

    total_value.innerText = 0;
    
    btn_sun.disabled = false;
    btn_sun_5.disabled = false;
    btn_water.disabled = false;
    btn_water_5.disabled = false;
    btn_break.disabled = false;
    btn_break_5.disabled = false;


    console.log(sun_value.innerText);
    console.log(water_value.innerText);
    console.log(break_value.innerText);
});