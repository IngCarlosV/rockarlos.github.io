Q.animations("aBT2", 
{
	mABT2On : 
	{
		frames : [6,7,8],
		rate : 1 / 3,
		loop : true
	},
	mABT2Off : 
	{
		frames : [0],
		rate : 1 / 2,
		loop : false
	}
});

Q.animations("aT2", 
{
	mAT2 : 
	{
		frames : [0,1],
		rate : 2,
		loop : true
	}
});

Q.Sprite.extend("T2", 
{
	init : function(p) 
	{
		
		this._super(p, 
		{
			sprite: "aT2",
			sheet : "sT2",
			frame : 0,
			vx : 0,
			sensor : true,
			z : 1
		});
		
		this.add("animation,tween,aiBounce");
		this.play("mAT2");
	 }
});

Q.Sprite.extend("BT2", 
{
	init : function(p) 
	{
		p.TUp="T2";
		this._super(p, 
		{
			sprite : "aBT2",
			sheet : "sBTOn",
			frame : 0,
		    gravity : 0,
			z : 1,
			estadoTF : true
		});

		this.add("2d,animation");
		this.play("mABT2On");

		this.on("bump.bottom", function(colision) 
		{
			if (colision.obj.isA("Jugador") && this.p.estadoTF === true) 
			{
				this.p.estadoTF = false;
				this.p.sheet="sBTOff";
				this.play("mABT2Off");
                
              
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
