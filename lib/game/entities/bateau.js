ig.module( 'game.entities.bateau' )
.requires( 'impact.entity',
           'plugins.entity_utilities'
          )

.defines(function() {
            
    EntityBateau = ig.Entity.extend({
        
        animSheet: new ig.AnimationSheet( 'media/bateau.png', 48, 24 ),
        size : {x: 48, y: 24},
        type: ig.Entity.TYPE.A, // Player friendly group
  	checkAgainst: ig.Entity.TYPE.NONE,
  	collides: ig.Entity.COLLIDES.PASSIVE,
  	bounciness: 0,
  	friction: {x: 1, y:1},
  	m_pos: {x: 0, y: 0},
   
    init: function( x, y, settings )
      {
          // Add animations for the animation sheet
        this.addAnim( 'idle', 24, [0] );
        this.addAnim( 'left', 24, [0] );
        this.addAnim( 'right', 24, [0]);
        this.addAnim( 'up', 24, [0] );
       
        this.maxVel.x = this.speed;
        this.maxVel.y = this.speed;
       
        this.currentAnim = this.anims.idle.rewind();
        // check we are not on top of anyone else    
        // Call the parent constructor
        this.parent( x, y, settings);
     },
    
    update: function()
      {
        this.dragAndDrop(false, true );
        ig.global.bateau_y = Math.floor(this.pos.x / 24);
        ig.global.bateau_x  = Math.floor(this.pos.y / 24);
        this.parent(); 
      },
      
  
});
});