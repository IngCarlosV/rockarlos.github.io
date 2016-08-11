//axure rp
Q.animations("aBT3", 
{
	mABT3On : 
	{
		frames : [9,10,11],
		rate : 1 / 3,
		loop : true
	},
	mABT3Off : 
	{
		frames : [0],
		rate : 1 / 2,
		loop : false
	}
});

Q.animations("aT3", 
{
	mAT3 : 
	{
		frames : [0],
		rate : 1,
		loop : false
	}
});



Q.Sprite.extend("T3", 
{
	init : function(p) 
	{
		
		this._super(p, 
		{
			sprite: "aT3",
			sheet : "sT3",
			frame : 1,
			vx : 0,
			sensor : true,
			z : 1
		});
		
		this.add("animation,tween,aiBounce");
		this.play("mAT3");
	}
});

Q.Sprite.extend("BT3", 
{
	init : function(p) 
	{
		p.TUp="T3";
		this._super(p, 
		{
			sprite : "aBT3",
			sheet : "sBTOn",
			frame : 0,
		    gravity : 0,
			z : 1,
			estadoTF : true
		});

		this.add("2d,animation");
		this.play("mABT3On");

		this.on("bump.bottom", function(colision) 
		{
			if (colision.obj.isA("Jugador") && this.p.estadoTF === true) 
			{
				this.p.estadoTF = false;
				this.p.sheet="sBTOff";
				this.play("mABT3Off");
                 
				var tInvocada = new Q[this.p.TUp](
				{
					x : this.p.x,
					y : this.p.y
				});

				this.stage.insert(tInvocada);

				tInvocada.animate(
				{
					y : this.p.y-64
				}, 0.5, 
				{
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
