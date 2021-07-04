function addServiceCard(params = {}) {
  const template = document.querySelector("#services-card-template");
  const container = document.querySelector(".services-content");

  template.content.querySelector(".services-card-title").textContent =
    params.title;
  template.content.querySelector(".services-card-text").textContent =
    params.description;
  template.content.querySelector(".services-img").src = params.image;

  var clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getServices() {
  return fetch(
    "https://cdn.contentful.com/spaces/cjniok1dqeng/environments/master/entries?access_token=0ZERwaV6uXEAd7I03htLh_93ZCU_JYzpn9sPx9slCFw&content_type=servicios"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollections = data.items.map((item) => {
        const image = buscarEnAsset(item.fields.planta.sys.id, data);
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
  getServices().then(function (services) {
    for (const s of services) {
      addServiceCard(s);
    }
  });
  headerComponent(document.querySelector(".header-component"));
  footerComponent(document.querySelector(".footer-component"));
}

main();
