const sl = {};
sl.save = (slot)=>{
  localStorage[slot].scene = gameStatus.nowScene;
}
sl.load = (slot)=>{
  scene.use(localStorage[slot].scene);

}
