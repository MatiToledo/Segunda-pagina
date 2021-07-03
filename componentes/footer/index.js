function footerComponent(el) {
  const footerEl = document.createElement("div");
  footerEl.innerHTML = `
  <div class="footer">
        <img src="./imagenes/logo.png" alt="" class="footer__logo" />
        <div class="social">
          <div class="social__container">
            <a class="social__link" href="">Instagram</a>
            <img src="./imagenes/instagram.png" alt="" class="social__img" />
          </div>
          <div class="social__container">
            <a class="social__link" href="">Linkedin</a>
            <img src="./imagenes/linkedin.png" alt="" class="social__img" />
          </div>
          <div class="social__container">
            <a class="social__link" href="">Github</a>
            <img src="./imagenes/github.png" alt="" class="social__img" />
          </div>
        </div>
      </div>`;

  el.appendChild(footerEl);
}
