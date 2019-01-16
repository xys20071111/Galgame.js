"use strict"
const app = new PIXI.Application({height:600,width:800});
document.body.appendChild(app.view);

const buttonBar = new PIXI.Container();
const splashUIButton = new PIXI.Container();
const textBar = new PIXI.Container();
const talkBar = new PIXI.Container();

const nameDisplayed = new PIXI.Text();
const textInTalk = new PIXI.Text();
const text = new PIXI.Text();

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
UI.useScene(SplashScene);
