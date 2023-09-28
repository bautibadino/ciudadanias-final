const serviceID = "service_649f4gl";
const templateID = "template_djx6sa9";
function enviarCorreo(event) {
    event.preventDefault(); // Prevenir el envío predeterminado del formulario
  
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

    emailjs.send(serviceID,templateID,params)
    .then(res=>{
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!")
  
  })
  }

  const submitButton = document.getElementById('submitButton');
submitButton.addEventListener("click", enviarCorreo);