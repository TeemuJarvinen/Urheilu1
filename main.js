"use strict";

class Henkilo {
  constructor(etunimi, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }
}

class Urheilija extends Henkilo {
  constructor(kuva, omapaino, laji, saavutukset, ...args) {
    super(...args);
    this.kuva = kuva;
    this.omapaino = omapaino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }
}

const urheilija1 = new Urheilija(
  "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
  "70 kg",
  "Jalkapallo",
  "---",
  "Eemeli",
  "Esimerkki",
  "EsimE",
  "1980"
);

console.log(urheilija1.etunimi);
console.log(urheilija1.laji);
console.log(urheilija1.syntymavuosi);

// Tarvitseeko settereitä / gettereitä määritellä, koska tämähän ajaa saman asian
// urheilija1.etunimi = "Markku";
// kuin jos olisi
// urheilija1.setEtunimi("Markku");
