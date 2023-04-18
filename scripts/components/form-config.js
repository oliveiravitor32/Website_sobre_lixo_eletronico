

const form = document.querySelector("#form-contact");

const buttonForm = document.querySelector(".button-form");



const addLoading = () => {

    let isEN = buttonForm.classList.contains("-en")

    if (isEN) {
        buttonForm.innerHTML = '<img class="loading-send-form" src="../../assets/images/loading.svg" alt="Icon loading"></img>'
    } else {
        buttonForm.innerHTML = '<img class="loading-send-form" src="../../assets/images/loading.svg" alt="Ícone de carregamento"></img>'
    }
};

const removeLoading = () => {

    const isEN = buttonForm.classList.contains("-en")

    if (isEN) {
        buttonForm.innerHTML = 'Send';
        alert("Message sent successfully!");
    } else {
        buttonForm.innerHTML = 'Enviar';
        alert("Mensagem enviada com sucesso!");
    }
};     

const handleSubmit = (event) => {
    event.preventDefault();

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    const fullDate = new Date().toLocaleString("pt-BR");

    addLoading();

    fetch("https://api.sheetmonkey.io/form/dPbNsGGtFUfN13vC1cN814", {

        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ Name: name.value, Email: email.value, Message: message.value, Date: fullDate })
    }).then( () => {
        name.value = "";
        email.value = "";
        message.value = "";

        removeLoading();     
    })
}


form.addEventListener("submit", handleSubmit)