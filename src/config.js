
export var click;
if(navigator.userAgent.match(/.*Mobile.*/)){
    click = 'tap';
}else
    click = 'click';
console.info('Click type:%s',click);
export const GameConfig = {
	isDev:true, //是否处于开发模式
	name:"", //游戏名
	author:"", //作者
	ver:"", //版本
	titleBackImage:'./asstes/data/image/bgimage/title.jpg', //标题页背景
	startButtonTexture:'./asstes/data/image/button/start.png',
	loadButtonTexture:'./asstes/data/image/button/start.png',
	dialogBarTexture:'/asstes/data/image/frame.png''

};
export const sysconfig = {
	ver:'0.1',//框架版本
};
export const resourcesList=[
	'./asstes/data/image/bgimage/title.jpg',
	'./asstes/data/image/button/start.png',
	'./asstes/data/image/frame.png',
	'./asstes/data/image/frontimage/preview.png'
];//素材列表
