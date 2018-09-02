const _ = require("lodash");

exports.getLinksFromMd = text =>  {
  if (text == null) {
    throw new Error("Erro: vazio");
  }
  if (text === "") {
    throw new Error("Erro: nenhum parâmetro foi inserido");
  } 

  if (typeof text === "number") {
    throw new Error("Erro: números não são válidos");    
  }
  
  if (typeof text === "string") { // NÃO ESTÁ COBERTO PELO NYC
    var result = [];
    const regExpUrl = new RegExp(/(https?:\/\/)?(www\.)?[a-z0-9]+(\.\w{2,3}){1,2}/g);
    const regExpMarkDown = new RegExp(/(?<=\[).*?(?=\])/g);
    const url = text.match(regExpUrl);
    const markDown = text.match(regExpMarkDown);
    _.zipWith(url, markDown, function(a, b) {
      let obj = { "href": a, "text": b};
      result.push(obj);
    })
    console.log(result);
    return url ? result : [];
  }
}

// getLinksFromMd("temos dois markdowns e dois links: [google] (http://www.google.com), [youtube] (www.youtube.com.br/videos");