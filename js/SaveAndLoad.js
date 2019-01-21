const sl = {};
sl.save = (slot)=>{
  Object.defineProperty(localStorage,slot,{value:gameStatus,writeable:true});
}
