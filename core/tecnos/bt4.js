Q.animations("aBT4", 
{
	mABT4On : 
	{
		frames : [12,13,14],
		rate : 1 / 3,
		loop : true
	},
	mABT4Off : 
	{
		frames : [0],
		rate : 1 / 2,
		loop : false
	}
});

Q.animations("aT4", {
	mAT4 : {
		frames : [0],
		rate : 2,
		loop : true
	}
});

Q.Sprite.extend("T4", 
{
	init : function(p) 
	{
		this._super(p, 
		{
			sprite: "aT4",
			sheet : "sT4",
			frame : 1,
			vx : 0,
			sensor : true,
			z : 1
		});
		
		this.add("animation,tween,aiBounce");
		this.play("mAT4");
	}
});

Q.Sprite.extend("BT4", 
{
	init : function(p) 
	{
		p.TUp="T4";
		this._super(p, 
		{
			sprite : "aBT4",
			sheet : "sBTOn",
			frame : 0,
		    gravity : 0,
			z : 1,
			estadoTF : true
		});

		this.add("2d,animation");
		this.play("mABT4On");

		this.on("bump.bottom", function(colision) 
		{
			if (colision.obj.isA("Jugador") && this.p.estadoTF === true) 
			{
				this.p.estadoTF = false;
				this.p.sheet="sBTOff";
				this.play("mABT4Off");
              
				var tInvocada = new Q[this.p.TUp](
				{
					x : this.p.x,
					y : this.p.y
				});

				this.stage.insert(tInvocada);

				tInvocada.animate(
				{
					y : this.p.y-64
				}, 0.5, {
					callback : function() 
					{
						this.p.sensor = false;
						this.add("2d");
					}
				});
			}
		});
	}
});
