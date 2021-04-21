import { GameCanvas } from "../../engine/game-canvas";
import { Sprite } from "../../engine/objects/sprite";

export class PacGum extends Sprite {

    constructor(private gameCanvas: GameCanvas, x : number, y : number) {
        super(x * 12 * 2, y * 12 * 2, 12, 12);

        this.update();
        gameCanvas.sprites.add(this);
    }

    update() {
        this.onUpdate = function (renderer) {
            renderer.fillStyle('#fff');
            renderer.beginPath().arc(6, 6, 3, 0, 2 * Math.PI, false).fill().closePath();

            //this.debug(renderer);
        };
    }
}
