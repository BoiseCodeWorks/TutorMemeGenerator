import MemeController from "./Controllers/MemeController.js";


class App {
  constructor() {
    this.controllers = {
      memeController: new MemeController()
    }
  }
}

window["app"] = new App()