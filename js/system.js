"use strict"
const app = new PIXI.Application({height:600,width:800,backgroundColor:0xffffff});
document.body.appendChild(app.view);
//基本UI组件
const loadButton = new PIXI.Container();
const buttonBar = new PIXI.Container();
const splashUIButton = new PIXI.Container();
const textBar = new PIXI.Container();
const talkBar = new PIXI.Container();
const frontImage = new PIXI.Sprite();
const background = new PIXI.Sprite();
//UI组件成员
const nameDisplayed = new PIXI.Text("",{fontFamily : 'Arial', fontSize: 24, fill : 0xffffff});
const textInTalk = new PIXI.Text("",{fontFamily : 'Arial', fontSize: 24, fill : 0xffffff});
const textInTextBar = new PIXI.Text("",{fontFamily : 'Arial', fontSize: 24, fill : 0xffffff});
const talkBarFrame = new PIXI.Container();
const startButton = new PIXI.Sprite();

//初始化UI组件
splashUIButton.addChild(startButton);
splashUIButton.addChild(loadButton);
talkBar.addChild(nameDisplayed);
talkBar.addChild(textInTalk);
talkBar.addChild(talkBarFrame);
textBar.addChild(textInTextBar);
//预加载素材
PIXI.loader.add(resourcesList)
           .on("progress",(loader, resource)=>{
             console.log("loading: " + resource.url);
             console.log("progress: " + loader.progress + "%");
             if(resource.error){
               console.log(resource.error);
               document.write('Error:when loading ' + resource.url + 'had cause ' + resource.error);
               throw resource.error;
             }
           }).load(()=>{
             //初始化UI
             app.stage.addChild(startButton);
             app.stage.addChild(textBar);
             app.stage.addChild(talkBar);
             app.stage.addChild(background);
             app.stage.addChild(frontImage);
             textBar.visible = false;
             talkBar.visible = false;
             //显示背景
             background.texture = PIXI.loader.resources['asstes/data/bgimage/title.jpg'].texture;
             //显示开始按钮
             app.stage.addChild(startButton);
             startButton.texture = PIXI.loader.resources['asstes/data/image/button_base.jpg'].texture;
});
