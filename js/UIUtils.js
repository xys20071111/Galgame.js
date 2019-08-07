"use strict"
const UI = {};
//基本UI组件
const buttonBar = new PIXI.Container();
const splashUIButton = new PIXI.Container();
const talkBar = new PIXI.Container();
UI.hide=(target)=>{
	target.alpha = 0;
	target.visible=false;
};
UI.show = (target)=>{
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
UI.display={
	//UI组件成员
	frontImage : new PIXI.Sprite(),
	backImage : new PIXI.Sprite(),
	name : new PIXI.Text("",{fontFamily : 'Arial', fontSize: 24, fill : 0x000000}),
	dialog : new PIXI.Text("",{fontFamily : 'Arial', fontSize: 24, fill : 0x000000}),
	talkBarFrame : new PIXI.Sprite(),
	startButton : new PIXI.Sprite(),
	loadButton : new PIXI.Container(),
	FrontImage : function(value){UI.display.frontImage.texture = PIXI.loader.resources[value].texture},
	BackImage : function(value){UI.display.backImage.texture = PIXI.loader.resources[value].texture},
	Dialog : function(value){UI.display.name.text = value.name;UI.display.dialog.text = value.dialog}

}
UI.setStartUI = (startButtonTexture,loadButtonTexture,targetScene) => {
	console.log('Init startUI');
	//设置开始按钮位置
	UI.display.startButton.x = 300; 
	UI.display.startButton.y = 400;
	//设置开始按钮材质
	UI.display.startButton.texture = PIXI.loader.resources[startButtonTexture].texture;
	UI.display.loadButton.texture = PIXI.loader.resources[loadButtonTexture].texture;
	UI.display.startButton.interactive = true;
	UI.display.startButton.on(click, (event) => {
		//UI.setupGameUI(底下那个框的材质,第一个场景的名称)
		console.log('Start game');
		UI.setupGameUI('asstes/data/image/frame.png',targetScene);
	});
	app.stage.addChild(splashUIButton);
}
UI.setupGameUI = (framePic,startScene) => {
	UI.hide(splashUIButton);
	//组建游戏界面
	app.stage.addChild(UI.display.frontImage);
	app.stage.addChild(talkBar);
	app.stage.addChild(buttonBar);
	UI.display.frontImage.x = 100;
	UI.display.frontImage.y = 45;
	UI.display.frontImage.width = 500;
	UI.display.frontImage.height = 600;
	UI.display.talkBarFrame.texture = PIXI.loader.resources[framePic].texture;
	//设置组件位置
	UI.display.nameDisplayed.x = 100;
	UI.display.nameDisplayed.y = 25;
	UI.display.textInTalk.x = 30;
	UI.display.textInTalk.y = 65;
	talkBar.y = 310;
	scene.use(startScene);
}
UI.setNextScene = (nextScene)=>{
	talkBar.on(click,()=>{
		scene.use(nextScene);
	});
	UI.display.background.on(click,()=>{
		scene.use(nextScene);
	});
	UI.display.frontImage.on(click,()=>{
		scene.use(nextScene);
	});
}
UI.createButton = (bg,x,y,onClick)=>{
	let newButton = new PIXI.Sprite(PIXI.loader.resources[bg].texture);
	newButton.x = x;
	newButton.y = y;
	newButton.interactive = true;
	newButton.on(click,onClick);
	app.stage.addChild(newButton);
	return newButton;
};
//初始化UI组件
splashUIButton.addChild(UI.display.startButton);
splashUIButton.addChild(UI.display.loadButton);
talkBar.addChild(UI.display.nameDisplayed);
talkBar.addChild(UI.display.textInTalk);
talkBar.addChild(UI.display.talkBarFrame);
talkBar.interactive = true;
UI.display.backImage.interactive = true;
UI.dispaly.frontImage.interactive = true;
