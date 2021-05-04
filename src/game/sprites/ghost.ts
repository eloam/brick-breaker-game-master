import { GameCanvas } from "../../engine/game-canvas";
import { Sprite } from "../../engine/objects/sprite";
import { SpriteCanvasRenderingContext2D } from "../../engine/renderer/sprite-canvas-rendering-context-2d";
import { Direction } from "../utilities/enums";
import { Wall } from "./wall";
import { PacMan } from "./pacman";
import { Gate } from "./gate";

export class Ghost extends Sprite {

    protected speed = 2;
    protected currentDirection : Direction = Direction.None;

    protected inky : HTMLImageElement;

    protected directions: Array<Direction>;

    constructor(protected gameCanvas : GameCanvas, x : number, y : number, skin : any) {
        super(x * 12 + 1, y * 12 + 1, 3 * 12 - 2, 3 * 12 - 2);

        this.inky = new Image();
        this.inky.src = skin;

        this.update();
        this.collide();

        this.currentDirection = Direction.Up;
        this.directions = new Array<Direction>();

        // this.commands();
        gameCanvas.sprites.add(this);
    }

    update() {
        this.onUpdate = function (renderer: SpriteCanvasRenderingContext2D) {

            renderer.drawImage(this.inky, 0, 0, this.size.w, this.size.h);

            this.ai();

             //this.debug(renderer);
        }

    }

    ai() {
        if (this.canChangeDirection() || !this.canMove(this.currentDirection)) {
            this.currentDirection = this.getNewDirection(this.getPossibleMoveDirections());
        }

        if (this.canMove(this.currentDirection)) {
            this.makeMovement(this.currentDirection);
        }
    }

    collide() {
        this.onCollide = function (sprite: Sprite) {
            if (sprite instanceof Wall) {
            }
            else if (sprite instanceof PacMan) {
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
    }

    getNewDirection(directions: Array<Direction>): Direction { 

        if (directions.length > 0) {
            return directions[this.getRandomInt(directions.length) - 1];
        } else {
            return this.currentDirection;
        }
    }

    getPossibleMoveDirections(): Array<Direction> {

        const directions: Array<Direction> = [];

        // Check si on peut aller en haut
        this.canMove(Direction.Up) && directions.push(Direction.Up);

        // Check si on peut aller en bas
        this.canMove(Direction.Down) && directions.push(Direction.Down);

        // Check si on peut aller à gauche
        this.canMove(Direction.Left) && directions.push(Direction.Left);

        // Check si on peut aller à droite
        this.canMove(Direction.Right) && directions.push(Direction.Right);

        return directions;
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

    canChangeDirection(): boolean {
        if (!this.isMagnetizedOnTheGrid()) 
            return false;
        
        const directions: Array<Direction> = this.getPossibleMoveDirections();

        return this.directions.length !== directions.length && directions.length > 2;
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

    arrayCompare(array1 : Array<Direction>, array2 : Array<Direction>) {
        if (!Array.isArray(array1) || !Array.isArray(array2) || array1.length !== array2.length) {
            return false;
        }

        const arr1 = array1.concat().sort();
        const arr2 = array2.concat().sort();

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }

        return true;
    }
}
