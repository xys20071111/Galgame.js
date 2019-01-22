const UI = {};
UI.hide=(target)=>{
  target.alpha = 0;
  target.visible=false;
};
UI.show = (target)=>{
  target.alpha = 100;
  target.visible = true;
};
UI.fadeIn = (target) => {
  target.visible = true;
  for(let i = 0;i<=100;i++){
    target.alpha = i;
  }
}
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
    app.stage.addChild(frontImage);
    app.stage.addChild(talkBar);
    app.stage.addChild(buttonBar);
    frontImage.x = 200;
    frontImage.y = 100;
    talkBarFrame.texture = PIXI.loader.resources[/* 对话框图片 */'asstes/data/image/frame.png'].texture;
    //设置组件位置
    nameDisplayed.x = 100;
    nameDisplayed.y = 25;
    textInTalk.x = 30;
    textInTalk.y = 65;
    talkBar.y = 310;
    UI.hide(splashUIButton);
    scene.use(/*第一个场景*/test);
  });
  app.stage.addChild(splashUIButton);
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
