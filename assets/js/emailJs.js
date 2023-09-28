const serviceID = "service_649f4gl";
const templateID = "template_djx6sa9";
function enviarCorreo(event) {
    event.preventDefault(); // Prevenir el envío predeterminado del formulario
    const loading = document.querySelector(".loading");
    loading.style.display = "block";

    // Obtener los valores del formulario
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    // Configurar los parámetros para el correo electrónico
    const params = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    if(name === "" || email === "" || subject === "" || message === ""){
      const errorMsj = document.querySelector(".error-message");
      loading.style.display = "none";
      errorMsj.style.display = "block";
      setTimeout(() => {
        errorMsj.style.display = "none";  
      }, 2000);
      return;
    }

    
    const alertSuccess = document.querySelector(".sent-message")
    emailjs.send(serviceID,templateID,params)
    .then(res=>{
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      loading.style.display = "none";
      alertSuccess.style.display = "block";
      setTimeout(() => {
        alertSuccess.style.display = "none";
      }, 2000);
  })
  }

  const submitButton = document.getElementById('submitButton');
submitButton.addEventListener("click", enviarCorreo);