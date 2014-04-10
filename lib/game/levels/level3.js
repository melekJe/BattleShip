ig.module( 'game.levels.level3' )
.requires('impact.image','game.entities.navire','game.entities.bateau')
.defines(function(){
LevelLevel3={"entities":[],"layer":[{"name":"level3","width":10,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"media/mer_tile.png","repeat":false,"preRender":false,"distance":"1","tilesize":24,"foreground":false,"data":[[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[3,3,3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3,3,3]]}]}/*]JSON*/;
LevelLevel3Resources=[new ig.Image('media/mer_tile.png')];
});
