/*

/////////////////// NEW

var t  = new Game(1280, 720);

var l1 = new Layout();
l1.index = 3;





interface Sprite {
    create() : void;
    update() : void;
    delete() : void;
}

var sprite = new Sprite() {

    create: function() {

        Components.get<Camera>().Resize(1920, 1080).Scale(0.5);

    };
    update: function() {
        var cameraInfos = Components.get<Camera>().GetInfos();
        Components.get<Camera>().Transform((cameraInfos.size.width / 2) + (this.size.width / 2), (cameraInfos.size.height / 2) + (this.size.height / 2));
    };
    delete: function() {};
};

l1.gameObjects.add();


var s = new Sprite();
s.create = function() {};

class GameSprite implements Sprite {
    constructor() {}

    create(): void {
        throw new Error("Method not implemented.");
    }
    update(): void {
        throw new Error("Method not implemented.");
    }
    delete(): void {
        throw new Error("Method not implemented.");
    }
}

var gs = new GameSprite();
gs.create();



*/