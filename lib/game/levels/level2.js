ig.module( 'game.levels.level2' )
.requires('impact.image','game.entities.navire','game.entities.bateau')
.defines(function(){
LevelLevel2={"entities":[{"type":"EntityNavire","x":24,"y":24},{"type":"EntityBateau","x":24,"y":24}],"layer":[{"name":"level2","width":10,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"media/mer_tile.png","repeat":false,"preRender":false,"distance":"1","tilesize":24,"foreground":false,"data":[[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[3,3,3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3,3,3]]}]}/*]JSON*/;
LevelLevel2Resources=[new ig.Image('media/mer_tile.png')];
});
