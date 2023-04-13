

const slide1 = document.querySelector("#slideOne");
const slide2 = document.querySelector("#slideTwo");
const slide3 = document.querySelector("#slideThree");

const circle1 = document.querySelector("#circleOne");
const circle2 = document.querySelector("#circleTwo");
const circle3 = document.querySelector("#circleThree");

let slideActual
let activity = false

async function userActivity() {
    activity = true
    setTimeout(() => {
        activity=false
    }, 10000)
}

setInterval( () => {
    
    if (activity === false) {
        checkActualSlide();
        removeOnScreen();

    if (slideActual === 1) {
        slide2.classList.add("-onScreen")  
        slide2.classList.add("-fromRight")

        circle2.classList.add("-onScreen")   
    } else if (slideActual === 2) {
        slide3.classList.add("-onScreen")
        slide3.classList.add("-fromRight")

        circle3.classList.add("-onScreen") 
    } else if (slideActual === 3) {
        slide1.classList.add("-onScreen")
        slide1.classList.add("-fromRight")

        circle1.classList.add("-onScreen") 
    }
    }
}, 8000)

function removeOnScreen() {
    slide1.classList.remove("-onScreen")
    slide1.classList.remove("-fromRight")
    slide1.classList.remove("-fromLeft")

    slide2.classList.remove("-onScreen")
    slide2.classList.remove("-fromRight")
    slide2.classList.remove("-fromLeft")

    slide3.classList.remove("-onScreen")
    slide3.classList.remove("-fromRight")
    slide3.classList.remove("-fromLeft")


    circle1.classList.remove("-onScreen")
    circle2.classList.remove("-onScreen")
    circle3.classList.remove("-onScreen")
}

function nextSlide() {
    userActivity();
    checkActualSlide();

    if (slideActual === 1) {
        removeOnScreen();
        slide2.classList.add("-onScreen")  
        slide2.classList.add("-fromRight")

        circle2.classList.add("-onScreen")   
    } else if (slideActual === 2) {
        removeOnScreen();
        slide3.classList.add("-onScreen")
        slide3.classList.add("-fromRight")
        
        circle3.classList.add("-onScreen") 
    } else if (slideActual === 3) {
        removeOnScreen();
        slide1.classList.add("-onScreen")
        slide1.classList.add("-fromRight")

        circle1.classList.add("-onScreen") 
    }
}

function previousSlide() {
    userActivity();
    checkActualSlide();

    if (slideActual === 1) {
        removeOnScreen();
        slide3.classList.add("-onScreen")   
        slide3.classList.add("-fromLeft")

        circle3.classList.add("-onScreen")  
    } else if (slideActual === 2) {
        removeOnScreen();
        slide1.classList.add("-onScreen")
        slide1.classList.add("-fromLeft")

        circle1.classList.add("-onScreen") 
    } else if (slideActual === 3) {
        removeOnScreen();
        slide2.classList.add("-onScreen")
        slide2.classList.add("-fromLeft")

        circle2.classList.add("-onScreen") 
    }
}

function circleReference(slide) {
    userActivity();
    checkActualSlide();

    if (slide === 1) {
        if (slideActual !== 1) {
            removeOnScreen()
            slide1.classList.add("-onScreen")
            slide1.classList.add("-fromRight")
            circle1.classList.add("-onScreen")
        }
    } else if (slide === 2) {
        if (slideActual !== 2) {
            removeOnScreen()
            slide2.classList.add("-onScreen")
            slide2.classList.add("-fromRight")
            circle2.classList.add("-onScreen")
        }
    } else if (slide === 3) {
        if (slideActual !== 3) {
            removeOnScreen()
            slide3.classList.add("-onScreen")
            slide3.classList.add("-fromRight")
            circle3.classList.add("-onScreen")
        }
    }
}

function checkActualSlide() {
    let slide1On = slide1.classList.contains("-onScreen")
    let slide2On = slide2.classList.contains("-onScreen")
    let slide3On = slide3.classList.contains("-onScreen")

    if (slide1On) {
        slideActual = 1
    } else if (slide2On) {
        slideActual = 2
    } else if (slide3On) {
        slideActual = 3
    }
}


