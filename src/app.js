import * as PIXI from "pixi.js";
const app = new PIXI.Application({height:600,width:800,backgroundColor:0xffffff});
const {View,Stage,Loader} = app.view;
export {View,Stage,Loader};