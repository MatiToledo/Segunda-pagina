function addPortfolioCard(params = {}) {
  const template = document.querySelector("#portfolio-card-template");
  const container = document.querySelector(".portfolio-content");

  template.content.querySelector(".portfolio-card-title").textContent =
    params.title;
  template.content.querySelector(".portfolio-card-text").textContent =
    params.description;
  template.content.querySelector(".portfolio-img").src = params.image;
  template.content.querySelector(".portfolio-card-link").href = params.url;

  var clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getPortfolio() {
  return fetch(
    "https://cdn.contentful.com/spaces/cjniok1dqeng/environments/master/entries?access_token=0ZERwaV6uXEAd7I03htLh_93ZCU_JYzpn9sPx9slCFw&content_type=portfolio"
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
          url: item.fields.url,
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
  getPortfolio().then(function (portfolio) {
    for (const p of portfolio) {
      addPortfolioCard(p);
    }
  });
  headerComponent(document.querySelector(".header-component"));
  footerComponent(document.querySelector(".footer-component"));
}

main();
