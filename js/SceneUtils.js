const scene = {};
scene.create = (bg,fi,ntd,dtd,ns)=>{
  let newScene = Object.create(sceneModel);
  newScene.background = bg;
  newScene.frontImage = fi;
  newScene.nameToDisplay = ntd;
  newScene.dialogToDisplay = dtd;
  newScene.nextScene = ns;
  return newScene;
}
scene.use = (target)=>{
  nowScene = target;
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
  talkBar.on('click',()=>{
    scene.use(target.nextScene);
  });
  background.on('click',()=>{
    scene.use(target.nextScene);
  });
  frontImage.on('click',()=>{
    scene.use(target.nextScene);
  });
}
