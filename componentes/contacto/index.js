function contactComponent(el) {
  const contactEl = document.createElement("div");
  contactEl.innerHTML = `
  <section class="contact-section">
    <h3 class="contact__title">Escribime</h3>
    <div class="contact__container">
      <div class="fieldset">
        <label for="name" class="label">NOMBRE</label>
        <input type="text" class="input" id="name" />
      </div>
      <div class="fieldset">
        <label for="email" class="label">EMAIL</label>
        <input type="text" class="input" id="email" />
      </div>
      <div class="fieldset">
        <label for="message" class="label">MENSAJE</label>
        <textarea name="message" class="textarea" id="message" ></textarea>
      </div>
      <button class="contact__button">Enviar</button>
    </div>
  </section>
  `;

  el.appendChild(contactEl);
}

function sendMail(contactEl) {
  const formEl = contactEl.querySelector(".contact__container");

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData.entries());

    let message = dataObject.name + " te acaba de enviar un mensaje!\n\n";
    message += "> Te quiere decir esto: " + dataObject.message;
    message += "\n\n> Podés contactarte acá: " + dataObject.email;

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "toledo.nicolas.matias@gmail.com",
        message: message,
      }),
    })
      .then(() => {
        alert("El mensaje fue enviado con éxito!");

        contactEl.querySelectorAll(".contact-form__input").forEach((input) => {
          input.value = "";
        });
        contactEl.querySelector(".contact-form__textarea").value = "";
      })
      .catch(() => {
        alert("Algo salió mal al enviar el mensaje...");
      });
  });
}
