var click = 'click';
if(!!navigator.userAgent.match(/AppleWebKit.*Mobile.*/))
	click = 'tap';
console.info('Click type:%s',click);
const user_config = {
    name:"",
    author:"",
    ver:"",
};
const config = {
    ver:'0.1',
};
const resourcesList=[
  'asstes/data/image/bgimage/title.jpg',
  'asstes/data/image/button/start.png',
  'asstes/data/image/frame.png',
  'asstes/data/image/frontimage/preview.png'
];
