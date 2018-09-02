const mocha = require("mocha"); 
const chai = require("chai");
const _ = require("lodash");
const library = require("../index"); 
const expect = chai.expect;

describe("getLinksFromMd", () => {
  it("should return an error", () => {
    let nullArgument = () => { library.getLinksFromMd() };
    expect(nullArgument).throw("Erro: vazio");
  })
  it("should return an error", () => {
    let EmptyStrArgument = () => { library.getLinksFromMd("") }; 
    expect(EmptyStrArgument).throw("Erro: nenhum parâmetro foi inserido");
  })
  it("should return an error", () => {
    let numberArgument = () => { library.getLinksFromMd(0) };
    expect(numberArgument).throw("Erro: números não são válidos");
  })
  it("should return an empty array", () => {
    expect(library.getLinksFromMd("oi, oi, oi")).be.an("array");
    expect(library.getLinksFromMd("oi, oi, oi")).be.empty;
  })
  it("should return an url and markdown links object array", () => {
    expect(library.getLinksFromMd("temos um markdown [google] e um link (http://www.google.com)")).to.deep.equal([ { href: "http://www.google.com", text: "google" } ]);
  })
  it("should return an url and markdown links object array", () => {
    expect(library.getLinksFromMd("temos dois markdowns e dois links: [google] (http://www.google.com), [youtube] (www.youtube.com.br/videos)")).to.deep.equal([ { href: 'http://www.google.com', text: 'google' }, { href: 'www.youtube.com.br/videos', text: 'youtube' } ]);
  })
  it("should return an url and markdown links object array", () => {
    expect(library.getLinksFromMd("temos muitos markdowns e vários links: [google] (http://www.google.com), [youtube] (www.youtube.com.br/videos), [hotmail] (https://hotmail.com), [twitter] (http://www.twitter.com.br/feed/user/friends)")).to.deep.equal([ { href: 'http://www.google.com', text: 'google' }, { href: 'www.youtube.com.br/videos', text: 'youtube' }, { href: 'https://hotmail.com', text: 'hotmail'}, { href: 'http://www.twitter.com.br/feed/user/friends', text: 'twitter'} ]);
  })
})


// TALVEZ COLOCAR O DESCRIBE EM CADA TESTE, PARA FICAR MAIS CLARO
// MELHORAR, REDUZIR E UNIFICAR CÓDIGO. TUDO EM LODASH?
// FAZER README
// VERIFICAR CONFIGURAÇÕES DO ERLINT E VER COMO ELE É USADO PELOS MENTORES (SABER SE O MEU ESTÁ OK) VER INDENT 2 OU 4
// RETIRAR NYC_OUTPUT DO GITHUB