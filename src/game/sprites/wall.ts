import { GameCanvas } from "../../engine/game-canvas";
import { Sprite } from "../../engine/objects/sprite";

export class Wall extends Sprite {

    private static tileSize = 12;
    private static halfTileSize = Wall.tileSize / 2;
    private direction: string = 'vertical';

    constructor(private gameCanvas: GameCanvas, x: number, y: number, direction: string, iterations: number = 1) {
        super(x * 12, y * 12, Wall.getSpriteSizeWidth(direction, iterations), Wall.getSpriteSizeHeight(direction, iterations));

        this.direction = direction;
        this.update();
        gameCanvas.sprites.add(this);
    }

    update() {
        this.onUpdate = function(renderer) {
            renderer.lineWidth(2.5).strokeStyle('#3346FF');

            switch (this.direction) {
                case 'v':
                    renderer.beginPath().moveTo(Wall.halfTileSize, Wall.halfTileSize).lineTo(Wall.halfTileSize, this.size.h - Wall.halfTileSize).stroke().closePath();
                    break;
                case 'h':
                    renderer.beginPath().moveTo(Wall.halfTileSize, Wall.halfTileSize).lineTo(this.size.w - Wall.halfTileSize, Wall.halfTileSize).stroke().closePath();
                    break;
                case 'ctl':
                    renderer.beginPath().arc(Wall.tileSize, Wall.tileSize, Wall.halfTileSize, 1 * Math.PI, 1.5 * Math.PI, false).stroke().closePath();
                    break;
                case 'ctr':
                    renderer.beginPath().arc(0, Wall.tileSize, Wall.halfTileSize, 1.5 * Math.PI, 0, false).stroke().closePath();
                    break;
                case 'cbl':
                    renderer.beginPath().arc(Wall.tileSize, 0, Wall.halfTileSize, 0.5 * Math.PI, 1 * Math.PI, false).stroke().closePath();
                    break;
                case 'cbr':
                    renderer.beginPath().arc(0, 0, Wall.halfTileSize, 0, 0.5 * Math.PI, false).stroke().closePath();
                    break;
                case 'cb': 
                    renderer.beginPath().moveTo(Wall.halfTileSize, 0).lineTo(Wall.halfTileSize, Wall.halfTileSize).stroke().closePath();
                    renderer.beginPath().moveTo(this.size.w - Wall.halfTileSize, 0).lineTo(this.size.w - Wall.halfTileSize, Wall.halfTileSize).stroke().closePath();
                    renderer.beginPath().arc(this.size.w / 2, Wall.halfTileSize, Wall.tileSize, 0, 1 * Math.PI, false).stroke().closePath();
                    break;
                case 'ct': 
                    renderer.beginPath().moveTo(Wall.halfTileSize, this.size.w / 2 ).lineTo(Wall.halfTileSize, Wall.tileSize * 2).stroke().closePath();
                    renderer.beginPath().moveTo(this.size.w - Wall.halfTileSize, this.size.w / 2).lineTo(this.size.w - Wall.halfTileSize, Wall.tileSize * 2).stroke().closePath();
                    renderer.beginPath().arc(this.size.w / 2, this.size.w / 2, Wall.tileSize, 1 * Math.PI, 2 * Math.PI, false).stroke().closePath();
                    break;
                case 'cl': 
                    renderer.beginPath().moveTo(this.size.w - Wall.halfTileSize, Wall.halfTileSize).lineTo(this.size.w, Wall.halfTileSize).stroke().closePath();
                    renderer.beginPath().moveTo(this.size.w - Wall.halfTileSize, this.size.h - Wall.halfTileSize).lineTo(this.size.w, this.size.h - Wall.halfTileSize).stroke().closePath();
                    renderer.beginPath().arc(this.size.h / 2, this.size.h / 2, Wall.tileSize, 0.5 * Math.PI, 1.5 * Math.PI, false).stroke().closePath();
                    break;
                case 'cr': 
                    renderer.beginPath().moveTo(0, Wall.halfTileSize).lineTo(Wall.halfTileSize, Wall.halfTileSize).stroke().closePath();
                    renderer.beginPath().moveTo(0, this.size.h - Wall.halfTileSize).lineTo(Wall.halfTileSize, this.size.h - Wall.halfTileSize).stroke().closePath();
                    renderer.beginPath().arc(Wall.halfTileSize, this.size.h / 2, Wall.tileSize, 1.5 * Math.PI, 0.5 * Math.PI, false).stroke().closePath();
                    break;
            }

            //this.debug(renderer);
        }
    }

    private static getSpriteSizeWidth(direction: string, iterations: number = 1): number {
        switch (direction) {
            case 'h':
            case 'hi':
                return iterations * Wall.tileSize;
            case 'v':
            case 'vi':
                return Wall.tileSize;
            case 'cb':
            case 'ct':
                return Wall.tileSize * 3;
            case 'cl':
            case 'cr':
                return Wall.tileSize * 2;
            default:
                return Wall.tileSize;
        }
    }

    private static getSpriteSizeHeight(direction: string, iterations: number = 1): number {
        switch (direction) {
            case 'h':
            case 'hi':
                return Wall.tileSize;
            case 'v':
            case 'vi':
                return iterations * Wall.tileSize;
            case 'cb':
            case 'ct':
                return Wall.tileSize * 2;
            case 'cl':
            case 'cr':
                return Wall.tileSize * 3;
            default:
                return Wall.tileSize;
        }
    }

}