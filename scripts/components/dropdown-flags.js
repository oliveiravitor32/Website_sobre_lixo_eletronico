


const modal = document.querySelector(".modal-flags")


function selectLanguage() {
    let isModalOpen = modal.classList.contains("-open")

    if (!isModalOpen) {
        modal.classList.add("-open")
    } else (
        modal.classList.remove("-open")
    )
}