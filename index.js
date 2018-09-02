const _ = require("lodash");

exports.getLinksFromMd = text => {
  if (text == null) {
    throw new Error("Erro: parâmetro vazio.");
  }
  if (text === "") {
    throw new Error("Erro: o parâmetro não pode ser uma string vazia.");
  } 

  if (typeof text === "number") {
    throw new Error("Erro: números não são válidos.");    
  }
  
  if (typeof text === "string") {
    let result = [];
    let regExpMarkDownUrl = new RegExp(/(https?:\/\/)?(www\.)?[a-z0-9]+(\.\w{2,3}){1,2}((\/\w+)?){1,}/g);
    let regExpMarkDownText = new RegExp(/(?<=\[).*?(?=\])/g);
    let url = text.match(regExpMarkDownUrl);
    let markDown = text.match(regExpMarkDownText);
    _.zipWith(url, markDown, function(a, b) {
      let obj = { "href": a, "text": b};
      result.push(obj);
    });
    return url ? result : [];
  }
};
