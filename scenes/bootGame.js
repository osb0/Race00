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
	}

	create(){
		this.scene.start("PlayGame");
	}
}