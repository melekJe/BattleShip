ig.module( 'game.levels.level1' )
.requires('impact.image','game.entities.navire','game.entities.bateau')
.defines(function(){
LevelLevel1=/*JSON[*/{"entities":[{"type":"EntityNavire","x":172,"y":4},{"type":"EntityBateau","x":176,"y":24}],"layer":[{"name":"level1","width":10,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"media/mer_tile.png","repeat":false,"preRender":false,"distance":"1","tilesize":24,"foreground":false,"data":[[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[3,3,3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3,3,3]]}]}/*]JSON*/;
LevelLevel1Resources=[new ig.Image('media/mer_tile.png')];
});