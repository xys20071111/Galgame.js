const sl = {};
sl.save = (slot)=>{
  Object.defineProperty(localStorage,slot,{value:gameStuate,writeable:true});
}
