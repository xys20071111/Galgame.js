import * as PIXI from "pixi.js";
import {Stage,Loader} from "./app"
export const buttonBar = new PIXI.Container();
export const splashUIButton = new PIXI.Container();
export const dialogBar = new PIXI.Container();
const GamePanel = new PIXI.Container();
export const display={
    //UI组件成员
	frontImage : new PIXI.Sprite(),
	backImage : new PIXI.Sprite(),
	name : new PIXI.Text("",{fontFamily : 'Arial', fontSize: 24, fill : 0x000000}),
	dialog : new PIXI.Text("",{fontFamily : 'Arial', fontSize: 24, fill : 0x000000}),
	talkBarFrame : new PIXI.Sprite(),
	startButton : new PIXI.Sprite(),
	loadButton : new PIXI.Container(),
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
