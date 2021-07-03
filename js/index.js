function addServiceCard(params = {}) {
  const template = document.querySelector("#service-card-template");
  const container = document.querySelector(".service-content");

  template.content.querySelector(".service-card-title").textContent =
    params.title;
  template.content.querySelector(".service-card-text").textContent =
    params.description;
  template.content.querySelector(".service-img").src = params.image;

  var clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getService() {
  return fetch(
    "https://cdn.contentful.com/spaces/cjniok1dqeng/environments/master/entries?access_token=UJFrCWdhF1eo_mUD8bbA6AB362GDWyvcmNIF2gc4mvY&content_type=services"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollections = data.items.map((item) => {
        const image = buscarEnAsset(item.fields.service.sys.id, data);
        const imgUrl = image.fields.file.url;
        return {
          title: item.fields.title,
          description: item.fields.description,
          image: imgUrl,
        };
      });
      return fieldsCollections;
    });
}

function buscarEnAsset(id, data) {
  const arrayEncontrado = data.includes.Asset.find((asset) => {
    return asset.sys.id == id;
  });
  return arrayEncontrado;
}

function main() {
  getService().then(function (services) {
    for (const s of services) {
      addServiceCard(s);
    }
  });
  headerComponent(document.querySelector(".header-component"));
  contactoComponent(document.querySelector(".contact-section"));
  footerComponent(document.querySelector(".footer-section"));
}

main();
