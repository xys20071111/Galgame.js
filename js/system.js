"use strict"
const isDev=true;
if(isDev){
	let vcon = new VConsole();
}
const app = new PIXI.Application({height:600,width:800,backgroundColor:0xffffff});
document.body.appendChild(app.view);
//基础变量
var gameStatus = {
  nowScene:null,
  playerName:null,
  //如果还有什么需要的话，自己定义吧。
};
//基本UI组件
const buttonBar = new PIXI.Container();
const splashUIButton = new PIXI.Container();
const talkBar = new PIXI.Container();
const frontImage = new PIXI.Sprite();
const background = new PIXI.Sprite();
//UI组件成员
const nameDisplayed = new PIXI.Text("",{fontFamily : 'Arial', fontSize: 24, fill : 0x000000});
const textInTalk = new PIXI.Text("",{fontFamily : 'Arial', fontSize: 24, fill : 0x000000});
const talkBarFrame = new PIXI.Sprite();
const startButton = new PIXI.Sprite();
const loadButton = new PIXI.Container();
//初始化UI组件
splashUIButton.addChild(startButton);
splashUIButton.addChild(loadButton);
talkBar.addChild(nameDisplayed);
talkBar.addChild(textInTalk);
talkBar.addChild(talkBarFrame);
talkBar.interactive = true;
background.interactive = true;
frontImage.interactive = true;
//预加载素材
PIXI.loader.add(resourcesList)
           .on("progress",(loader, resource)=>{
             console.log("loading: " + resource.url);
             console.log("progress: " + loader.progress + "%");
             if(resource.error){
               console.log(resource.error);
               document.write('Error:when loading ' + resource.url + ' had cause ' + resource.error);
               throw resource.error;
             }
           }).load(()=>{
             //初始化UI
             app.stage.addChild(background);
             //显示背景
             //background.texture = PIXI.loader.resources['asstes/data/bgimage/title.jpg'].texture;
             UI.setBackground('asstes/data/image/bgimage/title.jpg');
             //显示开始UI
             UI.setStartUI(resourcesList[1],resourcesList[1],'LJX-joke');

});
