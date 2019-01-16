const scene = {};
scene.create = (bg){
  let newScene = Object.create(sceneModel);
  PIXI.loader.add(bg).load(()=>{
    newScene.background = PIXI.loader.resources[bg].texture;
  });
  return newScene;
}
