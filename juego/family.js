Q.animations("aFamily",
	{
		mFamily: 
		{
			frames: [1,2,3,4],
			rate: 1/2,
			loop: true,
		}
	}
);

Q.Sprite.extend("Family",
{
	init: function(p)
	{
		this._super(p,{
			sprite: "aFamily",
			sheet: "sFamily",
			frame: 0,
			vx: 0
		});
		this.add("2d, aiBounce, animation");
		
		this.on("bump.top", this, "f_Family");
	},
	f_Family: function(colision)
	{
		if(colision.obj.isA("Jugador"))
		{
			this.play("mFamily");
		}
	}
});

