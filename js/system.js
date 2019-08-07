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
             app.stage.addChild(UI.display.backImage);
             //显示背景
             //background.texture = PIXI.loader.resources['asstes/data/bgimage/title.jpg'].texture;
             UI.display.backImage.texture = PIXI.loader.resources['asstes/data/image/bgimage/title.jpg'].texture;
             //显示开始UI
             UI.setStartUI(resourcesList[1],resourcesList[1],'LJX-joke');

});
