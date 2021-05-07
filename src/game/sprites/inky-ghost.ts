import { GameCanvas } from "../../engine/game-canvas";
import { Ghost } from "./ghost";

import InkyGhostSkin from "./../../game/ressources/img/inky.png";
import { Direction } from "../utilities/enums";
import { PacMan } from "./pacman";
import { Sprite } from "../../engine/objects/sprite";


export class InkyGhost extends Ghost {

    private clock = 1000;

    constructor(gameCanvas : GameCanvas, x : number, y : number) {
        super(gameCanvas, x, y, InkyGhostSkin);
        this.init();
    }

    init() {
        this.currentDirection = Direction.Right;
    }

    ai() {
        if (this.clock > 0) {
            super.ai();
            this.clock -= 1;
        } else {
            if (this.canChangeDirection() || !this.canMove(this.currentDirection)) {

                // Liste des directions possibles
                const directions: Array<Direction> = [];
    
                // PacMan
                const pacman: Sprite = this.gameCanvas.sprites.list().filter(sprite => sprite instanceof PacMan)[0];

                if (pacman) {
                    // On detecte les directions possibles
                    this.canMove(Direction.Left) && this.pos.x > pacman.pos.x && directions.push(Direction.Left);
                    this.canMove(Direction.Right) && this.pos.x < pacman.pos.x && directions.push(Direction.Right);
                    this.canMove(Direction.Up) && this.pos.y > pacman.pos.y && directions.push(Direction.Up);
                    this.canMove(Direction.Down) && this.pos.y < pacman.pos.y && directions.push(Direction.Down);
                }
    

                this.currentDirection = this.getNewDirection(directions.length > 1 ? directions : this.getPossibleMoveDirections());
            }
    
            if (this.canMove(this.currentDirection)) {
                this.makeMovement(this.currentDirection);
            }
        }
    }
}
