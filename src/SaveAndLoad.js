const sl = {};
sl.save = function(slot){
	localStorage[slot] = JSON.stringify(gameStatus);
}
sl.load = function(slot){
	let temp = JSON.parse(localStorage[slot]);
	gameStatus = temp;
	scene.use(temp.scene);
}
