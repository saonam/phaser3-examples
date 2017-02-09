var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    },
    width: 800,
    height: 600
};

var game = new Phaser.Game(config);
var iter = 0;
var image;
var horizontalCamera;
var verticalCamera;
var circularCamera;

function preload() {

    this.load.image('CherilPerils', 'assets/tests/camera/CherilPerils.png');
    this.load.image('clown', 'assets/sprites/clown.png');

}

function create() {

    image = this.add.image(0, 0, 'CherilPerils');
    this.sys.mainCamera.width = 400;
    this.sys.mainCamera.height = 300;
    horizontalCamera = this.sys.addCamera(400, 0, 400, 300);
    verticalCamera = this.sys.addCamera(0, 300, 400, 300);
    circularCamera = this.sys.addCamera(400, 300, 400, 300);
    for (var i = 0; i < 1000; ++i)
    {
        this.add.image(Math.random() * 1000, Math.random() * 1240, 'clown');
    }
}
function update()
{
    var halfWidth = image.texture.source[0].width / 2;
    var quarterWidth = halfWidth / 2;
    var halfHeight = image.texture.source[0].height / 2;
    var quarterHeight = halfHeight / 2;

    horizontalCamera.scrollX = (halfWidth - quarterWidth + (Math.cos(iter) * quarterWidth))|0;
    verticalCamera.scrollY = (halfHeight - quarterHeight + (Math.sin(iter) * quarterHeight))|0;
    circularCamera.scrollX = (halfWidth - quarterWidth + (Math.cos(iter) * quarterWidth))|0;
    circularCamera.scrollY = (halfHeight - quarterHeight + (Math.sin(iter) * quarterHeight))|0;
    iter += 0.02;
}
