function contactoComponent(el) {
  const contactoEl = document.createElement("div");
  contactoEl.innerHTML = `
  <section class="form">
  <h5 class="form__title">Escribime</h5>
  <div class="form__container">
    <div class="fieldset">
      <label for="name" class="label">NOMBRE</label>
      <input type="text" class="input-text" id="name" />
    </div>
    <div class="fieldset">
      <label for="email" class="label">EMAIL</label>
      <input type="text" id="email" class="input-text" />
    </div>
    <div class="fieldset">
      <label for="message" class="label">MENSAJE</label>
      <textarea name="message" id="message" class="textarea"></textarea>
    </div>
    <button class="form__button">Enviar</button>
  </div>
  </section>`;

  el.appendChild(contactoEl);
}
