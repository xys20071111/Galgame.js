"use strict"
//基本UI组件
import * as PIXI from "pixi.js"
import {Stage,Loader} from "./app"
import * as scene from './scene'
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
  background.texture = Loader.resources[texture].texture;
}
UI.setFrontImage = (texture) => {
  frontImage.texture = Loader.resources[texture].texture;
}*/
const display={
    //UI组件成员
	frontImage : new PIXI.Sprite(),
	backImage : new PIXI.Sprite(),
	name : new PIXI.Text("",{fontFamily : 'Arial', fontSize: 24, fill : 0x000000}),
	dialog : new PIXI.Text("",{fontFamily : 'Arial', fontSize: 24, fill : 0x000000}),
	talkBarFrame : new PIXI.Sprite(),
	startButton : new PIXI.Sprite(),
	loadButton : new PIXI.Container(),
	FrontImage : function(value){display.frontImage.texture = Loader.resources[value].texture},
	BackImage : function(value){display.backImage.texture = Loader.resources[value].texture},
	Dialog : function(value){display.name.text = value.name;UI.display.dialog.text = value.dialog}

}
export default {display}
export const setStartUI = (startButtonTexture,loadButtonTexture,targetScene) => {
	console.log('Init startUI');
	//设置开始按钮位置
	display.startButton.x = 300; 
	display.startButton.y = 400;
	//设置开始按钮材质
	display.startButton.texture = Loader.resources[startButtonTexture].texture;
	display.loadButton.texture = Loader.resources[loadButtonTexture].texture;
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
	Stage.addChild(dialogBar);
	Stage.addChild(buttonBar);
	display.frontImage.x = 100;
	display.frontImage.y = 45;
	display.frontImage.width = 500;
	display.frontImage.height = 600;
	display.talkBarFrame.texture = Loader.resources[framePic].texture;
	//设置组件位置
	display.name.x = 100;
	display.name.y = 25;
	display.dialog.x = 30;
	display.dialog.y = 65;
	dialogBar.y = 310;
	scene.use(startScene);
}
export const setNextScene = (nextScene)=>{
	dialogBar.on(click,()=>{
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
	let newButton = new PIXI.Sprite(Loader.resources[bg].texture);
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
dialogBar.addChild(display.name);
dialogBar.addChild(display.dialog);
dialogBar.addChild(display.talkBarFrame);
dialogBar.interactive = true;
display.backImage.interactive = true;
display.frontImage.interactive = true;
