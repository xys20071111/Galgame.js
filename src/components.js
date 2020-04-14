import * as PIXI from "pixi.js";
import {Stage,Loader} from "./app"
export const buttonBar = new PIXI.Container();
export const splashUIButton = new PIXI.Container();
export const dialogBar = new PIXI.Container();
const GamePanel = new PIXI.Container();
export const display={
    //UI组件成员
	frontImage : new PIXI.Sprite(),//前景
	backImage : new PIXI.Sprite(),//背景
	name : new PIXI.Text("",{fontFamily : 'Arial', fontSize: 24, fill : 0x000000}),//角色名
	dialog : new PIXI.Text("",{fontFamily : 'Arial', fontSize: 24, fill : 0x000000}),//对话内容
	talkBarFrame : new PIXI.Sprite(),//对话框
	startButton : new PIXI.Sprite(),//开始按钮
	loadButton : new PIXI.Container(),//加载按钮
	/**
     * @param {string} value
     */
	set FrontImage (value){this.frontImage.texture = Loader.resources[value].texture},
	/**
     * @param {string} value
     */
	set BackImage (value){this.backImage.texture = Loader.resources[value].texture},
	Dialog : function(value){display.name.text = value.name;UI.display.dialog.text = value.dialog}

}
//初始化UI组件
splashUIButton.addChild(display.startButton);
splashUIButton.addChild(display.loadButton);
dialogBar.addChild(display.name);
dialogBar.addChild(display.dialog);
dialogBar.addChild(display.talkBarFrame);
dialogBar.interactive = true;
display.backImage.interactive = true;
display.frontImage.interactive = true;
GamePanel.addChild(display.frontImage);
GamePanel.addChild(dialogBar);
export default {display}
export {GamePanel};
