const sl = {};
sl.save = (slot)=>{
  // BUG: 写不进数据
  localStorage[slot].scene = gameStatus.nowScene;
}
sl.load = (slot)=>{
  scene.use(localStorage[slot].scene);

}
