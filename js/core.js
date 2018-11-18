function setupSplendUI(img){
    PIXI.loader.add(img).add(["./assest/button/start/start.png",
    "./assest/button/start/load.png"]).load(setup);
    function setup() {
        GameUI.background = new PIXI.Sprite(PIXI.loader.resources[img].texture);
        app.stage.addChild(GameUI.background);
        SplendUI.startButton = new PIXI.Sprite(PIXI.loader.resources["./assest/button/start/start.png"].texture);
        SplendUI.loadButton = new PIXI.Sprite(PIXI.loader.resources["./assest/button/start/load.png"].texture);
        SplendUI.startButton.interactive = true;
        SplendUI.startButton.on('tap', (event) => {});
    }
}