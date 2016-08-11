Q.scene("w2", function(stage)
{
	var jugador = Q("Jugador",0).first();
	var jugadorPropiedades = jugador.p;
	var escenaPrevia = jugador.stage;
	jugadorPropiedades.escena_previa = escenaPrevia;
	jugador.destroy();
	escenaPrevia.stop();
	Q.stageTMX("w2.tmx",stage);
	Q.audio.stop();
});
