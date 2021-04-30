import { GameCanvas } from "../../engine/game-canvas";
import { Ghost } from "./ghost";

import ClydeGhostSkin from "./../../game/ressources/img/clyde.png";
import { Direction } from "../utilities/enums";


export class ClydeGhost extends Ghost {

    constructor(gameCanvas : GameCanvas, x : number, y : number) {
        super(gameCanvas, x, y, ClydeGhostSkin);
        this.init();
    }

    init() {
        this.currentDirection = Direction.Left;
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
