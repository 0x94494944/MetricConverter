// Variables
let lenght = document.getElementById("lenght");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");
let number = document.getElementById("number");

// Event listener
number.addEventListener("input", (event) => {
  lenght.innerText = `${event.target.value} meters = ${Math.round(
    event.target.value * 3.28084
  )} feet | ${event.target.value} feet = ${Math.round(
    event.target.value / 3.28084
  )} meters`;

  volume.innerText = `${event.target.value} liters = ${Math.round(
    event.target.value * 0.264172
  )} gallons | ${event.target.value} gallons = ${Math.round(
    event.target.value / 0.264172
  )} liters`;

  mass.innerText = `${event.target.value} kilos = ${Math.round(
    event.target.value * 2.20462
  )} pounds | ${event.target.value} pounds = ${Math.round(
    event.target.value / 2.20462
  )} kilos`;
});
