import { GameCanvas } from "../../engine/game-canvas";
import { Ghost } from "./ghost";

import BlinkyGhostSkin from "./../../game/ressources/img/blinky.png";
import { Direction } from "../utilities/enums";


export class BlinkyGhost extends Ghost {

    constructor(gameCanvas : GameCanvas, x : number, y : number) {
        super(gameCanvas, x, y, BlinkyGhostSkin);
        this.init();
    }

    init() {
        this.currentDirection = Direction.Right;
    }

    //ai() {
        /*if (this.canChangeDirection() || !this.canMove(this.currentDirection)) {
            this.currentDirection = this.getNewDirection();
        }

        if (this.canMove(this.currentDirection)) {
            this.makeMovement(this.currentDirection);
        }*/
    //}
}
