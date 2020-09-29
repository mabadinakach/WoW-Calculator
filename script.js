const menu_item = document.querySelectorAll('#color-select .dropdown-item')
const color_label = document.getElementById("color-label")
const cube_logo = document.querySelector("#wrapD3Cube")
console.log(color_label)

cube_logo.addEventListener('mouseover', turnRight);


// CUBE
const aCube = document.querySelector("#a-cube")
const total_cube = document.querySelector('#total-cube')


function calculateCube() {
    const aValue = aCube.value
    const result = aValue*aValue*aValue
    total_cube.style.backgroundColor = '#ffaf1c'
    total_cube.innerHTML = `V = ${result}`
} 

aCube.addEventListener('input', calculateCube)

// PYRAMID

const bPyramid = document.querySelector('#b-pyramid')
const hPyramid = document.querySelector('#h-pyramid')
const totalPyramid = document.querySelector('#total-pyramid')

function calculatePyramid() {
    const bValue = bPyramid.value
    const hValue = hPyramid.value
    const result = (1/3) * bValue * hValue
    totalPyramid.style.backgroundColor = '#ffaf1c'
    totalPyramid.innerHTML = `V = ${result.toFixed(2)}`
}

bPyramid.addEventListener('input', calculatePyramid)
hPyramid.addEventListener('input', calculatePyramid)

// CYLINDER

const rCylinder = document.querySelector('#r-cylinder')
const hCylinder = document.querySelector('#h-cylinder')
const totalCylinder = document.querySelector('#total-cylinder')

function calculateCylinder() {
    const rValue = rCylinder.value
    const hValue = hCylinder.value
    const result = Math.PI * Math.pow(rValue,2) * hValue
    totalCylinder.style.backgroundColor = '#ffaf1c'
    totalCylinder.innerHTML = `V = ${result.toFixed(2)}`
    
}

rCylinder.addEventListener('input', calculateCylinder)
hCylinder.addEventListener('input', calculateCylinder)

console.log(Math.pow(2,7))



// SPHERE

const rSphere = document.querySelector('#r-sphere')
const totalSphere = document.querySelector('#total-sphere')

function calculateSphere() {
    const rValue = rSphere.value
    const result = (4/3)*Math.PI * Math.pow(rValue,3)
    totalSphere.style.backgroundColor = '#ffaf1c'
    totalSphere.innerHTML = `V = ${result.toFixed(2)}`
}

rSphere.addEventListener('input', calculateSphere)


// From: https://html-online.com/articles/css3-cube/
var cubex = -22,    // initial rotation
cubey = -38,
cubez = 0;
function rotate(variableName, degrees) {
    window[variableName] = window[variableName] + degrees;
    rotCube(cubex, cubey, cubez);
}
function rotCube(degx, degy, degz){
    segs = "rotateX("+degx+"deg) rotateY("+degy+"deg) rotateZ("+degz+"deg) translateX(0) translateY(0) translateZ(0)";
    $('#D3Cube').css({"transform":segs});
}
function turnRight() {
    rotate("cubey", 90);
    setTimeout(flipCube, 2000);
}
function turnLeft() {
    rotate("cubey", -90);
    setTimeout(turnRight, 2000);
}
function flipCube() {
    rotate("cubez", -180);
    setTimeout(turnLeft, 2000);
}
