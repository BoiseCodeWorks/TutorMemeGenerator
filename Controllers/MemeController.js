import MemeService from "../services/MemeService.js"

let _memeService = new MemeService()

let _testMeme = _memeService.Memes
function draw() {
  console.log("getting the getter to do it's job")
  let memesFromService = _memeService.Memes
  console.log("got the memes from the service: ", memesFromService)
}
export default class MemeController {

  constructor() {
    console.log("hello from the controller")
    console.log(_testMeme)
  }

  addMeme(event) {
    debugger
    event.preventDefault()
    console.log(event)

    let form = event.target

    let newMeme = {
      topScript: form.topScript.value,
      bottomScript: form.bottomScript.value,
      img: form.img.value
    }
    _memeService.addMeme(newMeme)
    draw()

  }

}