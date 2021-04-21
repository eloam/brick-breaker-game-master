import { GameCanvas } from "../../engine/game-canvas";
import {Sprite} from "../../engine/objects/sprite";
import {SpriteCanvasRenderingContext2D} from "../../engine/renderer/sprite-canvas-rendering-context-2d";
import { Direction } from "../utilities/enums";
import {PacGum} from "./pacgum";
import { PlayerScoreBoard } from "./player-score-board";
import {Wall} from "./wall";
import PacmanWakaWakaSoundEffect from '../ressources/sounds/PacmanWakaWakaSoundEffect.mp3';
import PacmanOpeningSongSoundEffect from '../ressources/sounds/PacmanOpeningSongSoundEffect.mp3';

export class PacMan extends Sprite {

    private dir : 'positive' | 'negative' = 'positive';
    private frame : number = 0;

    private speed = 2;
    private movementDirection: Direction = Direction.None;
    private nextMovementDirection: Direction = Direction.None;
    private precMovementDirection: Direction = Direction.None;

    private pacgumDestroySoundEffect: HTMLAudioElement;

    constructor(private gameCanvas: GameCanvas, x : number, y : number) {
        //super(x * 12 + 1, y * 12 + 1, 3 * 12 - 2, 3 * 12 - 2);
        super(x * 12 + 1, y * 12 + 1, 3 * 12 - 2, 3 * 12 - 2);
        //new Audio(PacmanOpeningSongSoundEffect).play();
        this.pacgumDestroySoundEffect = new Audio(PacmanWakaWakaSoundEffect);
        this.update();
        this.collide();
        this.commands();
        gameCanvas.sprites.add(this);
    }

    update() {
        this.onUpdate = function (renderer : SpriteCanvasRenderingContext2D) {

            if (this.frame === 0) {
                this.dir = 'positive';
            } else if (this.frame === 20) {
                this.dir = 'negative';
            }

            const fltOpen = this.frame / 20;


            let spriteDirection = 0;

    
            switch (this.movementDirection || this.precMovementDirection) {
                case Direction.Right:
                    spriteDirection = 0;
                    break;
                case Direction.Up:
                    spriteDirection = 0.5;
                    break;
                case Direction.Left:
                    spriteDirection = 1;
                    break;
                case Direction.Down:
                    spriteDirection = 1.5;
                    break;
                default:
                    spriteDirection = 0;
                    break;
            }


            renderer.arc(this.size.w / 2, this.size.w / 2, this.size.w / 2, (fltOpen * 0.2 - spriteDirection) * Math.PI, (2 - fltOpen * 0.2 - spriteDirection) * Math.PI);
            renderer.lineTo(this.size.w / 2, this.size.w / 2).closePath();
            renderer.fillStyle('#ff0').fill();
            renderer.strokeStyle('#000').stroke();


            this.frame = (this.dir === 'positive') ? this.frame + 1 : this.frame - 1;

            

            this.makeMovement();

            /*if (this.frame === 0) {
                console.log(`x: ${this.pos.x} | y: ${this.pos.y}`);
            }*/

            // this.debug(renderer);
        }
    }

    collide() {
        this.onCollide = function (sprite : Sprite) {
            if (sprite instanceof Wall) {
                this.rollbackMovement();
                this.precMovementDirection = this.movementDirection;
                this.movementDirection = Direction.None;
            }

            if (sprite instanceof PacGum) {
                (this.gameCanvas.sprites.list().filter(item => item instanceof PlayerScoreBoard)[0] as PlayerScoreBoard).incrementPlayerScore(10);
                this.getPacgumDestroySoundEffect();
                sprite.destroy();
            }
        }
    }

    getPacgumDestroySoundEffect() {

        if (this.pacgumDestroySoundEffect != null) {
            this.pacgumDestroySoundEffect.pause();
        }

        //this.pacgumDestroySoundEffect = new Audio(PacmanWakaWakaSoundEffect);
        this.pacgumDestroySoundEffect.playbackRate = 1.03;
        this.pacgumDestroySoundEffect.play();
        //this.pacgumDestroySoundEffect.loop = true;
    };

    rollbackMovement() {
        switch (this.movementDirection) {
            case Direction.Right:
                this.moveLeft();
                break;
            case Direction.Left:
                this.moveRight();
                break;
            case Direction.Up:
                this.moveDown();
                break;
            case Direction.Down:
                this.moveUp();
                break;
            default:
                break;
        }
    }

    makeMovement() {
        switch (this.movementDirection) {
            case Direction.Right:
                this.moveRight();
                break;
            case Direction.Left:
                this.moveLeft();
                break;
            case Direction.Up:
                this.moveUp();
                break;
            case Direction.Down:
                this.moveDown();
                break;
            default:
                break;
        }
    }

    commands() {
        document.addEventListener('keydown', e => {
            switch (e.key) {
                case 'ArrowRight':
                    if (this.isMagnetizedOnTheGrid()) {
                        this.movementDirection = Direction.Right;
                    } else {
                        this.nextMovementDirection = Direction.Right;
                    }
                    break;
                case 'ArrowLeft':
                    if (this.isMagnetizedOnTheGrid()) {
                        this.movementDirection = Direction.Left;
                    } else {
                        this.nextMovementDirection = Direction.Left;
                    }
                    break;
                case 'ArrowUp':
                    if (this.isMagnetizedOnTheGrid()) {
                        this.movementDirection = Direction.Up;
                    } else {
                        this.nextMovementDirection = Direction.Up;
                    }
                    break;
                case 'ArrowDown':
                    if (this.isMagnetizedOnTheGrid()) {
                        this.movementDirection = Direction.Down;
                    } else {
                        this.nextMovementDirection = Direction.Down;
                    }
                    break;
                default:
                    break;
            }
        });
    }


    moveRight() {
        this.pos.x += this.speed;
        this.checkNextMovement();
    }

    moveLeft() {
        this.pos.x -= this.speed;
        this.checkNextMovement();
    }

    moveUp() {
        this.pos.y -= this.speed;
        this.checkNextMovement();
    }

    moveDown() {
        this.pos.y += this.speed;
        this.checkNextMovement();
    }

    isMagnetizedOnTheGrid(): boolean {
        if (((this.pos.x % 12) - 1) === 0 && ((this.pos.y % 12) - 1) === 0) {
            return true;
        }

        return false;
    }

    checkNextMovement() {
        if (this.isMagnetizedOnTheGrid() && this.nextMovementDirection !== Direction.None) {
            this.movementDirection = this.nextMovementDirection;
            this.nextMovementDirection = Direction.None;
        }
    }

}
