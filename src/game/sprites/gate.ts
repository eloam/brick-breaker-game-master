import { GameCanvas } from "../../engine/game-canvas";
import { Sprite } from "../../engine/objects/sprite";


export class Gate extends Sprite {

    constructor(private gameCanvas: GameCanvas, x : number, y : number) {
        super(x * 12, y * 12, 60, 24);

        this.update();
        gameCanvas.sprites.add(this);
    }

    update() {
        this.onUpdate = function (renderer) {
            renderer.moveTo(1, this.size.h / 2).lineTo(this.size.w - 1, this.size.h / 2).lineWidth(2).strokeStyle('white').stroke();

            //this.debug(renderer);
        };
    }
}