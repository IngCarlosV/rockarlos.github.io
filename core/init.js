var Q = Quintus(
{
	audioSupport : ["mp3"]
});
Q.setup("juego",{maximize: true});
Q.include("Sprites, Scenes, 2D, Input,TMX,Touch,Anim,UI,Audio");
Q.enableSound();
Q.controls();
Q.touch();

Q.pausarSprites = function() 
{
	var spritesClases = ["Uesx","Family","Juan","Raymundo","Tecnos","BT0","BT1","BT2","BT3","BT4","BT5","BT6_0","BT6_1","BT7","BT8_0","BT9","BT10","BT11","BT12","T0","T1","T2","T3","T4","T5","T6_0","T6_1","T7","T8","T9","T10","T11","T12","Genesp","Justificacion","TraerJustificacion","TraerGenesp","Moneda"];
	
	spritesClases.forEach(function(spriteClase) 
	{
		Q(spriteClase).items.forEach(function(sprite) 
		{	
			sprite.p.sensor = true;
			sprite.p.animation = null;
			sprite.del("2d");			
		});
	});	
};
