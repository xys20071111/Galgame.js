"use strict"
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
  //设置开始按钮位置
  startButton.x = 300; 
  startButton.y = 400;
  //设置开始按钮材质
  startButton.texture = PIXI.loader.resources[startButtonTexture].texture;
  loadButton.texture = PIXI.loader.resources[loadButtonTexture].texture;
  startButton.interactive = true;
  startButton.on('click', (event) => {
    //UI.setupGameUI(底下那个框的材质,第一个场景的名称)
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
UI.crateButton = (bg,x,y,onClick)=>{
    let newButton = new PIXI.Sprite(PIXI.loader.resources[bg].texture);
    newButton.x = x;
    newButton.y = y;
    newButton.interactive = true;
    newButton.on('click',onClick);
    app.stage.addChild(newButton);
    return newButton;
};