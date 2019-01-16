"use strict"
const app = new PIXI.Application({height:600,width:800,backgroundColor:0xffffff});
document.body.appendChild(app.view);
//基本UI组件
const buttonBar = new PIXI.Container();
const splashUIButton = new PIXI.Container();
const textBar = new PIXI.Container();
const talkBar = new PIXI.Container();
const background = new PIXI.Sprite();
const frontImage = new PIXI.Sprite();
//UI组件成员
const nameDisplayed = new PIXI.Text("",{fontFamily : 'Arial', fontSize: 24, fill : 0xffffff});
const textInTalk = new PIXI.Text("",{fontFamily : 'Arial', fontSize: 24, fill : 0xffffff});
const textInTextBar = new PIXI.Text("",{fontFamily : 'Arial', fontSize: 24, fill : 0xffffff});
const talkBarFrame = new PIXI.Container();

//初始化UI组件
app.stage.addChild(background);
app.stage.addChild(frontImage);
talkBar.addChild(nameDisplayed);
talkBar.addChild(textInTalk);
talkBar.addChild(talkBarFrame);
textBar.addChild(text);
