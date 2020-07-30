"use strict"
import * as config from './config'
//import * as PIXI from "pixi.js"
import {View,Stage,Loader} from './app'
import {setStartUI} from './ui'
import {display} from './components'
import * as VConsole from 'vconsole'
if(config.GameConfig.isDev && config.click == 'tap'){
	let vcon = new VConsole();
}

document.body.appendChild(View);

//预加载素材
Loader.add(config.resourcesList)
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
             Stage.addChild(display.backImage);
             //显示背景
             //background.texture = PIXI.loader.resources['asstes/data/bgimage/title.jpg'].texture;
             display.BackImage = config.GameConfig.titleBackImage;
             //显示开始UI
             setStartUI(config.GameConfig.startButtonTexture,config.GameConfig.loadButtonTexture);

});
