const inputs = document.querySelectorAll(".panel input");
const c = document.querySelector("#celcius");
const f = document.querySelector("#fahrenheit");
const k = document.querySelector("#kelvin");

inputs.forEach(input =>{
    input.addEventListener("input", e=>{
        const unit = e.target.id;
        const v = parseInt(e.target.value);
        if(unit === "celcius"){
            f.value = parseFloat((v*1.8)+32).toFixed(4) *1;
            k.value = parseFloat(v+273.15).toFixed(4)*1;
        }
        else if(unit === "fahrenheit"){
            c.value = parseFloat((v - 32)*5/9).toFixed(4) *1;
            k.value = parseFloat(((v-32)*5/9)+273.15).toFixed(4)*1;
        }
        else if(unit === "kelvin"){
            c.value = parseFloat(v - 273.15).toFixed(4) *1;
            f.value = parseFloat((v-273.15)* 9 / 5 + 32).toFixed(4)*1;
        }
    });
});
// const c = document.getElementById("celcius");
// const f = document.getElementById("farhenheit");
// const k = document.getElementById("kelvin");

// c.addEventListener("input", e => {
//   const v = parseFloat(e.target.value);
//   if (!isNaN(v)) {
//     f.value = parseFloat((v * 1.8) + 32).toFixed(4);
//     k.value = parseFloat(v + 273.15).toFixed(4);
//   }
// });

// f.addEventListener("input", e => {
//   const v = parseFloat(e.target.value);
//   if (!isNaN(v)) {
//     c.value = parseFloat((v - 32) * 5 / 9).toFixed(4);
//     k.value = parseFloat(((v - 32) * 5 / 9) + 273.15).toFixed(4);
//   }
// });

// k.addEventListener("input", e => {
//   const v = parseFloat(e.target.value);
//   if (!isNaN(v)) {
//     c.value = parseFloat(v - 273.15).toFixed(4);
//     f.value = parseFloat((v - 273.15) * 9 / 5 + 32).toFixed(4);
//   }
//});
