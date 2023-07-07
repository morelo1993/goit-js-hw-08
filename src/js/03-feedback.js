import throttle  from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const guardarDatos = throttle(() => {
    const email = emailInput.value;
    const message = messageInput.value;
    
    const formData = {
        email: email,
        message: message
    };
    
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}, 500);

function loadFormData() {
    const datosJSON = localStorage.getItem("feedback-form-state");

    if (datosJSON) {
        const formData = JSON.parse(datosJSON);
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    } else {
        emailInput.value = "";
        messageInput.value = "";
    }
}

function submitForm(event) {
    event.preventDefault();

    const email = emailInput.value;
    const message = messageInput.value;
    
    const formData = {
        email: email,
        message: message
    };

    console.log(formData);

    localStorage.removeItem("feedback-form-state");
    emailInput.value = "";
    messageInput.value = "";
}

form.addEventListener("input", guardarDatos);
window.addEventListener("load", loadFormData);
form.addEventListener("submit", submitForm);



// let form = document.querySelector(".feedback-form");
// let formDataContainer = document.getElementById("form-data");

// function saveFormData(event) {
//     event.preventDefault(); // Evitar el envío del formulario

//     let email = form.elements.email.value;
//     let message = form.elements.message.value;

//     let formData = {
//         email: email,
//         message: message
//     };

//     localStorage.setItem("feedback-form-state", JSON.stringify(formData));

//     displayFormData(formData);
// }

// function displayFormData(formData) {
//     let content = "<p>Email: " + formData.email + "</p>";
//     content += "<p>Message: " + formData.message + "</p>";

//     formDataContainer.innerHTML = content;
// }

// function loadFormData() {
//     let formDataJSON = localStorage.getItem("feedback-form-state");

//     if (formDataJSON) {
//         let formData = JSON.parse(formDataJSON);

//         displayFormData(formData);
//     }
// }

// window.addEventListener("load", loadFormData);

// form.addEventListener("submit", saveFormData);
