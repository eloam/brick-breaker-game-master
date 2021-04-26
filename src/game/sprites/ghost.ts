import {GameCanvas} from "../../engine/game-canvas";
import {Sprite} from "../../engine/objects/sprite";
import {SpriteCanvasRenderingContext2D} from "../../engine/renderer/sprite-canvas-rendering-context-2d";
import {Direction} from "../utilities/enums";
import {Wall} from "./wall";
import {PacMan} from "./pacman";

export class Ghost extends Sprite {

    private speed = 2;
    private currentDirection : Direction = Direction.None;

    private inky : HTMLImageElement;

    constructor(private gameCanvas : GameCanvas, x : number, y : number, skin: any) {
        super(x * 12 + 1, y * 12 + 1, 3 * 12 - 2, 3 * 12 - 2);

        this.inky = new Image();
        this.inky.src = skin;

        this.update();
        this.collide();

        this.currentDirection = Direction.Up;

        // this.commands();
        gameCanvas.sprites.add(this);
    }

    update() {
        this.onUpdate = function (renderer: SpriteCanvasRenderingContext2D) {

            renderer.drawImage(this.inky, 0, 0, this.size.w, this.size.h);


            // this.pos.x = 229;
            // this.pos.y = 277;

            if (this.canChangeDirection() || !this.canMove(this.currentDirection)) {
                this.currentDirection = this.getNewDirection();   
            }

            if (this.canMove(this.currentDirection)) {
                this.makeMovement(this.currentDirection);
            } else {
                this.currentDirection = this.getNewDirection();
            }


            /*
            if (this.tryNextMovement === false) {
                this.tryNextMovement = null;
            }

            if (this.tryNextMovement === true) {
                this.movementDirection = this.nextMovementDirection;
                this.tryNextMovement = false;
            }

            if (this.tryNextMovement === null) {
                this.tryNextMovement = true;
            }*/


            //this.debug(renderer);
        }

    }

    collide() {
        this.onCollide = function (sprite: Sprite) {
            if (sprite instanceof Wall) {
               // this.rollbackMovement();
                //this.currentDirection = this.getNewDirection();
                //console.log(this);
                //debugger;
            }
            if (sprite instanceof PacMan) {
                sprite.destroy();
            }
        }
    }

    rollbackMovement() {
        switch (this.currentDirection) {
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

    makeMovement(movement : Direction) {
        var x = this.pos.x;
        var y = this.pos.y;


        switch (movement) {
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

        if (x !== this.pos.x || y !== this.pos.y) {
            console.log(this);
            console.log(this.pos);
        } else {
            debugger;
        }
    }

    getNewDirection() {
        // Liste des directions possibles
        const directions: Direction[] = [];

        // Check si on peut aller en haut
        this.currentDirection !== Direction.Up && this.canMove(Direction.Up) && directions.push(Direction.Up);

        // Check si on peut aller en bas
        this.currentDirection !== Direction.Down &&this.canMove(Direction.Down) && directions.push(Direction.Down);

        // Check si on peut aller à gauche
        this.currentDirection !== Direction.Left && this.canMove(Direction.Left) && directions.push(Direction.Left);

        // Check si on peut aller à droite
        this.currentDirection !== Direction.Right && this.canMove(Direction.Right) && directions.push(Direction.Right);

        if (directions.length > 0) {
            return directions[Math.floor(Math.random() * directions.length)];
        } else {
            return this.currentDirection;
        }
    }

    canMove(direction : Direction): Boolean { // Liste de tous les murs du niveau
        const wallItems = this.gameCanvas.sprites.list().filter(item => item instanceof Wall);

        // Clone de l'objet
        let currentSprite: Sprite = new Sprite(this.pos.x, this.pos.y, this.size.w, this.size.h);

        switch (direction) {
            case Direction.Up:
                currentSprite.pos.y -= this.speed;
                break;
            case Direction.Down:
                currentSprite.pos.y += this.speed;
                break;
            case Direction.Left:
                currentSprite.pos.x -= this.speed;
                break;
            case Direction.Right:
                currentSprite.pos.x += this.speed;
                break;
            default:
                break;
        }

        let index: number = 0;
        let finded: boolean = false;

        while (index < wallItems.length && !finded) {
            finded = this.gameCanvas.sprites.checkColliders(currentSprite, wallItems[index]);
            index++;
        }

        return !finded;
    }

    canChangeDirection(): boolean {
        if (!this.isMagnetizedOnTheGrid()) return false;

        const min = 0;
        const max = 10;
        return Math.floor(Math.random() * (max - min + 1)) + min === max
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

    isMagnetizedOnTheGrid(): boolean {
        if (((this.pos.x % 12) - 1) === 0 && ((this.pos.y % 12) - 1) === 0) {
            return true;
        }

        return false;
    }

    getRandomInt(max : number): number {
        return Math.floor(Math.random() * Math.floor(max)) + 1;
    }
}