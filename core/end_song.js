//use an invisible cube
Q.Sprite.extend("EndSong", 
{
	init : function(p) 
	{
		this._super(p, 
		{
			sprite : "aEndSong",
			sheet : "sEndSong",
			frame : 0,
			sensor: true,
			gravity : 0,
			z: 1
		});
		this.add("2d,animation");
		
		this.on("hit", this, function(colision) 
		{
			if (colision.obj.isA("Jugador")) 
			{
				this.destroy();
				Q.audio.stop();
				Q.audio.play("tw2.mp3", 
				{
					loop : false
				});
			}
		});
	}
});

