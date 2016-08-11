Q.animations("aUesx", 
{
	mAbrirPuerta : 
	{
		frames : [0,1,2],
		rate : 8,
		loop : false
	}
});

Q.Sprite.extend("Uesx", 
{
	init : function(p) 
	{
		this._super(p, 
		{
			sprite : "aUesx",
			sheet : "sUesx",
			frame : 0,
			gravity : 0,
			sensor: false,
			z: 1
		});
		this.add("2d,animation");
	    
	    this.on("bump.right",this,function(colision)
	    {
	    	if (colision.obj.isA("Jugador") && Q.inputs["right"]) 
	    	{
		    	Q.audio.stop();
				Q.audio.play("tw2.mp3", 
				{
						loop : false
				});
			}
		});
    
		this.on("hit", this, function(colision)
		{
			this.play("mAbrirPuerta");
		});
	}
});