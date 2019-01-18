const UI = {};
UI.hide=(target)=>{
  target.visible=false;
};
UI.show = (target)=>{
  target.alpha = 100;
  target.visible = true;
};
UI.talk = (name,dialog) => {
  nameDisplayed.text = name;
  textInTalk.text = dialog;
};
UI.setBackground = (texture) => {
  background.texture = PIXI.loader.resources[texture].texture;
}
UI.setFrontImage = (texture) => {
  frontImage.texture = PIXI.loader.resources[texture].texture;
}
UI.setStartUI = (startButtonTexture,loadButtonTexture,targetScene) => {
  startButton.x = 300;
  startButton.y = 400;
  startButton.texture = PIXI.loader.resources[startButtonTexture].texture;
  loadButton.texture = PIXI.loader.resources[loadButtonTexture].texture;
  startButton.interactive = true;
  startButton.on('click', (event) => {
    app.stage.addChild(talkBar);
    app.stage.addChild(buttonBar);
    UI.hide(splashUIButton);
    scene.use(targetScene);
  });
  app.stage.addChild(splashUIButton);
}
