function setupSplendUI(img){
    PIXI.loader.add(img).load(setup);
    function setup() {
        SplendUI.background = new PIXI.Sprite(PIXI.loader.resources[img].texture);
        app.stage.addChild(SplendUI.background);
    }
}