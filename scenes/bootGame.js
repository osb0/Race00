class bootGame extends Phaser.Scene{
	constructor(){
		super("BootGame");
	}

	preload(){
		this.load.image("background", "assets/sprites/bg.png");
		this.load.image("enemy", "assets/sprites/car-enemy.png");
		this.load.image("enemy2", "assets/sprites/car-enemy2.png");
		this.load.image("player", "assets/sprites/car-player.png");
		this.load.image("fuel", "assets/sprites/fuel.png");
		this.load.image("road", "assets/sprites/road.png");
		this.load.image("tree", "assets/sprites/tree.png");
		this.load.image("panel", "assets/sprites/ui.png");

		this.load.image("font", "assets/sprites/ui-font.png");

		this.load.audio("music", "assets/sounds/leap.WAV");
		this.load.audio("carstart", "assets/sounds/carstart.wav");
		this.load.audio("fuel", "assets/sounds/fuel.wav");
		this.load.audio("fuelend", "assets/sounds/fuelend.wav");
		this.load.audio("end", "assets/sounds/end.wav");
	}

	create(){
		this.scene.start("PlayGame");
	}
}