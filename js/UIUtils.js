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
    //组建游戏界面
    app.stage.addChild(talkBar);
    app.stage.addChild(buttonBar);
    talkBarFrame.texture = PIXI.loader.resources[/* 对话框图片 */resourcesList[2]].texture;
    //设置组件位置
    nameDisplayed.x = 100;
    nameDisplayed.y = 25;
    textInTalk.x = 30;
    textInTalk.y = 65;
    talkBar.y = 310;

    UI.hide(splashUIButton);
    scene.use(targetScene);
  });
  app.stage.addChild(splashUIButton);
}
