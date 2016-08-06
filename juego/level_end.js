//D63
//indicar el nombre de la escena y el callback
//se carga el mapa
  

Q.scene("level_end", function(stage){
	//Pausar y ocultar las escenas de score y de mundo1
	//obtener a Mario
	var mario = Q("Jugador",0).first();
	var marioPropiedades = mario.p;
	
	//obtener la escena previa
	var escenaPrevia = mario.stage;
	//pegar a mario un atributo que haga referefencia a la escena del mundo 1
	marioPropiedades.escena_previa = escenaPrevia;
	
	//destruimos al mario que vive en la escena previa
	mario.destroy();
	
	//pausar y ocultar la escena previa
	escenaPrevia.stop();
	
	
	//cargar el archivo TMX
	Q.stageTMX("level_end.tmx",stage);

	//insertar a Mario
	mario.p.x = 700;
	mario.p.y = 0;
	
	//creamos un nuevo mario para esta escena
	mario = new Q.Jugador(marioPropiedades);
	
	//insertamos el mario recien creado
	stage.insert(mario);
	//obtener mi capa de fondo
	var capaFondo = Q("TileLayer",2).first();
	
	//La camara siga a Mario
	stage.add("viewport").follow( mario,{
		x: true,
		y: true
	},{
		minX:32,
		//ancho de la capa de cielo 
		//es el mismo que el ancho del canvas
		maxX: capaFondo.p.w - 32,
		minY: 32,
		maxY: capaFondo.p.h
	} );
	

 
  
} );
