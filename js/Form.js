/** @format */

class Form {
  constructor() {
    this.input = createImput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Start");
    this.titleImg = createImg("/assets/title.png");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120, 160);
    this.input.position(width / 20 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.positon(width / 2 - 300, height / 2 - 100);
  }

  setElememtsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
    this.playButton.MousePressed(() => {
      this.input.hide();
      this.playButton.hide();
    });
  }

  display() {
    this.setElementsPosition();
    this.setElememtsStyle();
  }
}

