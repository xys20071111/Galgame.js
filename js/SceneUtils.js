const scene = {};
scene.model = {
  name:null,
  background:null,
  frontImage:null,
  characterName:null,
  dialog:null,
  nextScene:null,
  codeToRun:null,
}
scene.list = [];
scene.create = (n,bg,fi,ntd,dtd,ns,ctr)=>{
  let newScene = Object.create(sceneModel);
  newScene.name = n
  newScene.background = bg;
  newScene.frontImage = fi;
  newScene.characterName = ntd;
  newScene.dialogToDisplay = dtd;
  newScene.nextScene = ns;
  newScene.codeToRun = ctr;
  scene.list.push(newScene);
}
scene.use = (arg)=>{
  for(let i = 0;i <= scene.list.length;i++){
   if(scene.list[i] == arg){} 
  }
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
