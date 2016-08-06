//accedemos a las funcionalidades del engine
var Q = Quintus();

//el juego se ejecutará en la etiqueta del canvas cuyo id es juego
//opcionalmente se puede dar como segundo parametro un objeto de configuración
Q.setup("juego",{maximize: true});

//modulos a utilizar (6)
Q.include("Sprites, Scenes, 2D, Input,TMX,Touch,Anim,UI");

//teclado controles
Q.controls();
Q.touch();
/*----- DEFINIMOS UNA FUNCION AUXILIAR GENERICA PARA DETENER A TODOS LOS spriteS--------*/

Q.pausarSprites = function() {

	var spritesClases = ["Family","Juan","Raymundo","Tecnos","BT0","BT1","BT2","BT3","BT4","BT5","BT6_0","BT6_1","BT7","BT8_0","BT9","BT10","BT11","BT12","T0","T1","T2","T3","T4","T5","T6_0","T6_1","T7","T8","T9","T10","T11","T12","HongoVida","HongoVida2","HongoVida3","Caja3","Caja2","Moneda","Caja"];

	//iteramos todas las cadenas (nombre de clases de sprites) del arreglo spritesClases
	spritesClases.forEach(function(spriteClase) {
		//por cada clase de sprite buscamos en el juego si hay una instancia de dicha
		//clase
		Q(spriteClase).items.forEach(function(sprite) {

			//por cada sprite deshabilitamos las colisiones
			sprite.p.sensor = true;
			//por cada sprite deshabilitamos sus animaciones
			sprite.p.animation = null;
			//por cada sprite deshabilitamos su velocidad y gravedad
			sprite.del("2d");			
		});
	});	
};
