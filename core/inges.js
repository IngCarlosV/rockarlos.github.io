Q.animations("aRaymundo", 
{
	mRaymundo : 
	{
		frames : [0,1],
		rate : 5,
		loop : true
	}
});

Q.Sprite.extend("Raymundo", 
{
	init : function(p) 
	{
		this._super(p, 
		{
			sprite : "aRaymundo",
			sheet : "sRaymundo",
			frame : 0,
			sensor: true,
			z: 1
		});
		this.add("2d,animation");
		this.play("mRaymundo");
		this.on("hit", this, function(colision) 
		{
			if (colision.obj.isA("Jugador")) 
			{
				this.destroy();
			}
		});
	}
});


Q.animations("aJuan", 
{
	mJuan : 
	{
		frames : [0,1],
		rate : 3,
		loop : true
	}
});

Q.Sprite.extend("Juan", 
{
	init : function(p) 
	{
		this._super(p, 
		{
			sprite : "aJuan",
			sheet : "sJuan",
			frame : 0,
			sensor: true,
			z: 1
		});
		this.add("2d,animation");
		this.play("mJuan");
		
		this.on("hit", this, function(colision) 
		{
			if (colision.obj.isA("Jugador")) 
			{
				this.destroy();
			}
		});
	}
});

