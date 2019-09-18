var game;

var gameOptions = {
	width:320,
	height:200,
	savedData: "Race00Score",
};

window.onload = function(){
	game = new Phaser.Game({
		width: gameOptions.width,
		height: gameOptions.height,
		backgroundColor: 0x000000,
		scene: [bootGame, playGame],
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});

	window.focus();
}