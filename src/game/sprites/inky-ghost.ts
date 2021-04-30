import { GameCanvas } from "../../engine/game-canvas";
import { Ghost } from "./ghost";

import InkyGhostSkin from "./../../game/ressources/img/inky.png";
import { Direction } from "../utilities/enums";


export class InkyGhost extends Ghost {

    constructor(gameCanvas : GameCanvas, x : number, y : number) {
        super(gameCanvas, x, y, InkyGhostSkin);
        this.init();
    }

    init() {
        this.currentDirection = Direction.Right;
    }

    ai() {
        if (this.canChangeDirection() || !this.canMove(this.currentDirection)) {

            // Liste des directions possibles
            const directions: Array<Direction> = this.getPossibleMoveDirections();

            //if (directions[Direction.Left] != undefined && this.gameCanvas.sprites.)

            this.currentDirection = this.getNewDirection();
        }

        if (this.canMove(this.currentDirection)) {
            this.makeMovement(this.currentDirection);
        }
    }
}
