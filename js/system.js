const app = new PIXI.Application({height:600,width:800});
document.body.appendChild(app.view);
const UI = {
  background:new PIXI.Sprite,
  set setBackground(texture){
    this.background.texture = texture;
  }
}
const buttonBar = new PIXI.Container();
