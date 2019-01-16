"use strict"
const app = new PIXI.Application({height:600,width:800});
document.body.appendChild(app.view);
const UI = {
};

const buttonBar = new PIXI.Container();
const splashUIButton = new PIXI.Container();
const textBar = new PIXI.Container();
const talkBar = new PIXI.Container();

const nameDisplayed = new PIXI.Text();
const textInTalk = new PIXI.Text();
const text = new PIXI.text();

const talkBarFrame = new PIXI.Container();
const nameBar = null;
var background = null;

talkBar.addChild(nameDisplayed);
talkBar.addChild(textInTalk);
talkbar.addChild(talkBarFrame);
//预加载素材并初始化背景
textBar.addChild(text);
PIXI.loader.add(resources).load(()=>{
  background = new PIXI.Sprite();
});
