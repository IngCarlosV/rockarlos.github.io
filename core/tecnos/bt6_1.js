Q.animations("aBT6_1", {
	mABT6_1On : {
		frames : [21,22,23],
		rate : 1 / 3,
		loop : true
	},
	mABT6_1Off : {
		frames : [0],
		rate : 1 / 2,
		loop : false
	}
});

Q.animations("aT6_1", {
	mAT6_1 : {
		frames : [0,1,2,3],
		rate : 1/2,
		loop : true
	}
});



Q.Sprite.extend("T6_1", 
{
	init : function(p) 
	{	
		this._super(p, 
		{
			sprite: "aT6_1",
			sheet : "sT6_1",
			frame : 1,
			vx : 0,
			sensor : true,
			z : 1
		});
		
		this.add("animation,tween,aiBounce");
		this.play("mAT6_1");
	}
});

Q.Sprite.extend("BT6_1", 
{
	init : function(p) 
	{
		p.TUp="T6_1";
		
		this._super(p, 
		{
			sprite : "aBT6_1",
			sheet : "sBTOn",
			frame : 0,
		    gravity : 0,
			z : 1,
			estadoTF : true
		});

		this.add("2d,animation");
		this.play("mABT6_1On");

		this.on("bump.bottom", function(colision) 
		{
			if (colision.obj.isA("Jugador") && this.p.estadoTF === true) 
			{
				this.p.estadoTF = false;
				this.p.sheet="sBTOff";
				this.play("mABT6_1Off");
                         
				var tInvocada = new Q[this.p.TUp](
				{
					x : this.p.x,
					y : this.p.y
				});

				this.stage.insert(tInvocada);

				tInvocada.animate({
					y : this.p.y-80
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
