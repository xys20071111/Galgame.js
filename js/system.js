"use strict"
const app = new PIXI.Application({height:600,width:800,backgroundColor:0xffffff});
document.body.appendChild(app.view);
//基本UI组件
const buttonBar = new PIXI.Container();
const splashUIButton = new PIXI.Container();
const textBar = new PIXI.Container();
const talkBar = new PIXI.Container();
//UI组件成员
const nameDisplayed = new PIXI.Text("",{fontFamily : 'Arial', fontSize: 24, fill : 0x000000});
const textInTalk = new PIXI.Text("",{fontFamily : 'Arial', fontSize: 24, fill : 0x000000});
const textInTextBar = new PIXI.Text("",{fontFamily : 'Arial', fontSize: 24, fill : 0x000000});
const talkBarFrame = new PIXI.Container();
const nameBar = null;
const background = new PIXI.Sprite();
//初始化UI组件
app.stage.addChild(background);
talkBar.addChild(nameDisplayed);
talkBar.addChild(textInTalk);
talkBar.addChild(talkBarFrame);
textBar.addChild(text);
//预加载素材
PIXI.loader.add(resources).load(()=>{
  SplashScene.init();
});

const UI = {};
UI.hide=(target)=>{
  target.visible=false;
};
UI.show = (target)=>{
  target.alpha = 100;
  target.visible = true;
};
UI.useScene = (scene)=>{
  background.texture = scene.background;
}
UI.talk = ()={
  if(arguments.length == 1){
    textInTalk.text = arguments[0];
  }else{
    nameDisplayed.text = arguments[0];
    textInTalk.text = arguments[1];
  }
};
UI.text = (text)=>{
  textInTextBar.text = text;
}
