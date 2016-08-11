Q.animations("aBT6_0", 
{
	mABT6_0On : 
	{
		frames : [18,19,20],
		rate : 1 / 3,
		loop : true
	},
	mABT6_0Off : 
	{
		frames : [0],
		rate : 1 / 2,
		loop : false
	}
});

Q.animations("aT6_0", 
{
	mAT6_0 : 
	{
		frames : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
		rate : 1/3,
		loop : true
	}
});



Q.Sprite.extend("T6_0", 
{
	init : function(p) 
	{
		
		this._super(p, 
		{
			sprite: "aT6_0",
			sheet : "sT6_0",
			frame : 1,
			vx : 0,
			sensor : true,
			z : 1
		});
		
		this.add("animation,tween,aiBounce");
		this.play("mAT6_0");
	}
});

Q.Sprite.extend("BT6_0", 
{
	init : function(p) 
	{
		p.TUp="T6_0";
		this._super(p, 
		{
			sprite : "aBT6_0",
			sheet : "sBTOn",
			frame : 0,
		    gravity : 0,
			z : 1,
			estadoTF : true
		});

		this.add("2d,animation");
		this.play("mABT6_0On");

		this.on("bump.bottom", function(colision) 
		{
			if (colision.obj.isA("Jugador") && this.p.estadoTF === true) 
			{
				this.p.estadoTF = false;
				this.p.sheet="sBTOff";
				this.play("mABT6_0Off");
                
				var tInvocada = new Q[this.p.TUp](
				{
					x : this.p.x,
					y : this.p.y
				});

				this.stage.insert(tInvocada);

				tInvocada.animate(
				{
					y : this.p.y-96
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
