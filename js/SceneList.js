//先进先出
/*顶端*/
//const 场景名 = scene.create(背景[与上一个场景相同时用'same'],立绘[与上一个场景相同时用'same',没有用'none'],角色名，对话内容,下一个场景的名称,在这个场景里运行的js代码)
const test2 = scene.create('same','none','aaa','aaaaaaaaaaaaaaaaaaaaaAAAAAAAAAAAAA',null,()=>{/*UI.fadeIn(background)*/});
const test = scene.create('asstes/data/image/bgimage/title.jpg','asstes/data/image/frontimage/preview.png','test','test',test2,()=>{});
/*底端*/
