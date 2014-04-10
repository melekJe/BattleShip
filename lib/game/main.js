ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'plugins.debug_display',
	'plugins.html_button',
	'plugins.game_utilities',
	'plugins.entity_utilities',
	'game.entities.navire',
	'game.entities.bateau',
	'game.levels.level1',
	'game.levels.level2',
	'game.levels.level3'
	
)
.defines(function(){
MyGame = ig.Game.extend({
	
	init: function() {
	        
		//savoir quand loader le level de la matrice du computer = vide
		ig.global.level3 = true;
	
	        //variable pour savoir qui gagne (nombre de bateau restants) bateau+navire
		ig.global.player = 5;
		ig.global.computer = 5;
		
		//mécanique du jeu savoir le tour de role
		ig.global.touche_C = true;
		ig.global.touche_P = false;
		
		
		//la map (arrière plan) à charger pour le computer et le player
	        ig.global.matrice_player = [[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[3,3,3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3,3,3]];
	        ig.global.matrice_computer = [[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[1,1,1,1,1,1,1,3,3,3],[3,3,3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3,3,3]];
	          
		//matrice de vérification des bateaux initialiisée a zéro   
	        ig.global.matrice_P = [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
	        ig.global.matrice_C = [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
	
	 
		//Choix du positionnement des bateaux du computer et génération des variables globales 	
		this.placement();
	       
	        // fixation des tableaux pour les coordonnés des bateaux computer
		var x0 = ig.global.navire_c_x;
		var x1 = ig.global.bateau_c_x;
		var y0 = ig.global.navire_c_y;
		var y1 = ig.global.bateau_c_y;
		//tableaux avec la position des bateaux computer
		ig.global.coord_c_x  = [x0,x1];
		ig.global.coord_c_y  = [y0,y1];
	        
	 
	        //remplissage de la matrice computer aprés positions (Okey bien remplie!!)
		for (var i=0;i<3;i++)
		{
		 matrice_C[y0][x0]=1;
		 x0++;
		}
	        
		for (var i=0;i<2;i++)
		{
		 matrice_C[y1][x1]=2;
		 x1++;
		}
	        
		
		//Binding des touches de la souris
		ig.input.initMouse();
                ig.input.bind( ig.KEY.MOUSE1, 'lbtn' );
 
 
		 //remplissage de la matrice player aprés positions
		
 
	        //load le level1 pour pouvoir positionner les bateaux du joueurs
		this.loadLevel( LevelLevel1 );
	      
		
		//le bouton pour pouvoir passer à un autre niveau
	        ig.input.bindTouch( '#button', 'load' );
			
	},
	
	update: function() {
	//la logique du jeu
	
	       //Début du jeu: faire apparaitre une grille bleu (adversaire) pour choisir
	        if (ig.input.pressed('load') && ig.global.level3 == true)
		{
		
		ig.global.level3 = false;
		
	        //on load la map vide
		this.loadLevel3( LevelLevel3,matrice_computer);
		
		//fixation des positions des bateaux player 
		var x0 = ig.global.navire_x;
		var x1 = ig.global.bateau_x;
		var y0 = ig.global.navire_y;
		var y1 = ig.global.bateau_y;
                ig.global.coord_p_y  = [x0,x1];
		ig.global.coord_p_x  = [y0,y1];   
	
		for (var i=0;i<3;i++)
		{
		 matrice_P[y0][x0] = 1;
		 x0++;
		}
	        
		for (var i=0;i<2;i++)
		{
		matrice_P[x1][y1] = 2;
		 y1++;
		}
	        }
	  
	        //bombardement: La premiére main est pour le joueur
		if (ig.global.level3== false && (player!=0 || computer != 0) )
		{
		        var souris = false;
		       //changement de l'image à afficher
		        console.log("je suis dans la boucle");
		 
		       var timer = new ig.Timer();
		       timer.set(60);
                       
		       
			//c'est au joueur de jouer 
			if( touche_C==true)
			{
		           this.loadLevel3(LevelLevel3,matrice_computer);
			    
			    if(ig.input.pressed('lbtn'))
			    { 
			   var pos_x = ig.input.mouse.x;
			   var pos_y = ig.input.mouse.y;
			   var i = Math.floor(pos_x / 24);
			   var j = Math.floor(pos_y / 24);
			    souris = true;
			    }
			   
			   if(souris==true)
			   {
		           
			   //un des bateaux du computer est touché	
		           if(matrice_C[j][i]== 1|| matrice_C[j][i]== 2)
				{
				matrice_computer[j][i] = 2;
				player --;
		                touche_C = true;
				touche_P = false;
				console.log("player dit: touché" );
		              
			       //if(bateau touché on reste dans level 3) sinon on charge le level player
		                this.loadLevel3(LevelLevel3,matrice_computer);
		                }
				
				//tir a vide
		                else
				{
				matrice_computer[j][i] = 4;
				touche_C = false;
				touche_P = true;
				console.log("player dit: raté" );
				//this.loadLevel3(LevelLevel3,matrice_computer);
				this.loadLevel2( LevelLevel2,coord_p_x, coord_p_y,matrice_player);
				for(var i=0;i<60;i++){console.log("");}
				}        		
			        
				console.log("etat C:", touche_C, "etat P:", touche_P);
			   }
			}
			
			
			
			//c'est le tour du computer
			if(touche_P==true)
			{
				
				this.loadLevel2( LevelLevel2,coord_p_x, coord_p_y,matrice_player);
				timer.delta();
				
				//Le choix aléatoire du computer
				var i = Math.floor((Math.random()*6));
				var j = Math.floor((Math.random()*6));
		                console.log(i,j);
				
			//un des bateaux du computer est touché	
		           if(matrice_P[j][i]== 1|| matrice_P[j][i]== 2)
				{
				matrice_player[j][i] = 2;
				computer --;
		                touche_P = true;
				touche_C = false;
				console.log("computer dit: touché " , computer);
		                //if(bateau touché on reste dans level 3) sinon on charge le level player
		                this.loadLevel2( LevelLevel2,coord_p_x, coord_p_y,matrice_player);
				for(var i=0;i<40;i++){console.log("");}
			        
				
	                        }
				//tir a vide
		                else
				{
				matrice_player[j][i] = 4;
				touche_C = true;
				touche_P = false;
				console.log("computer dit: raté" );
				this.loadLevel2( LevelLevel2,coord_p_x, coord_p_y,matrice_player);
				for(var i=0;i<40;i++){console.log("");}
				}
			}
			
		
		
		}
	        
		if(player == 0 && computer >0)
		{
			console.log("bravo joueur vous avez gagné");
			
		}
		
		if(computer == 0 && computer <0)
		{
			console.log("vous avez perdu!");
			
		}
		
		
		
		
		
		
		
		
		// Update all entities and backgroundMaps
		this.parent();	
	},
	
	
	
	
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		
		
	},
	
	placement : function ()
        {
		var test =0;
	        var x1,x2,y1,y2;
	    
	      while(((x1!=x2)&& (y1+2 > 6)&& (y1+ 1 > 6))||((x1 == x2)&& (y1== y2)) || ((x1==x1) && (y1+2==y2)) || ((x1==x2) && (y2 +2 > 6) &&(y1 +1>6)) || (x1+2>6) || (x2+1>6) )
	
		{
			test ++;
		x1 = Math.floor((Math.random()*6));
	        x2 = Math.floor((Math.random()*6));
	        y1= Math.floor((Math.random()*6));
		y2 = Math.floor((Math.random()*6));
		
		}
		
		//console.log("le test: ",test);
		ig.global.navire_c_x= x1;
		ig.global.navire_c_y= y1;
		ig.global.bateau_c_x= x2;
		ig.global.bateau_c_y= y2;
		
		//c'est inversé oO
		console.log("les coord du navire: ", x1,ig.global.navire_c_x,",",y1,ig.global.navire_c_y);
		console.log("les coord du bateau: ", x2,ig.global.bateau_c_x,",",y2,ig.global.bateau_c_y); 
	}

});

ig.main('#canvas', MyGame, 60, 240, 240, 2 );

});

