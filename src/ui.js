"use strict"
//基本UI组件
import * as PIXI from "pixi.js"
import {Stage,Loader} from "./app"
export const buttonBar = new PIXI.Container();
export const splashUIButton = new PIXI.Container();
export const dialogBar = new PIXI.Container();
export const hide=(target)=>{
	target.alpha = 0;
	target.visible=false;
};
export const show = (target)=>{
	target.alpha = 100;
	target.visible = true;
};
// UI.fadeIn = (target) => {
//   target.visible = true;
//   for(let i = 0;i<=1;i+=0.0001){
//     setTimeout(()=>{    target.alpha = i;},5000);
//
//   }
// }
/*
UI.talk = (name,dialog) => {
  nameDisplayed.text = name;
  textInTalk.text = dialog;
};
UI.setBackground = (texture) => {
  background.texture = PIXI.loader.resources[texture].texture;
}
UI.setFrontImage = (texture) => {
  frontImage.texture = PIXI.loader.resources[texture].texture;
}*/
export default const display={
	//UI组件成员
	frontImage : new PIXI.Sprite(),
	backImage : new PIXI.Sprite(),
	name : new PIXI.Text("",{fontFamily : 'Arial', fontSize: 24, fill : 0x000000}),
	dialog : new PIXI.Text("",{fontFamily : 'Arial', fontSize: 24, fill : 0x000000}),
	talkBarFrame : new PIXI.Sprite(),
	startButton : new PIXI.Sprite(),
	loadButton : new PIXI.Container(),
	FrontImage : function(value){display.frontImage.texture = PIXI.loader.resources[value].texture},
	BackImage : function(value){display.backImage.texture = PIXI.loader.resources[value].texture},
	Dialog : function(value){display.name.text = value.name;UI.display.dialog.text = value.dialog}

}
export const setStartUI = (startButtonTexture,loadButtonTexture,targetScene) => {
	console.log('Init startUI');
	//设置开始按钮位置
	display.startButton.x = 300; 
	display.startButton.y = 400;
	//设置开始按钮材质
	display.startButton.texture = PIXI.loader.resources[startButtonTexture].texture;
	display.loadButton.texture = PIXI.loader.resources[loadButtonTexture].texture;
	display.startButton.interactive = true;
	display.startButton.on(click, (event) => {
		//UI.setupGameUI(底下那个框的材质,第一个场景的名称)
		console.log('Start game');
		setupGameUI('asstes/data/image/frame.png',targetScene);
	});
	Stage.addChild(splashUIButton);
}
export const setupGameUI = (framePic,startScene) => {
	UI.hide(splashUIButton);
	//组建游戏界面
	Stage.addChild(UI.display.frontImage);
	Stage.addChild(talkBar);
	Stage.addChild(buttonBar);
	display.frontImage.x = 100;
	display.frontImage.y = 45;
	display.frontImage.width = 500;
	display.frontImage.height = 600;
	display.talkBarFrame.texture = PIXI.loader.resources[framePic].texture;
	//设置组件位置
	display.name.x = 100;
	display.name.y = 25;
	display.dialog.x = 30;
	display.dialog.y = 65;
	talkBar.y = 310;
	scene.use(startScene);
}
export const setNextScene = (nextScene)=>{
	talkBar.on(click,()=>{
		scene.use(nextScene);
	});
	display.background.on(click,()=>{
		scene.use(nextScene);
	});
	display.frontImage.on(click,()=>{
		scene.use(nextScene);
	});
}
export const createButton = (bg,x,y,onClick)=>{
	let newButton = new PIXI.Sprite(PIXI.loader.resources[bg].texture);
	newButton.x = x;
	newButton.y = y;
	newButton.interactive = true;
	newButton.on(click,onClick);
	Stage.addChild(newButton);
	return newButton;
};
//初始化UI组件
splashUIButton.addChild(display.startButton);
splashUIButton.addChild(display.loadButton);
talkBar.addChild(display.nameDisplayed);
talkBar.addChild(display.textInTalk);
talkBar.addChild(display.talkBarFrame);
talkBar.interactive = true;
display.backImage.interactive = true;
dispaly.frontImage.interactive = true;
