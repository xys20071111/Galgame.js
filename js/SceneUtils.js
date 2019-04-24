const scene = {};
scene.model = {
  name:null,
  bgm:null,
  background:null,
  frontImage:null,
  characterName:null,
  dialog:null,
  nextScene:null,
  codeToRun:null,
}
scene.list = [];
scene.create = (n,bg,fi,ntd,dtd,ns,ctr,bgm)=>{
  let newScene = Object.create(sceneModel);
  newScene.name = n
  newScene.background = bg;
  newScene.frontImage = fi;
  newScene.characterName = ntd;
  newScene.dialogToDisplay = dtd;
  newScene.nextScene = ns;
  newScene.codeToRun = ctr;
  newScene.bgm = bgm;
  scene.list.push(newScene);
}
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
    }else{
        throw new Error("Wrong type of arg.It must be a number or string.");
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
}
