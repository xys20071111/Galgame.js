const scene = {};
scene.create = (bg,fi,ntd,dtd,ns,ctr)=>{
  let newScene = Object.create(sceneModel);
  newScene.background = bg;
  newScene.frontImage = fi;
  newScene.nameToDisplay = ntd;
  newScene.dialogToDisplay = dtd;
  newScene.nextScene = ns;
  newScene.codeToRun = ctr;
  return newScene;
}
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
