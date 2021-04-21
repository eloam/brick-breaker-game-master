import { GameCanvas } from "./engine/game-canvas";
import { Gate } from "./game/sprites/gate";
import { Ghost } from "./game/sprites/ghost";
import { PacGum } from "./game/sprites/pacgum";
import { PacMan } from "./game/sprites/pacman";
import { PlayerScoreBoard } from "./game/sprites/player-score-board";
import { Wall } from "./game/sprites/wall";
import { TileMapDebug } from "./game/utilities/tile-map-debug";


import InkyGhostSkin from "./game/ressources/img/inky.png";
import BlinkyGhostSkin from "./game/ressources/img/blinky.png";
import ClydeGhostSkin from "./game/ressources/img/clyde.png";
import PinkyGhostSkin from "./game/ressources/img/pinky.png";

const game: GameCanvas = new GameCanvas(document.body, 710, 810);
game.backgroundColor = '#000';


//new TileMapDebug(game, 12);

new PacGum(game, 2, 2);
new PacGum(game, 3, 2);
new PacGum(game, 4, 2);
new PacGum(game, 5, 2);
new PacGum(game, 6, 2);
new PacGum(game, 7, 2);
new PacGum(game, 8, 2);
new PacGum(game, 9, 2);
new PacGum(game, 10, 2);
new PacGum(game, 11, 2);
new PacGum(game, 12, 2);
new PacGum(game, 13, 2);


new PacGum(game, 2, 3);
new PacGum(game, 2, 4); // Super PacGum
new PacGum(game, 2, 5);
new PacGum(game, 2, 6);
new PacGum(game, 2, 7);
new PacGum(game, 2, 8);

new PacGum(game, 7, 3);
new PacGum(game, 7, 4);
new PacGum(game, 7, 5);


new PacGum(game, 3, 6);
new PacGum(game, 4, 6);
new PacGum(game, 5, 6);
new PacGum(game, 6, 6);
new PacGum(game, 7, 6);
new PacGum(game, 8, 6);
new PacGum(game, 9, 6);
new PacGum(game, 10, 6);
new PacGum(game, 11, 6);
new PacGum(game, 12, 6);

new PacGum(game, 13, 3);
new PacGum(game, 13, 4);
new PacGum(game, 13, 5);
new PacGum(game, 13, 6);
new PacGum(game, 14, 6);
new PacGum(game, 15, 6);
new PacGum(game, 2, 9);
new PacGum(game, 3, 9);
new PacGum(game, 4, 9);
new PacGum(game, 5, 9);
new PacGum(game, 6, 9);
new PacGum(game, 7, 9);
new PacGum(game, 7, 8);
new PacGum(game, 7, 7);

new PacGum(game, 7, 10);
new PacGum(game, 7, 11);
new PacGum(game, 7, 12);
new PacGum(game, 7, 13);
new PacGum(game, 7, 14);
new PacGum(game, 7, 15);
new PacGum(game, 7, 16);
new PacGum(game, 7, 17);
new PacGum(game, 7, 18);
new PacGum(game, 7, 19);
new PacGum(game, 7, 20);
new PacGum(game, 7, 21);
new PacGum(game, 6, 21);
new PacGum(game, 5, 21);
new PacGum(game, 4, 21);
new PacGum(game, 3, 21);
new PacGum(game, 2, 21);
new PacGum(game, 8, 21);
new PacGum(game, 9, 21);
new PacGum(game, 10, 21);
new PacGum(game, 11, 21);
new PacGum(game, 12, 21);
new PacGum(game, 13, 21);




new PacGum(game, 10, 7);
new PacGum(game, 10, 8);
new PacGum(game, 10, 9);
new PacGum(game, 11, 9);
new PacGum(game, 12, 9);
new PacGum(game, 13, 9);

new PacGum(game, 2, 22);
new PacGum(game, 2, 23);
new PacGum(game, 2, 24);        // Super PacGum
new PacGum(game, 3, 24); 
new PacGum(game, 4, 24); 
new PacGum(game, 4, 25); 
new PacGum(game, 4, 26); 
new PacGum(game, 4, 27); 
new PacGum(game, 5, 27); 
new PacGum(game, 6, 27); 
new PacGum(game, 7, 27); 
new PacGum(game, 7, 26); 
new PacGum(game, 7, 25); 
new PacGum(game, 7, 24); 
new PacGum(game, 8, 24); 
new PacGum(game, 9, 24); 
new PacGum(game, 10, 24); 
new PacGum(game, 11, 24); 
new PacGum(game, 12, 24); 
new PacGum(game, 13, 24); 
new PacGum(game, 13, 23); 
new PacGum(game, 13, 22); 
new PacGum(game, 14, 24); 
new PacGum(game, 15, 24); 
new PacGum(game, 16, 24); 
new PacGum(game, 17, 24); 
new PacGum(game, 18, 24); 
new PacGum(game, 19, 24); 
new PacGum(game, 20, 24); 
new PacGum(game, 21, 24); 

new PacGum(game, 10, 25); 
new PacGum(game, 10, 26); 
new PacGum(game, 10, 27); 
new PacGum(game, 11, 27); 
new PacGum(game, 12, 27); 
new PacGum(game, 13, 27); 
new PacGum(game, 13, 28); 
new PacGum(game, 13, 29); 



new PacGum(game, 7, 23); 
new PacGum(game, 7, 22); 



new PacGum(game, 3, 27); 
new PacGum(game, 2, 27); 
new PacGum(game, 2, 28); 
new PacGum(game, 2, 29); 
new PacGum(game, 2, 30); 
new PacGum(game, 3, 30); 
new PacGum(game, 4, 30); 
new PacGum(game, 5, 30); 
new PacGum(game, 6, 30); 
new PacGum(game, 7, 30); 
new PacGum(game, 8, 30); 
new PacGum(game, 9, 30); 
new PacGum(game, 10, 30); 
new PacGum(game, 11, 30); 
new PacGum(game, 12, 30); 
new PacGum(game, 13, 30); 
new PacGum(game, 14, 30); 
new PacGum(game, 15, 30); 
new PacGum(game, 16, 30); 
new PacGum(game, 17, 30); 
new PacGum(game, 18, 30); 
new PacGum(game, 19, 30); 
new PacGum(game, 20, 30); 
new PacGum(game, 21, 30); 
new PacGum(game, 22, 30); 
new PacGum(game, 23, 30); 
new PacGum(game, 24, 30); 
new PacGum(game, 25, 30); 
new PacGum(game, 26, 30); 
new PacGum(game, 27, 30); 


new PacGum(game, 16, 29); 
new PacGum(game, 16, 28); 
new PacGum(game, 16, 27); 
new PacGum(game, 17, 27); 
new PacGum(game, 18, 27); 
new PacGum(game, 19, 27); 
new PacGum(game, 19, 26); 
new PacGum(game, 19, 25); 
new PacGum(game, 22, 24); 
new PacGum(game, 22, 23); 
new PacGum(game, 22, 22); 
new PacGum(game, 22, 21);
new PacGum(game, 21, 21);
new PacGum(game, 20, 21);
new PacGum(game, 19, 21);
new PacGum(game, 18, 21);
new PacGum(game, 17, 21);
new PacGum(game, 16, 21);
new PacGum(game, 16, 22);
new PacGum(game, 16, 23);


new PacGum(game, 22, 20);
new PacGum(game, 22, 25); 
new PacGum(game, 22, 26); 
new PacGum(game, 22, 27); 
new PacGum(game, 23, 27); 
new PacGum(game, 24, 27); 
new PacGum(game, 25, 27); 
new PacGum(game, 26, 27); 
new PacGum(game, 27, 27); 
new PacGum(game, 27, 28); 
new PacGum(game, 27, 29); 
new PacGum(game, 25, 26); 
new PacGum(game, 25, 25); 
new PacGum(game, 25, 24); 
new PacGum(game, 26, 24); 
new PacGum(game, 27, 24); // Super PacGum
new PacGum(game, 27, 23); 
new PacGum(game, 27, 22); 
new PacGum(game, 27, 21); 
new PacGum(game, 26, 21); 
new PacGum(game, 25, 21); 
new PacGum(game, 24, 21); 
new PacGum(game, 23, 21); 


new PacGum(game, 22, 19);
new PacGum(game, 22, 18);
new PacGum(game, 22, 17);
new PacGum(game, 22, 16);
new PacGum(game, 22, 15);
new PacGum(game, 22, 14);
new PacGum(game, 22, 13);
new PacGum(game, 22, 12);
new PacGum(game, 22, 11);
new PacGum(game, 22, 10);
new PacGum(game, 22, 9);
new PacGum(game, 22, 8);
new PacGum(game, 22, 7);
new PacGum(game, 22, 6);
new PacGum(game, 22, 5);
new PacGum(game, 22, 4);
new PacGum(game, 22, 3);
new PacGum(game, 23, 9);
new PacGum(game, 24, 9);
new PacGum(game, 25, 9);
new PacGum(game, 26, 9);
new PacGum(game, 27, 9);
new PacGum(game, 27, 8);
new PacGum(game, 27, 7);
new PacGum(game, 27, 6);
new PacGum(game, 26, 6); 
new PacGum(game, 25, 6); 
new PacGum(game, 24, 6); 
new PacGum(game, 23, 6); 
new PacGum(game, 27, 5);
new PacGum(game, 27, 4); // Super PacGum
new PacGum(game, 27, 3);
new PacGum(game, 27, 2);
new PacGum(game, 26, 2);
new PacGum(game, 25, 2);
new PacGum(game, 24, 2);
new PacGum(game, 23, 2);
new PacGum(game, 22, 2);
new PacGum(game, 21, 2);
new PacGum(game, 20, 2);
new PacGum(game, 19, 2);
new PacGum(game, 18, 2);
new PacGum(game, 17, 2);
new PacGum(game, 16, 2);
new PacGum(game, 16, 3);
new PacGum(game, 16, 4);
new PacGum(game, 16, 5);
new PacGum(game, 16, 6);
new PacGum(game, 17, 6);
new PacGum(game, 18, 6);
new PacGum(game, 19, 6);
new PacGum(game, 19, 7);
new PacGum(game, 19, 8);
new PacGum(game, 19, 9);
new PacGum(game, 18, 9);
new PacGum(game, 17, 9);
new PacGum(game, 16, 9);
new PacGum(game, 20, 6); 
new PacGum(game, 21, 6); 




/**
 * Murs extérieur
 */

new Wall(game,1, 1, 'ctl');
new Wall(game,1.5, 1, 'h', 56);
new Wall(game,57, 1, 'ctr');
new Wall(game,57, 1.5, 'v', 20);
new Wall(game,57, 21, 'cbr');
new Wall(game,47.5, 21, 'h', 10);
new Wall(game,47, 21, 'ctl');
new Wall(game,47, 21.5, 'v', 6);
new Wall(game,47, 27, 'cbl');
new Wall(game,47.5, 27, 'h', 9.5);
new Wall(game,2, 2.5, 'v', 18);
new Wall(game,2, 20, 'cbl');
new Wall(game,2.5, 20, 'h', 10);
new Wall(game,12, 20, 'ctr');
new Wall(game,12, 20.5, 'v', 8);
new Wall(game,12, 28, 'cbr');
new Wall(game,2, 28, 'h', 10.5); 


new Wall(game,1, 1.5, 'v', 20);
new Wall(game,1, 21, 'cbl');
new Wall(game,1.5, 21, 'h', 10);
new Wall(game,11, 21, 'ctr');
new Wall(game,11, 21.5, 'v', 6);
new Wall(game,11, 27, 'cbr');
new Wall(game,2, 27, 'h', 9.5);


new Wall(game,2, 2, 'ctl');
new Wall(game,2.5, 2, 'h', 26);
new Wall(game,28, 2, 'ctr');
new Wall(game,28, 2.5, 'v', 7);
new Wall(game,30 , 2.5, 'v', 7);
new Wall(game,28, 9, 'cb');
new Wall(game,30, 2, 'ctl');
new Wall(game,30.5, 2, 'h', 26);
new Wall(game,56, 2, 'ctr');
new Wall(game,56, 2.5, 'v', 18);
new Wall(game,56, 20, 'cbr');
new Wall(game,46.5, 20, 'h', 10);
new Wall(game,46, 20, 'ctl');
new Wall(game,46, 20.5, 'v', 8);
new Wall(game,46, 28, 'cbl');
new Wall(game,46.5, 28, 'h', 10.5);



new Wall(game,2, 32, 'h', 10.5);
new Wall(game,12, 32, 'ctr');
new Wall(game,2, 33, 'h', 9.5);
new Wall(game,11, 33, 'ctr');

new Wall(game, 12, 32.5, 'v', 8);
new Wall(game, 12, 40, 'cbr');
new Wall(game, 11, 33.5, 'v', 6);
new Wall(game, 11, 39, 'cbr');
new Wall(game, 1.5, 39, 'h', 10);
new Wall(game, 2.5, 40, 'h', 10);
new Wall(game, 1, 39, 'ctl', 8);
new Wall(game, 2, 40, 'ctl', 8);
new Wall(game, 2, 40.5, 'v', 10);
new Wall(game, 2, 50, 'cbl', 8);
new Wall(game, 2, 52, 'ctl', 8);
new Wall(game, 5, 50, 'cr');
new Wall(game, 2.5, 50, 'h', 3);
new Wall(game, 2.5, 52, 'h', 3);
new Wall(game, 2, 52.5, 'v', 10);
new Wall(game, 1, 39.5, 'v', 24);
new Wall(game, 2, 62, 'cbl');
new Wall(game, 1, 63, 'cbl');
new Wall(game, 2.5, 62, 'h', 54);
new Wall(game, 1.5, 63, 'h', 56);
new Wall(game, 56, 62, 'cbr');
new Wall(game, 57, 63, 'cbr'); 
new Wall(game, 57, 39.5, 'v', 24); 
new Wall(game, 57, 39, 'ctr'); 
new Wall(game, 47.5, 39, 'h', 10); 
new Wall(game, 47, 39, 'cbl'); 
new Wall(game, 47, 33.5, 'v', 6); 
new Wall(game, 47, 33, 'ctl'); 
new Wall(game, 47.5, 33, 'h', 9.5); 


new Wall(game, 56, 52.5, 'v', 10);
new Wall(game, 56, 52, 'ctr');
new Wall(game, 53.5, 52, 'h', 3);
new Wall(game, 52, 50, 'cl');
new Wall(game, 53.5, 50, 'h', 3);
new Wall(game, 56, 50, 'cbr');
new Wall(game, 56, 40.5, 'v', 10);
new Wall(game, 56, 40, 'ctr');
new Wall(game, 46.5, 40, 'h', 10);
new Wall(game, 46, 40, 'cbl');
new Wall(game, 46, 32.5, 'v', 8);
new Wall(game, 46, 32, 'ctl');
new Wall(game, 46.5, 32, 'h', 10.5);



/**
 * Murs intérieur
 */


// Premier carré en haut a gauche
new Wall(game, 6, 6, 'ctl');
new Wall(game, 6.5, 6, 'h', 6);
new Wall(game, 12, 6, 'ctr');
new Wall(game, 6, 6.5, 'v', 4);
new Wall(game, 12, 6.5, 'v', 4);
new Wall(game, 6, 10, 'cbl');
new Wall(game, 12, 10, 'cbr');
new Wall(game, 6.5, 10, 'h', 6);

// Deuxieme carré en partant de la gauche
new Wall(game, 16, 6, 'ctl');
new Wall(game, 24, 6, 'ctr');
new Wall(game, 16, 10, 'cbl');
new Wall(game, 24, 10, 'cbr');
new Wall(game, 16.5, 6, 'h', 8);
new Wall(game, 16.5, 10, 'h', 8);
new Wall(game, 16, 6.5, 'v', 4);
new Wall(game, 24, 6.5, 'v', 4);

new Wall(game, 6, 14, 'cl');
new Wall(game, 11, 14, 'cr');
new Wall(game, 7.5, 14, 'h', 4);
new Wall(game, 7.5, 16, 'h', 4);

new Wall(game, 16, 14, 'ct');
new Wall(game, 16, 27, 'cb');
new Wall(game, 23, 20, 'cr');
new Wall(game, 18, 20, 'cbl');
new Wall(game, 18, 22, 'ctl');
new Wall(game, 16, 15.5, 'v', 12);
new Wall(game, 18, 15.5, 'v', 5);
new Wall(game, 18, 22.5, 'v', 5);
new Wall(game, 18.5, 20, 'h', 5);
new Wall(game, 18.5, 22, 'h', 5);


new Wall(game, 16, 32, 'ct');
new Wall(game, 16, 39, 'cb');
new Wall(game, 16, 33.5, 'v', 6);
new Wall(game, 18, 33.5, 'v', 6);


new Wall(game, 6, 44, 'cl');
new Wall(game, 12, 44, 'ctr', 8);
new Wall(game, 7, 44, 'h', 5.5);
new Wall(game, 7, 46, 'h', 3.5);
new Wall(game, 10, 46, 'ctr', 3);
new Wall(game, 12, 44.5, 'v', 7);
new Wall(game, 10, 51, 'cb');
new Wall(game, 10, 46.5, 'v', 5);

new Wall(game, 16, 44, 'cl');
new Wall(game, 23, 44, 'cr');
new Wall(game, 17.5, 44, 'h', 6);
new Wall(game, 17.5, 46, 'h', 6);

new Wall(game, 16, 50, 'ct');
new Wall(game, 6, 56, 'cl');
new Wall(game, 23, 56, 'cr');
new Wall(game, 7.5, 56, 'h', 9);
new Wall(game, 16, 56, 'cbr');
new Wall(game, 18, 56, 'cbl');
new Wall(game, 16, 51.5, 'v', 5);
new Wall(game, 18, 51.5, 'v', 5);
new Wall(game, 7.5, 58, 'h', 16);
new Wall(game, 18.5, 56, 'h', 5);


new Wall(game, 22, 50, 'cl');
new Wall(game, 35, 50, 'cr');
new Wall(game, 28, 57, 'cb');
new Wall(game, 23.5, 50, 'h', 12);
new Wall(game, 23.5, 52, 'h', 5);
new Wall(game, 30.5, 52, 'h', 5);
new Wall(game, 28, 52, 'ctr');
new Wall(game, 30, 52, 'ctl');
new Wall(game, 28, 52.5, 'v', 5);
new Wall(game, 30, 52.5, 'v', 5);


new Wall(game, 34, 56, 'cl');
new Wall(game, 51, 56, 'cr');
new Wall(game, 40, 50, 'ct');
new Wall(game, 35.5, 56, 'h', 5);
new Wall(game, 42.5, 56, 'h', 9);
new Wall(game, 35, 58, 'h', 17);
new Wall(game, 40, 56, 'cbr', 17);
new Wall(game, 42, 56, 'cbl', 17);
new Wall(game, 40, 51.5, 'v', 5);
new Wall(game, 42, 51.5, 'v', 5);


new Wall(game, 34, 44, 'cl');
new Wall(game, 41, 44, 'cr');
new Wall(game, 35, 44, 'h', 7);
new Wall(game, 35, 46, 'h', 7);

new Wall(game, 51, 44, 'cr');
new Wall(game, 46, 44, 'ctl');
new Wall(game, 46.5, 44, 'h', 5);
new Wall(game, 46, 44.5, 'v', 7);
new Wall(game, 46, 51, 'cb');
new Wall(game, 48, 46, 'ctl');
new Wall(game, 48, 46.5, 'v', 5);
new Wall(game, 48.5, 46, 'h', 3);


new Wall(game, 40, 32, 'ct');
new Wall(game, 40, 39, 'cb');
new Wall(game, 40, 33.5, 'v', 6);
new Wall(game, 42, 33.5, 'v', 6);

new Wall(game, 22, 38, 'cl');
new Wall(game, 35, 38, 'cr');
new Wall(game, 23, 38, 'h', 13);
new Wall(game, 28, 45, 'cb');
new Wall(game, 28, 40, 'ctr');
new Wall(game, 30, 40, 'ctl');
new Wall(game, 23.5, 40, 'h', 5);
new Wall(game, 30.5, 40, 'h', 5);
new Wall(game, 28, 40.5, 'v', 5);
new Wall(game, 30, 40.5, 'v', 5);


new Wall(game, 40, 14, 'ct');
new Wall(game, 40, 27, 'cb');
new Wall(game, 34, 20, 'cl');
new Wall(game, 40, 20, 'cbr');
new Wall(game, 40, 22, 'ctr');
new Wall(game, 42, 15.5, 'v', 12);
new Wall(game, 40, 15.5, 'v', 5);
new Wall(game, 40, 22.5, 'v', 5);
new Wall(game, 35.5, 20, 'h', 5);
new Wall(game, 35.5, 22, 'h', 5);


new Wall(game, 22, 14, 'cl');
new Wall(game, 35, 14, 'cr');
new Wall(game, 23, 14, 'h', 13);
new Wall(game, 28, 21, 'cb');
new Wall(game, 28, 16, 'ctr');
new Wall(game, 30, 16, 'ctl');
new Wall(game, 23.5, 16, 'h', 5);
new Wall(game, 30.5, 16, 'h', 5);
new Wall(game, 28, 16.5, 'v', 5);
new Wall(game, 30, 16.5, 'v', 5);


new Wall(game, 34, 6, 'ctl');
new Wall(game, 42, 6, 'ctr');
new Wall(game, 34, 10, 'cbl');
new Wall(game, 42, 10, 'cbr');
new Wall(game, 34.5, 6, 'h', 8);
new Wall(game, 34.5, 10, 'h', 8);
new Wall(game, 34, 6.5, 'v', 4);
new Wall(game, 42, 6.5, 'v', 4);

new Wall(game, 46, 6, 'ctl');
new Wall(game, 46.5, 6, 'h', 6);
new Wall(game, 52, 6, 'ctr');
new Wall(game, 46, 6.5, 'v', 4);
new Wall(game, 52, 6.5, 'v', 4);
new Wall(game, 46, 10, 'cbl');
new Wall(game, 52, 10, 'cbr');
new Wall(game, 46.5, 10, 'h', 6);

new Wall(game, 46, 14, 'cl');
new Wall(game, 51, 14, 'cr');
new Wall(game, 47.5, 14, 'h', 4);
new Wall(game, 47.5, 16, 'h', 4);

// zone central
new Wall(game, 22, 26, 'ctl');
new Wall(game, 22, 26.5, 'v', 8);
new Wall(game, 22, 34, 'cbl');
new Wall(game, 22.5, 34, 'h', 14);
new Wall(game, 22.5, 26, 'h', 4.5);
new Wall(game, 26.5, 26, 'ctr');
new Wall(game, 26.5, 27, 'cbr');
new Wall(game, 23.5, 27, 'h', 3.5);
new Wall(game, 23, 27, 'ctl');
new Wall(game, 23, 27.5, 'v', 6);
new Wall(game, 23, 33, 'cbl');
new Wall(game, 23.5, 33, 'h', 12);


new Wall(game, 31.5, 26, 'ctl');
new Wall(game, 31.5, 27, 'cbl');
new Wall(game, 32, 27, 'h', 3.5);
new Wall(game, 35, 27, 'ctr');
new Wall(game, 35, 27.5, 'v', 6);
new Wall(game, 35, 33, 'cbr');
new Wall(game, 32, 26, 'h', 4.5);
new Wall(game, 36, 26, 'ctr');
new Wall(game, 36, 26.5, 'v', 8);
new Wall(game, 36, 34, 'cbr');

new Wall(game, 24, 28, 'hi', 3.5);
new Wall(game, 31.5, 28, 'hi', 3.5);
new Wall(game, 24, 32, 'hi', 11);

new Gate(game, 27, 26);

new PacMan(game, 28, 35);

new PlayerScoreBoard(game, 2, 64);

new Ghost(game, 28, 29, InkyGhostSkin);
new Ghost(game, 28, 29, BlinkyGhostSkin);
new Ghost(game, 28, 29, PinkyGhostSkin);
new Ghost(game, 28, 29, ClydeGhostSkin);


