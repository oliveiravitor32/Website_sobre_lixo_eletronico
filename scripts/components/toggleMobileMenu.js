


const menu = document.querySelector("#menu-nav")
const icon = document.querySelector(".mobile-menu")
const body = document.body


function toggleMenu() {
    let isOpen = menu.classList.contains("-open")


    if (isOpen) {
        menu.classList.toggle("-open")
        body.style.overflow = "visible"

        icon.classList.toggle("-open")
        
        
    } else {
        menu.classList.toggle("-open")
        body.style.overflow = "hidden"

        icon.classList.toggle("-open")

        window.addEventListener("resize", (e) => {
            if(e.currentTarget.innerWidth > 970) {
                menu.classList.remove("-open")
                body.style.overflow = "visible"
                icon.classList.remove("-open")
            }
        })
        
    }
}

