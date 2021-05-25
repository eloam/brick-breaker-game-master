import { GameCanvas } from "../../engine/game-canvas";
import { Sprite } from "../../engine/objects/sprite";

export class SuperPacGum extends Sprite {

    private colorStart: number = 255;
    private colorEnd: number = 128;
    private colorDelta: number = this.colorStart - this.colorEnd;

    private blinkingTimerInitial: number = 30;
    private blinkingTimer = this.blinkingTimerInitial;

    constructor(private gameCanvas: GameCanvas, x : number, y : number) {
        super(x * 12 * 2, y * 12 * 2, 12, 12);

        this.update();
        gameCanvas.sprites.add(this);
    }

    update() {
        this.onUpdate = function (renderer) {
            
            let currentColor!: number;

            if (this.blinkingTimer > 0) {
                currentColor = this.colorEnd + (this.colorDelta / this.blinkingTimerInitial) * this.blinkingTimer;
            } else {
                currentColor = this.colorEnd + (this.colorDelta / this.blinkingTimerInitial) * (this.blinkingTimer * -1);
            }
     

            if (this.blinkingTimer !== this.blinkingTimerInitial * -1) {
                const colorHexRounded: number = Math.round(currentColor);
                const fillColorHex: string = `rgb(${colorHexRounded},${colorHexRounded},${colorHexRounded})`;
                renderer.fillStyle(fillColorHex);
                renderer.beginPath().arc(6, 6, 6, 0, 2 * Math.PI, false).fill().closePath();     
                this.blinkingTimer -= 1;
            } else {
                this.blinkingTimer = this.blinkingTimerInitial
            }

            //this.debug(renderer);
        };



  
    }
}
