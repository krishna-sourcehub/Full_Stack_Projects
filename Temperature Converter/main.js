const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");
const kelvin = document.querySelector("#kelvin");

window.addEventListener("load", () => celsius.focus());

celsius.addEventListener("input", () => {
    fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2);
    kelvin.value = ((celsius.value * 1) + 273.15).toFixed(2);
    if (!celsius.value) fahrenheit.value = "", kelvin.value = "";
    
    updateColors(parseFloat(celsius.value));
});

fahrenheit.addEventListener("input", () => {
    celsius.value = (((fahrenheit.value - 32) * 5) / 9).toFixed(2);
    kelvin.value = ((((fahrenheit.value - 32) * 5) / 9) + 273.15).toFixed(2);
    if (!fahrenheit.value) celsius.value = "", kelvin.value = "";

    updateColors(parseFloat(celsius.value));
});

kelvin.addEventListener("input", () => {
    fahrenheit.value = ((((kelvin.value - 273.15) * 9) / 5) + 32).toFixed(2);
    celsius.value = ((kelvin.value * 1) - 273.15).toFixed(2);
    if (!kelvin.value) fahrenheit.value = "", celsius.value = "";

    updateColors(parseFloat(celsius.value));
});

const colors = [ '#FF7276', '#87CEEB', '#DBF1FD','#e74c3c', '#fff','#4a98f7'];

function updateColors(celsiusValue) {
    let colorIndex = 0;

    if (celsiusValue === "" || isNaN(celsiusValue)) {
        document.body.style.backgroundColor = colors[4];
        document.getElementById('colorChange').style.backgroundColor = colors[5];
        
    } else if (celsiusValue > 40) {
        colorIndex = 3;
    } else if (celsiusValue < 20 && celsiusValue >10) {
        colorIndex = 2;
    }
    else if (celsiusValue < 10) {
        colorIndex = 1;
    }
    else {
        document.body.style.backgroundColor = colors[4];
        document.getElementById('colorChange').style.backgroundColor = colors[5];
    }

    document.body.style.backgroundColor = colors[colorIndex];
    document.getElementById('colorChange').style.backgroundColor = colors[colorIndex];

}
