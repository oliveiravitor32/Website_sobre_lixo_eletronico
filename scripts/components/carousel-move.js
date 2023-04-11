

const slide1 = document.querySelector("#slideOne");
const slide2 = document.querySelector("#slideTwo");
const slide3 = document.querySelector("#slideThree");

const circle1 = document.querySelector("#circleOne");
const circle2 = document.querySelector("#circleTwo");
const circle3 = document.querySelector("#circleThree");

function removeOnScreen() {
    slide1.classList.remove("-onScreen")
    slide2.classList.remove("-onScreen")
    slide3.classList.remove("-onScreen")

    circle1.classList.remove("-onScreen")
    circle2.classList.remove("-onScreen")
    circle3.classList.remove("-onScreen")
}

function nextSlide() {

    let slide1On = slide1.classList.contains("-onScreen")
    let slide2On = slide2.classList.contains("-onScreen")
    let slide3On = slide3.classList.contains("-onScreen")

    if (slide1On === true) {
        slide1.classList.remove("-onScreen")
        slide2.classList.add("-onScreen")  

        circle1.classList.remove("-onScreen")
        circle2.classList.add("-onScreen")   
    } else if (slide2On === true) {
        slide2.classList.remove("-onScreen")
        slide3.classList.add("-onScreen")
        
        circle2.classList.remove("-onScreen")
        circle3.classList.add("-onScreen") 
    } else if (slide3On === true) {
        slide3.classList.remove("-onScreen")
        slide1.classList.add("-onScreen")

        circle3.classList.remove("-onScreen")
        circle1.classList.add("-onScreen") 
    }
}

function previousSlide() {

    let slide1On = slide1.classList.contains("-onScreen")
    let slide2On = slide2.classList.contains("-onScreen")
    let slide3On = slide3.classList.contains("-onScreen")

    if (slide1On === true) {
        slide1.classList.remove("-onScreen")
        slide3.classList.add("-onScreen")   

        circle1.classList.remove("-onScreen")
        circle3.classList.add("-onScreen")  
    } else if (slide2On === true) {
        slide2.classList.remove("-onScreen")
        slide1.classList.add("-onScreen")

        circle2.classList.remove("-onScreen")
        circle1.classList.add("-onScreen") 
    } else if (slide3On === true) {
        slide3.classList.remove("-onScreen")
        slide2.classList.add("-onScreen")

        circle3.classList.remove("-onScreen")
        circle2.classList.add("-onScreen") 
    }
}

function circleReference(slide) {

    let slide1On = slide1.classList.contains("-onScreen")
    let slide2On = slide2.classList.contains("-onScreen")
    let slide3On = slide3.classList.contains("-onScreen")

    if (slide === 1) {
        if (!slide1On) {
            removeOnScreen()
            slide1.classList.add("-onScreen")
            circle1.classList.add("-onScreen")
        }
    } else if (slide === 2) {
        if (!slide2On) {
            removeOnScreen()
            slide2.classList.add("-onScreen")
            circle2.classList.add("-onScreen")
        }
    } else if (slide === 3) {
        if (!slide3On) {
            removeOnScreen()
            slide3.classList.add("-onScreen")
            circle3.classList.add("-onScreen")
        }
    }
}

