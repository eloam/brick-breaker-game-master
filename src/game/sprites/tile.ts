import { Sprite } from "../../engine/objects/sprite";


export class Tile extends Sprite {

    constructor(x : number, y : number) {
        super(x * 12, y * 12, 12, 12);

        this.update();
    }

    update() {
        this.onUpdate = function (renderer) {
            this.debug(renderer, 1);
        };
    }
}
