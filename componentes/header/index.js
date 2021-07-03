function headerComponent(el) {
  const headerEl = document.createElement("div");
  headerEl.innerHTML = `<div class="header">
  <a href="./index.html"
    ><img src="./imagenes/logo.png" class="logo"
  /></a>
  <img src="./imagenes/burguer.png" class="burguer__open" />
  <div class="burguer__window">
    <img src="./imagenes/close.png" class="burguer__close" />
    <div class="burguer__content">
      <a class="burguer__a" href="./portfolio.html">Portfolio</a>
      <a class="burguer__a" href="./servicios.html">Servicios</a>
      <a class="burguer__a" href="./contacto.html">Contacto</a>
    </div>
  </div>
  <div class="header__a-container">
    <a href="./portfolio.html" class="header__a">Portfolio</a>
    <a href="./servicios.html" class="header__a">Servicios</a>
    <a href="./contacto.html" class="header__a">Contacto</a>
  </div>
</div>`;

  el.appendChild(headerEl);

  const openBurguer = document.querySelector(".burguer__open");
  const closeBurguer = document.querySelector(".burguer__close");
  const windowBurguer = document.querySelector(".burguer__window");

  openBurguer.addEventListener("click", () => {
    windowBurguer.style.display = "inherit";
  });

  closeBurguer.addEventListener("click", () => {
    windowBurguer.style.display = "";
  });
}
