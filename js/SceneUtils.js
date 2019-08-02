const scene = {};
scene.model = {
  name:null,
  background:null,
  frontImage:null,
  characterName:null,
  dialog:null,
  nextScene:null,
  codeToRun:null,
  bgm:null
}
scene.list = {};
scene.create = (n,bg,fi,ntd,dtd,ns,ctr)=>{
  let newScene = Object.create(sceneModel);
  newScene.name = n
  newScene.background = bg;
  newScene.frontImage = fi;
  newScene.characterName = ntd;
  newScene.dialog = dtd;
  newScene.nextScene = ns;
  newScene.codeToRun = ctr;
  scene.list[n] = newScene;
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
    }else{
      UI.show(frontImage);
        UI.setFrontImage(target.frontImage);
    }
  }
  UI.setNextScene(target.nextScene);
  if(target.codeToRun){
    target.codeToRun();
  }
}
*/
scene.use = function(target){
	if(typeof target !== typeof 'string')
		throw 'TypeError target should be a String';
	let target = scene.list[target];
	UI.display.FrontImage = target.frontImage;
	UI.display.BackImage = target.background;
	UI.display.Name = target.characterName;
	UI.display.Dialog = target.dialog;
	UI.setNextScene(target.nextScene);
	if(typeof target.codeToRun === 'function')
		target.codeToRun();
}
