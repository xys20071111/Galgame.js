import * as PIXI from "pixi.js";
const app = new PIXI.Application({height:600,width:800,backgroundColor:0xffffff});
const View = app.view;
const Stage = app.stage;
const Loader = app.loader
export {View,Stage,Loader};