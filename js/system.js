"use strict"
if(config.isDev){
	let vcon = new VConsole();
}
const app = new PIXI.Application({height:600,width:800,backgroundColor:0xffffff});
document.body.appendChild(app.view);
//基础变量
var gameStatus = {
  scene:null
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
             UI.display.BackImage(config.titleBackImage);
             //显示开始UI
             UI.setStartUI(config.startButtonTexture,config.loadButtonTexture,config.startScene);

});
