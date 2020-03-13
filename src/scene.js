'use strict'
import {Howler,Howl} from 'howler';
import * as Component from './components';
import gameStatus from './main';
let playingBGM = null;
const model = {
  name:null,
  bgm:null,
  background:null,
  frontImage:null,
  characterName:null,
  dialog:null,
  nextScene:null,
  codeToRun:null,
  bgm:null
}
const list = {};
export  function add(n,bg,fi,ntd,dtd,ns,ctr,bgm){
  let newScene = Object.create(scene.model);
  newScene.name = n;;
  newScene.background = bg;
  newScene.frontImage = fi;
  newScene.characterName = ntd;
  newScene.dialog = dtd;
  newScene.nextScene = ns;
  newScene.codeToRun = ctr;
  if(bgm && bgm !== "none" && bgm !== "same"){
        newScene.bgm = new Howler({src:bgm});
    }else{
        newScene.bgm = null;
    }
  list[n] = newScene;
}
/*
scene.use = (target)=>{
  gameStatus.nowScene = target;
  UI.talk(target.nameToDisplay,target.dialogToDisplay);
  if(target.background != 'same'){
      UI.setBackground(target.background);
  }
  if(target.frontImage != 'same'){
    if(target.frontImage == 'none'){
      UI.hide(frontImage);
=======
  newScene.bgm = bgm;
  scene.list.push(newScene);
};
scene.use = (arg)=>{
    if(typeof arg === 'string'){
        for(let i = 0;i <= scene.list.length;i++){
            if(scene.list[i] === arg){
                gameStatus.nowScene = arg;
                UI.talk(scene.list[i].characterName,scene.list[i].dialogToDisplay);
                UI.setBackground(scene.list[i].background);
                UI.setFrontImage(scene.list[i].frontImage);
                if(scene.list[i].codeToRun){
                    scene.list[i].codeToRun();
                }
                return;
            } 
        }
    }else if(typeof arg === 'number'){
        let i = arg;
        UI.talk(scene.list[i].characterName,scene.list[i].dialogToDisplay);
        UI.setBackground(scene.list[i].background);
        UI.setFrontImage(scene.list[i].frontImage);
        if(scene.list[i].codeToRun){
            scene.list[i].codeToRun();
        }
>>>>>>> 37da9c4586ab5b7cc4d294902bcc3ff756d8b102
    }else{
        throw new Error("Wrong type of arg.It must be a number or string.");
    }
<<<<<<< HEAD
  }
  UI.setNextScene(target.nextScene);
  if(target.codeToRun){
    target.codeToRun();
  }
}
*/

export function use(s){
	if(typeof s !== typeof 'string')
		throw 'TypeError:target should be a String';
	console.log('Use scene ',s);
	let target = list[s];
    if(target.frontImage != null && target.frontImage != 'same' ){
        if(target.frontImage !== 'none'){
            UI.display.FrontImage.visible = false;
        }else{
            UI.display.FrontImage.visible = true;
            UI.display.FrontImage(target.frontImage);
        }
    }
    if(s.bgm){
        playingBGM.stop();
        playingBGM = s.bgm();
        playingBGM.play();
    }
	if(target.background != 'same')
		UI.display.BackImage(target.background);
	UI.display.Dialog({name:target.characterName,dialog:target.dialog});
	if(target.nextScene != null)
		UI.setNextScene(target.nextScene);
	if(typeof target.codeToRun === 'function')
		target.codeToRun();
	gameStatus.scene = target
}
  
//  gameStatus.nowScene = arg;
//  UI.talk(target.nameToDisplay,target.dialogToDisplay);
//  if(target.background != 'same'){
//      UI.setBackground(target.background);
//  }
//  if(target.frontImage != 'same'){
//    if(target.frontImage == 'none'){
//      UI.hide(frontImage);
//    }else{
//      UI.show(frontImage);
//        UI.setFrontImage(target.frontImage);
//    }
//  }
//  UI.setNextScene(target.nextScene);
//  if(target.codeToRun){
//    target.codeToRun();
//  }
