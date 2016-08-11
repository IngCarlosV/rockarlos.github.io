Q.animations("aBT1", 
{
	mABT1On : 
	{
		frames : [3,4,5],
		rate : 1 / 3,
		loop : true
	},
	mABT1Off : 
	{
		frames : [0],
		rate : 1 / 2,
		loop : false
	}
});

Q.animations("aT1", {
	mAT1 : {
		frames : [0],
		rate : 2,
		loop : true
	}
});



Q.Sprite.extend("T1", {
	init : function(p) {
		
		this._super(p, {
			sprite: "aT1",
			sheet : "sT1",
			frame : 0,
			vx : 0,
			sensor : true,
			z : 1
		});
		
		this.add("animation,tween,aiBounce");
		this.play("mAT1");
	}
});

Q.Sprite.extend("BT1", 
{
	init : function(p) 
	{
		p.TUp="T1";
		this._super(p, 
		{
			sprite : "aBT1",
			sheet : "sBTOn",
			frame : 0,
		    gravity : 0,
			z : 1,
			estadoTF : true
		});

		this.add("2d,animation");
		this.play("mABT1On");

		this.on("bump.bottom", function(colision) 
		{
			if (colision.obj.isA("Jugador") && this.p.estadoTF === true) 
			{
				this.p.estadoTF = false;
				this.p.sheet="sBTOff";
				this.play("mABT1Off");
                  
				var tInvocada = new Q[this.p.TUp](
				{
					x : this.p.x,
					y : this.p.y
				});

				this.stage.insert(tInvocada);

				tInvocada.animate(
				{
					y : this.p.y-300,
				}, 1.5, {
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
