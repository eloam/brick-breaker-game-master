import {GameCanvas} from "../../engine/game-canvas";
import {Sprite} from "../../engine/objects/sprite";
import {SpriteCanvasRenderingContext2D} from "../../engine/renderer/sprite-canvas-rendering-context-2d";


export class PlayerScoreBoard extends Sprite {

    private PlayerScore: number = 0;

    constructor(private gameCanvas: GameCanvas, x : number, y : number) {
        super(x * 12, y * 12, 10 * 12, 3 * 12);
        this.update();
        gameCanvas.sprites.add(this);
    }

    update() {
        this.onUpdate = function (renderer : SpriteCanvasRenderingContext2D) {
            renderer.fillStyle('#fff').font('20px serif').fillText(`Score : ${this.PlayerScore}`, 0, 20, 500);
        }
    }

    setPlayerScore(score: number) {
        this.PlayerScore = score;
    }

    incrementPlayerScore(score: number) {
        this.PlayerScore += score;
    }
}
