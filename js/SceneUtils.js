const scene = {};
scene.create = (bg,fi,ntd,dtd,ns)=>{
  let newScene = Object.create(sceneModel);
  newScene.background = PIXI.utils.TextureCache[bg];
  newScene.frontImage = PIXI.utils.TextureCache[fi];
  newScene.nameToDisplay = ntd;
  newScene.dialogToDisplay = dtd;
  newScene.nextScene = ns;
  return newScene;
}
scene.use = (target)=>{
  UI.talk(target.nameToDisplay,target.dialogToDisplay);
  UI.setBackground(target.background);
  UI.setFrontImage(target.frontImage);
}
