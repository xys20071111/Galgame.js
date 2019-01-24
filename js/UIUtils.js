const UI = {};
UI.hide=(target)=>{
  target.alpha = 0;
  target.visible=false;
};
UI.show = (target)=>{
  target.alpha = 100;
  target.visible = true;
};
// UI.fadeIn = (target) => {
//   target.visible = true;
//   for(let i = 0;i<=1;i+=0.0001){
//     setTimeout(()=>{    target.alpha = i;},5000);
//
//   }
// }
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
    UI.setupGameUI('asstes/data/image/frame.png',test);
  });
  app.stage.addChild(splashUIButton);
}
UI.setupGameUI = (framePic,startScene) => {
  UI.hide(splashUIButton);
  //组建游戏界面
  app.stage.addChild(frontImage);
  app.stage.addChild(talkBar);
  app.stage.addChild(buttonBar);
  frontImage.x = 100;
  frontImage.y = 45;
  frontImage.width = 500;
  frontImage.height = 600;
  talkBarFrame.texture = PIXI.loader.resources[framePic].texture;
  //设置组件位置
  nameDisplayed.x = 100;
  nameDisplayed.y = 25;
  textInTalk.x = 30;
  textInTalk.y = 65;
  talkBar.y = 310;
  scene.use(startScene);
}
UI.setNextScene = (nextScene)=>{
  talkBar.on('click',()=>{
    scene.use(nextScene);
  });
  background.on('click',()=>{
    scene.use(nextScene);
  });
  frontImage.on('click',()=>{
    scene.use(nextScene);
  });
}
