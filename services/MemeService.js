import Meme from '../Models/Meme.js'
//private


let simpsonMeme = {
  img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homer-simpson-gif-1547466477.jpg?resize=480:*",
  topScript: 'The top of the meme to you',
  bottomScript: "this is the bottom of our meme"
}
let _state = {
  memes: [new Meme(simpsonMeme)]

}


//private

//public
export default class MemeService {
  constructor() {
    console.log("hello from the service")
  }

  addMeme(newMeme) {
    console.log("constructing meme and adding meme to state")
    let FormattedMeme = new Meme(newMeme)
    _state.memes.push(FormattedMeme)
  }
  get Memes() {
    // let newMemeArray = []
    // for (let index = 0; index < _state.memes.length; index++){
    //   let individualMeme = _state.memes[index]
    //   newMemeArray.push(new Meme(individualMeme))
    // }
    // return newMemeArray
    console.log("retrieving memes")
    return _state.memes.map(individualMeme => new Meme(individualMeme))
  }



}