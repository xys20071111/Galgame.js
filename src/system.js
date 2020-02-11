"use strict"
import * as config from './config'
import * as PIXI from "pixi.js"
import {View,Stage} from './app'
if(config.GameConfig.isDev){
	//let vcon = new VConsole();
}

document.body.appendChild(View);
//基础变量
var gameStatus = {
  scene:null
  //如果还有什么需要的话，自己定义吧。
};

//预加载素材
Loader.add(resourcesList)
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
             Stage.addChild(UI.display.backImage);
             //显示背景
             //background.texture = PIXI.loader.resources['asstes/data/bgimage/title.jpg'].texture;
             UI.display.BackImage(config.titleBackImage);
             //显示开始UI
             UI.setStartUI(config.GameConfig.startButtonTexture,config.GameConfig.loadButtonTexture,config.GameConfig.startScene);

});
