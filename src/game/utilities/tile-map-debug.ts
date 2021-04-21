import { GameCanvas } from "../../engine/game-canvas";
import { Sprite } from "../../engine/objects/sprite";

export class TileMapDebug extends Sprite {

    constructor(private gameCanvas: GameCanvas, private tileMapSize: number) {
        super(gameCanvas.width, gameCanvas.height);
        this.update();
        gameCanvas.sprites.add(this);
    }

    update() {
        this.onUpdate = function (renderer) {

            renderer.strokeStyle('blue').lineWidth(1);

            for (let index = 0; index < this.gameCanvas.width; index = index + this.tileMapSize) {
                renderer.beginPath().moveTo(index, 0).lineTo(index, this.gameCanvas.height).stroke().closePath();
            }

            for (let index = 0; index < this.gameCanvas.height; index = index + this.tileMapSize) {
                renderer.beginPath().moveTo(0, index).lineTo(this.gameCanvas.width, index).stroke().closePath();
            }
        };
    }

}