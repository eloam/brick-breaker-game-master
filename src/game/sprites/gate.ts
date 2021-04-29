import { GameCanvas } from "../../engine/game-canvas";
import { Sprite } from "../../engine/objects/sprite";


export class Gate extends Sprite {

    private timerTicks = 180;

    constructor(private gameCanvas: GameCanvas, x : number, y : number) {
        super(x * 12, y * 12, 60, 36);

        this.update();
        gameCanvas.sprites.add(this);
    }

    update() {
        this.onUpdate = function (renderer) {
            renderer.moveTo(1, this.size.h / 3).lineTo(this.size.w - 1, this.size.h / 3).lineWidth(2).strokeStyle('white').stroke();
            this.timerTicks -= 1;

            if (this.timerTicks === 0) {
                this.destroy();
            }

            //this.debug(renderer);
        };
    }
}