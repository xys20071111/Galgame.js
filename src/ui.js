"use strict"
import * as Component from './components'
import * as PIXI from "pixi.js"
import {Stage,Loader} from "./app"
import * as scene from './scene'
import {GameConfig} from './config'


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
  nameComponent.displayed.text = name;
  textInTalk.text = dialog;
};
UI.setBackground = (texture) => {
  background.texture = Loader.resources[texture].texture;
}
UI.setFrontImage = (texture) => {
  frontImage.texture = Loader.resources[texture].texture;
}*/

/**
 * 设置标题页ui
 * @argument {string} startButtonTexture
 * @argument {string} loadButtonTexture
*/
export function setStartUI (startButtonTexture,loadButtonTexture){
	console.log('Init startUI');
	//设置开始按钮位置
	Component.display.startButton.x = 300; 
	Component.display.startButton.y = 400;
	//设置开始按钮材质
	Component.display.startButton.texture = Loader.resources[startButtonTexture].texture;
	Component.display.loadButton.texture = Loader.resources[loadButtonTexture].texture;
	Component.display.startButton.interactive = true;
	Component.display.startButton.on('click', (event) => {
		//UI.setupGameUI(底下那个框的材质,第一个场景的名称)
		console.log('Start game');
		setupGameUI(GameConfig.dialogBarTexture,'start');
	});
	Stage.addChild(Component.splashUIButton);
}
/**
 * 进入游戏UI
 * @argument {string} framrPic
 * @argument {string} startScene
 也许你不应该自己调用这个函数
 */
export function setupGameUI (framePic,startScene){
	hide(Component.splashUIButton);
	//组建游戏界面
	//Stage.addChild(Component.display.frontImage);
	//Stage.addChild(dialogBar);
    //Stage.addChild(buttonBar);
    Stage.addChild(Component.GamePanel);
	Component.display.frontImage.x = 100;
	Component.display.frontImage.y = 45;
	Component.display.frontImage.width = 500;
	Component.display.frontImage.height = 600;
	Component.display.talkBarFrame.texture = Loader.resources[framePic].texture;
	//设置组件位置
	Component.display.name.x = 100;
	Component.display.name.y = 25;
	Component.display.dialog.x = 30;
	Component.display.dialog.y = 65;
	Component.dialogBar.y = 310;
	scene.use(startScene);
}
/**
 * 设置下一个场景
 * @argument {string} nextScene 场景名
*/
export function setNextScene(nextScene){
	Component.dialogBar.on(click,()=>{
		scene.use(nextScene);
	});
	Component.display.background.on(click,()=>{
		scene.use(nextScene);
	});
	Component.display.frontImage.on(click,()=>{
		scene.use(nextScene);
	});
}
export function createButton (bg,x,y,onClick){
	let newButton = new PIXI.Sprite(Loader.resources[bg].texture);
	newButton.x = x;
	newButton.y = y;
	newButton.interactive = true;
	newButton.on(click,onClick);
	Stage.addChild(newButton);
	return newButton;
};

