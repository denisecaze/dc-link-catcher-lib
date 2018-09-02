const mocha = require("mocha"); 
const chai = require("chai");
const library = require("../index"); 
const expect = chai.expect;

describe("getLinksFromMd", () => {

  describe("when there is no parameter", () => {
    it("should return an error", () => {
      let nullParameter = () => { library.getLinksFromMd() };
      expect(nullParameter).throw("Erro: parâmetro vazio.");
    });
  });

  describe("when the parameter is an empty string", () => {
    it("should return an error", () => {
      let EmptyStrParameter = () => { library.getLinksFromMd("") }; 
      expect(EmptyStrParameter).throw("Erro: o parâmetro não pode ser uma string vazia.");
    });
  });

  describe("when the parameter is a number", () => {
    it("should return an error", () => {
      let numberParameter = () => { library.getLinksFromMd(0) };
      expect(numberParameter).throw("Erro: números não são válidos.");
    });
  });

  describe("when the parameter doesn't have a link", () => {
    it("should return an empty array", () => {
      expect(library.getLinksFromMd("oi, oi, oi")).be.an("array");
      expect(library.getLinksFromMd("oi, oi, oi")).be.empty;
    });
  });

  describe("when the parameter has a link", () => {
    it("should return an url and markdown links object array", () => {
      expect(library.getLinksFromMd("temos um markdown [google] e um link (http://www.google.com)")).to.deep.equal([ { href: "http://www.google.com", text: "google" } ]);
    });
  });

  describe("when the parameter has two links", () => {
    it("should return an url and markdown links object array", () => {
      expect(library.getLinksFromMd("temos dois markdowns e dois links: [google] (http://www.google.com), [youtube] (www.youtube.com.br/videos)")).to.deep.equal([ { href: 'http://www.google.com', text: 'google' }, { href: 'www.youtube.com.br/videos', text: 'youtube' } ]);
    });
  });

  describe("when the parameter has more than two links", () => {
    it("should return an url and markdown links object array", () => {
      expect(library.getLinksFromMd("temos muitos markdowns e vários links: [google] (http://www.google.com), [youtube] (www.youtube.com.br/videos), [hotmail] (https://hotmail.com), [twitter] (http://www.twitter.com.br/feed/user/friends)")).to.deep.equal([ { href: 'http://www.google.com', text: 'google' }, { href: 'www.youtube.com.br/videos', text: 'youtube' }, { href: 'https://hotmail.com', text: 'hotmail'}, { href: 'http://www.twitter.com.br/feed/user/friends', text: 'twitter'} ]);
    });
  });

});


// TALVEZ COLOCAR O DESCRIBE EM CADA TESTE, PARA FICAR MAIS CLARO
// MELHORAR, REDUZIR E UNIFICAR CÓDIGO. TUDO EM LODASH?
// FAZER README
// VERIFICAR CONFIGURAÇÕES DO ERLINT E VER COMO ELE É USADO PELOS MENTORES (SABER SE O MEU ESTÁ OK) VER INDENT 2 OU 4
// RETIRAR NYC_OUTPUT DO GITHUB