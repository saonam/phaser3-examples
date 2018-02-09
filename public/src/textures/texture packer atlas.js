var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.path = 'assets/atlas/';

    this.load.atlas('sprites', 'tp3test.png', 'tp3test.json');
}

function create ()
{
    this.add.image(150, 100, 'sprites', 'atari130xe.png');
    this.add.image(200, 300, 'sprites', 'elephant.png');
    this.add.image(500, 200, 'sprites', 'exocet_spaceman.png');
}
