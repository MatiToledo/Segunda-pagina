function footerComponent(el) {
  const footerEl = document.createElement("div");
  footerEl.innerHTML = `<section class="footer-section">
  <img src="./imagenes/logo.png" class="logo-footer" />
  <div class="footer__container">
    <div class="social__container">
      <a href="" class="social__link">Instragram</a>
      <img src="./imagenes/instagram.png" class="social__img" />
    </div>
    <div class="social__container">
      <a href="" class="social__link">Linkedin</a>
      <img src="./imagenes/linkedin.png" class="social__img" />
    </div>
    <div class="social__container">
      <a href="" class="social__link">GitHub</a>
      <img src="./imagenes/github.png" class="social__img" />
    </div>
  </div>
</section>`;

  el.appendChild(footerEl);
}
