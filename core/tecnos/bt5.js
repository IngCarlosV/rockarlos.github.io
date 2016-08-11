Q.animations("aBT5", 
{
	mABT5On : 
	{
		frames : [15,16,17],
		rate : 1 / 3,
		loop : true
	},
	mABT5Off : 
	{
		frames : [0],
		rate : 1 / 2,
		loop : false
	}
});

Q.animations("aT5", 
{
	mAT5 : 
	{
		frames : [0],
		rate : 2,
		loop : true
	}
});

Q.Sprite.extend("T5", 
{
	init : function(p) 
	{
		
		this._super(p, 
		{
			sprite: "aT5",
			sheet : "sT5",
			frame : 1,
			vx : 0,
			sensor : true,
			z : 1
		});
		
		this.add("animation,tween,aiBounce");
		this.play("mAT5");
	}
});

Q.Sprite.extend("BT5", 
{
	init : function(p) 
	{
		p.TUp="T5";
		this._super(p, 
		{
			sprite : "aBT5",
			sheet : "sBTOn",
			frame : 0,
		    gravity : 0,
			z : 1,
			estadTF : true
		});

		this.add("2d,animation");
		this.play("mABT5On");

		this.on("bump.bottom", function(colision) 
		{
			if (colision.obj.isA("Jugador") && this.p.estadTF === true) 
			{
				this.p.estadTF = false;
				this.p.sheet="sBTOff";
				this.play("mABT5Off");
             
				var tInvocada = new Q[this.p.TUp]({
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
