import { GameCanvas } from "../../engine/game-canvas";
import { Ghost } from "./ghost";

import PinkyGhostSkin from "./../../game/ressources/img/pinky.png";
import { Direction } from "../utilities/enums";
import { PacMan } from "./pacman";
import { Sprite } from "../../engine/objects/sprite";


export class PinkyGhost extends Ghost {

    //private clock = 1000;
    //private pacman!: Sprite;

    constructor(gameCanvas : GameCanvas, x : number, y : number) {
        super(gameCanvas, x, y, PinkyGhostSkin);
        this.init();
    }

    init() {
        this.currentDirection = Direction.Left;
        //this.pacman = this.gameCanvas.sprites.list().filter(sprite => sprite instanceof PacMan)[0];
    }

    /*ai() {
        if (this.clock > 0) {
            super.ai();
            this.clock -= 1;
        } else {
            if (this.canChangeDirection() || !this.canMove(this.currentDirection)) {

                // Liste des directions possibles
                const directions: Array<Direction> = [];
    
                // PacMan
    
                // On detect les directions possibles
                this.canMove(Direction.Left) && this.pos.x > this.pacman.pos.x && directions.push(Direction.Left);
                this.canMove(Direction.Right) && this.pos.x < this.pacman.pos.x && directions.push(Direction.Right);
                this.canMove(Direction.Up) && this.pos.y > this.pacman.pos.y && directions.push(Direction.Up);
                this.canMove(Direction.Down) && this.pos.y < this.pacman.pos.y && directions.push(Direction.Down);
    
                this.currentDirection = this.getNewDirection(directions.length > 0 ? directions : this.getPossibleMoveDirections());
            }
    
            if (this.canMove(this.currentDirection)) {
                this.makeMovement(this.currentDirection);
            }
        }
    }*/
}
