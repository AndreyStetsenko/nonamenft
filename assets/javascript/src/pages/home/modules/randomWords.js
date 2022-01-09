export default class RandWords {
  constructor() {
    this.settings();
    this.bindEvents();
  }
  settings() {
    this.words = [
      "CRYPTO", 
      "WORLD", 
      "NFT", 
      "HUNT", 
      "MONEY", 
      "FUCK", 
      "LICK", 
      "INSTANCE", 
      "WAKE", 
      "GIRLFRIEND", 
      "LOADING", 
      "WATCH", 
      "HOME", 
      "BITCH",
      "FUCK",
      "FUCKING",
      "VAGINA",
      "PROMOTION",
      "PENIS",
      "PIXEL",
      "MEN",
      "WOMAN",
    ];
  }
  bindEvents() {
    window.addEventListener("load", () => {
        var randoms = window.document.getElementsByClassName("randoms");
        for (var i = 0; i < randoms.length; i++)
            this.changeWord(randoms[i]);
    }, false);
  }
  changeWord(a) {
    a.style.opacity = '0.1';
    a.innerHTML = this.words[this.getRandomInt(0, this.words.length - 1)];
    setTimeout(() => {
        a.style.opacity = '0.6';
    }, 1000);
    setTimeout(() => {
        this.changeWord(a);
    }, this.getRandomInt(300, 1200));
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}