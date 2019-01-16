const UI = {};
UI.hide=(target)=>{
  target.visible=false;
};
UI.show = (target)=>{
  target.alpha = 100;
  target.visible = true;
};
UI.useScene = (scene)=>{
  background.texture = scene.background;
}
UI.talk = ()={
  if(arguments.length == 1){
    textInTalk.text = arguments[0];
  }else{
    nameDisplayed.text = arguments[0];
    textInTalk.text = arguments[1];
  }
};
UI.text = (text)=>{
  textInTextBar.text = text;
}
