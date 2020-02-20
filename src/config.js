export var click;
if(navigator.userAgent.match(/.*Mobile.*/))
	click = 'tap';
else
	click = 'click';
console.info('Click type:%s',click);
export const GameConfig = {
	isDev:true,
	name:"",
	author:"",
	ver:"",
	titleBackImage:'./asstes/data/image/bgimage/title.jpg',
	startScene:'test',
	startButtonTexture:'./asstes/data/image/button/start.png',
	loadButtonTexture:'./asstes/data/image/button/start.png'

};
export const sysconfig = {
	ver:'0.1',
};
export const resourcesList=[
	'./asstes/data/image/bgimage/title.jpg',
	'./asstes/data/image/button/start.png',
	'./asstes/data/image/frame.png',
	'./asstes/data/image/frontimage/preview.png'
];
