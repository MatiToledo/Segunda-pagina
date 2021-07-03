function contactComponent(el) {
  const contactEl = document.createElement("div");
  contactEl.innerHTML = `
  <section class="contact-section">
    <h3 class="contact__title">Escribime</h3>
    <div class="contact__container">
      <div class="fieldset">
        <label for="name" class="label">NOMBRE</label>
        <input type="text" class="input" />
      </div>
      <div class="fieldset">
        <label for="email" class="label">EMAIL</label>
        <input type="text" class="input" />
      </div>
      <div class="fieldset">
        <label for="message" class="label">MENSAJE</label>
        <textarea name="message" class="textarea"></textarea>
      </div>
      <button class="contact__button">Enviar</button>
    </div>
  </section>
  `;

  el.appendChild(contactEl);
}
