Q.scene("w1", function(stage){
	var jugador = Q("Jugador",0).first();
	var jugadorPropiedades = jugador.p;
	var escenaPrevia = jugador.stage;
	jugadorPropiedades.escena_previa = escenaPrevia;
	jugador.destroy();
	escenaPrevia.stop();
    Q.stageTMX("w1.tmx",stage);
    
	jugador.p.x = 100;
	jugador.p.y = 40;
	
	jugador = new Q.Jugador(jugadorPropiedades);
	
	stage.insert(jugador);
	
	var capaFondo = Q("TileLayer",2).first();
	
	stage.add("viewport").follow( jugador,{
		x: true,
		y: true
	},{
		minX:32,
		maxX: capaFondo.p.w - 32,
		minY: 32,
		maxY: capaFondo.p.h
	} );
	Q.audio.stop();
	Q.audio.play("tw1.mp3", 
	{
		loop: true
	});  
} );
