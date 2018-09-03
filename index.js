const _ = require("lodash");

exports.getLinksFromMd = text => {
  if (text == null) {
    throw new Error("Erro: parâmetro vazio.");
  }
  switch(typeof text) {
    case "number":
      throw new Error("Erro: números não são válidos.");
    case "string":
      if (text.length === 0) {
        throw new Error("Erro: o parâmetro não pode ser uma string vazia.");
      } 
      let regExpMarkDownUrl = new RegExp(/(https?:\/\/)?(www\.)?[a-z0-9]+(\.\w{2,3}){1,2}((\/\w+)?){1,}/g);
      let regExpMarkDownText = new RegExp(/(?<=\[).*?(?=\])/g);
      let url = text.match(regExpMarkDownUrl);
      let markDown = text.match(regExpMarkDownText);
      let result = _.zipWith(url, markDown, function(a, b) {
        return { "href": a, "text": b};
      });
    return result;
  };
};
