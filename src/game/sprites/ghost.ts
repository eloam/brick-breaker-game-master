import { GameCanvas } from "../../engine/game-canvas";
import { Sprite } from "../../engine/objects/sprite";
import { SpriteCanvasRenderingContext2D } from "../../engine/renderer/sprite-canvas-rendering-context-2d";
import { Direction } from "../utilities/enums";
import { Wall } from "./wall";
import { PacMan } from "./pacman";
import { Gate } from "./gate";
import DazzledSkin from "./../../game/ressources/img/dazzled.png";
import DeadSkin from "./../../game/ressources/img/dead.png";
import { GhostState } from "../enums/ghost-state";

export class Ghost extends Sprite {

    protected currentState: GhostState = GhostState.Alive;
    protected vulnerableDefaultTimer: number = 600;
    protected deadDefaultTimer: number = 300;

    protected timer: number = 0;

    protected speed = 3;
    protected currentDirection : Direction = Direction.None;
    protected defaultSkin : HTMLImageElement;
    protected vulnerableSkin : HTMLImageElement;
    protected deadSkin : HTMLImageElement;
    protected directions: Array<Direction>;

    constructor(protected gameCanvas : GameCanvas, x : number, y : number, skin : any) {
        super(x * 12 + 1, y * 12 + 1, 3 * 12 - 2, 3 * 12 - 2);

        this.defaultSkin = new Image();
        this.defaultSkin.src = skin;

        this.vulnerableSkin = new Image();
        this.vulnerableSkin.src = DazzledSkin;

        this.deadSkin = new Image();
        this.deadSkin.src = DeadSkin;

        this.update();
        this.collide();

        this.currentDirection = Direction.Up;
        this.directions = new Array<Direction>();

        // this.commands();
        gameCanvas.sprites.add(this);
    }

    update() {
        this.onUpdate = function (renderer: SpriteCanvasRenderingContext2D) {

            // Obtenir le skin courant
            let currentSkin: HTMLImageElement;
            switch (this.currentState) {
                case GhostState.Alive:
                    currentSkin = this.defaultSkin;
                    break;
                case GhostState.Vulnerable:
                    if (this.showAlternativeSkin()) {
                        currentSkin = this.vulnerableSkin;
                    } else {
                        currentSkin = this.defaultSkin;
                    }
                    break;
                case GhostState.Dead:
                    if (this.showAlternativeSkin()) {
                        currentSkin = this.deadSkin;
                    } else {
                        currentSkin = this.defaultSkin;
                    }
                    break;
                default:
                    currentSkin = this.defaultSkin;
                    break;
            }

            renderer.drawImage(currentSkin, 0, 0, this.size.w, this.size.h);
            this.ai();

            if (this.currentState !== GhostState.Alive) {
                this.timer -= 1;
                if (this.timer === 0) {
                    this.currentState = GhostState.Alive;
                }
            }

            //this.debug(renderer);
        }

    }

    ai() {
        // Default AI
        if (this.currentState === GhostState.Alive) {
            if (this.canChangeDirection() || !this.canMove(this.currentDirection)) {
                this.currentDirection = this.getNewDirection(this.getPossibleMoveDirections());
            }
    
            if (this.canMove(this.currentDirection)) {
                this.makeMovement(this.currentDirection);
            }
        } else {
            // Fear AI
            if (this.canChangeDirection() || !this.canMove(this.currentDirection)) {
        
                // Liste des directions possibles
                const directions: Array<Direction> = [];

                // PacMan
                const pacman: Sprite = this.gameCanvas.sprites.list().filter(sprite => sprite instanceof PacMan)[0];

                // On detect les directions possibles
                this.canMove(Direction.Left) && this.pos.x < pacman.pos.x && directions.push(Direction.Left);
                this.canMove(Direction.Right) && this.pos.x > pacman.pos.x && directions.push(Direction.Right);
                this.canMove(Direction.Up) && this.pos.y < pacman.pos.y && directions.push(Direction.Up);
                this.canMove(Direction.Down) && this.pos.y > pacman.pos.y && directions.push(Direction.Down);

                this.currentDirection = this.getNewDirection(directions.length > 0 ? directions : this.getPossibleMoveDirections());
            }

            if (this.canMove(this.currentDirection)) {
                this.makeMovement(this.currentDirection);
            }
        }

    }

    collide() {
        this.onCollide = function (sprite: Sprite) {
            if (sprite instanceof Wall) {
            }
            else if (sprite instanceof PacMan) {
                switch (this.currentState) {
                    case GhostState.Alive:
                        sprite.destroy();
                        break;
                    case GhostState.Vulnerable:
                        this.currentState = GhostState.Dead;
                        this.timer = this.deadDefaultTimer;
                        break;
                    case GhostState.Dead:
                        break;
                    default:
                        sprite.destroy();
                        break;
                }
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

    getCurrentState(): GhostState {
        return this.currentState;
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

        return !finded;
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

    setVulnerableState(): void {
        this.currentState = GhostState.Vulnerable;
        this.timer = this.vulnerableDefaultTimer;
    }

    private showAlternativeSkin(): boolean {
        if (this.currentState !== GhostState.Alive) {
            if (this.timer > this.vulnerableDefaultTimer * 0.2) {
                return true;
            } else {
                if (this.timer % 30 > 15) {
                    return true;
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    }
}
