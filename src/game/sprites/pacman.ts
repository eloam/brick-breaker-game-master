import { GameCanvas } from "../../engine/game-canvas";
import { Sprite } from "../../engine/objects/sprite";
import { SpriteCanvasRenderingContext2D } from "../../engine/renderer/sprite-canvas-rendering-context-2d";
import { Direction } from "../utilities/enums";
import { PacGum } from "./pacgum";
import { PlayerScoreBoard } from "./player-score-board";
import { Wall } from "./wall";
import { Gate } from "./gate";
import { Ghost } from "./ghost";

import PacmanWakaWakaSoundEffect from '../ressources/sounds/PacmanWakaWakaSoundEffect.mp3';
import PacmanOpeningSongSoundEffect from '../ressources/sounds/PacmanOpeningSongSoundEffect.mp3';
import PacmanDeathSoundEffect from '../ressources/sounds/pacman_death.mp3';
import { SuperPacGum } from "./super-pacgum";

export class PacMan extends Sprite {

    private dir : 'positive' | 'negative' = 'positive';
    private frame : number = 0;

    private speed = 3;
    private playerscore!: PlayerScoreBoard

    private spriteOrientation: Direction = Direction.None;
    private currentDirection: Direction = Direction.None;
    private nextDirection: Direction = Direction.None;

    private nextDirectionTimer: number = 0;

    private pacgumDestroySoundEffect: HTMLAudioElement;

    constructor(private gameCanvas: GameCanvas, x : number, y : number) {
        super(x * 12 + 1, y * 12 + 1, 3 * 12 - 2, 3 * 12 - 2);

        new Audio(PacmanOpeningSongSoundEffect).play();
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

            renderer.arc(this.size.w / 2, this.size.w / 2, this.size.w / 2, (fltOpen * 0.2 - this.getSpriteOrientation()) * Math.PI, (2 - fltOpen * 0.2 - this.getSpriteOrientation()) * Math.PI);
            renderer.lineTo(this.size.w / 2, this.size.w / 2).closePath();
            renderer.fillStyle('#ff0').fill();
            renderer.strokeStyle('#000').stroke();


            this.frame = (this.dir === 'positive') ? this.frame + 1 : this.frame - 1;

            

            this.makeMovement();

            if (this.nextDirectionTimer > 0) {
                this.nextDirectionTimer -= 1;
            }
        }
    }


    canMove(direction : Direction): Boolean { 
        // Liste de tous les murs du niveau
        const wallItems = this.gameCanvas.sprites.list().filter(item => item instanceof Wall || item instanceof Gate);

        // Clone de l'objet
        let currentSprite: Sprite = new Sprite(this.pos.x, this.pos.y, this.size.w, this.size.h);

        switch (direction) {
            case Direction.Up: currentSprite.pos.y -= this.speed;
                break;
            case Direction.Down: currentSprite.pos.y += this.speed;
                break;
            case Direction.Left: currentSprite.pos.x -= this.speed;
                break;
            case Direction.Right: currentSprite.pos.x += this.speed;
                break;
            default:
                break;
        }

        let index: number = 0;
        let finded: boolean = false;

        while (index < wallItems.length && ! finded) {
            finded = this.gameCanvas.sprites.checkColliders(currentSprite, wallItems[index]);
            index++;
        }

        return ! finded;
    }


    collide() {
        this.onCollide = function (sprite : Sprite) {
            if (sprite instanceof Wall) {
                this.currentDirection = Direction.None;
                this.nextDirection = Direction.None;
                this.nextDirectionTimer = 0;
            }

            if (sprite instanceof PacGum || sprite instanceof SuperPacGum) {

                if (this.playerscore == undefined) {
                    this.playerscore = this.gameCanvas.sprites.list().filter(item => item instanceof PlayerScoreBoard)[0] as PlayerScoreBoard;
                }

                if (sprite instanceof PacGum) {
                    this.playerscore.incrementPlayerScore(10);
                } else {
                    this.playerscore.incrementPlayerScore(50);
                }
                this.getPacgumDestroySoundEffect();
                sprite.destroy();


                var pacgumCount = this.gameCanvas.sprites.list().filter(item => item instanceof PacGum).length;
                console.log(pacgumCount);
                if (pacgumCount == 1) {
                    console.log('You Win !');
                    this.destroy();
                }
            }

            if (sprite instanceof Ghost) {
                new Audio(PacmanDeathSoundEffect).play();
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

    commands() {
        document.addEventListener('keydown', e => {
            switch (e.key) {
                case 'ArrowRight':
                    this.setDirection(Direction.Right);
                    break;
                case 'ArrowLeft':
                    this.setDirection(Direction.Left);
                    break;
                case 'ArrowUp':
                    this.setDirection(Direction.Up);
                    break;
                case 'ArrowDown':
                    this.setDirection(Direction.Down);
                    break;
                default:
                    break;
            }
        });
    }

    setDirection(value: Direction) {

        if (this.canMove(value)) {
            this.currentDirection = value;
            this.spriteOrientation = value;
        } else {
            this.nextDirection = value;
            this.nextDirectionTimer = 30;
        }

    }

    getSpriteOrientation() {

        let orientation: number;

        switch (this.spriteOrientation) {
            case Direction.Right:
                orientation = 0;
                break;
            case Direction.Up:
                orientation = 0.5;
                break;
            case Direction.Left:
                orientation = 1;
                break;
            case Direction.Down:
                orientation = 1.5;
                break;
            default:
                orientation = 0;
                break;
        }

        return orientation;
    }

    makeMovement() {

        if (this.nextDirection !== Direction.None && this.nextDirectionTimer > 0 && this.canMove(this.nextDirection)) {
            this.currentDirection = this.nextDirection;
            this.spriteOrientation = this.currentDirection;
            this.nextDirection = Direction.None;
        }

        if (this.currentDirection !== Direction.None && this.canMove(this.currentDirection)) {
            this.move(this.currentDirection);
        }
    }

    move(value: Direction) {
        switch (value) {
            case Direction.Right:
                this.moveRight();
                break;
            case Direction.Up:
                this.moveUp();
                break;
            case Direction.Left:
                this.moveLeft();
                break;
            case Direction.Down:
                this.moveDown();
                break;
            default:
                break;
        }
    }

    moveRight() {
        this.pos.x += this.speed;
    }

    moveLeft() {
        this.pos.x -= this.speed;
    }

    moveUp() {
        this.pos.y -= this.speed;
    }

    moveDown() {
        this.pos.y += this.speed;
    }

}
