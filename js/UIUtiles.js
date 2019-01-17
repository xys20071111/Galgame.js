const UI = {};
UI.hide=(target)=>{
  target.visible=false;
};
UI.show = (target)=>{
  target.alpha = 100;
  target.visible = true;
};
UI.talk = (name,dialog)={
  nameDisplayed.text = name;
  textInTalk.text = dialog;
};
UI.text = (text)=>{
  textInTextBar.text = text;
}
UI.setBackground = (texture) => {
  background.texture = texture;
}
UI.setFrontImage = (texture) => {
  frontImage.texture = texture;
}
