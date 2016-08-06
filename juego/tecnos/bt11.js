Q.animations("aBT11", {
	mABT11On : {
		frames : [0,1,2],
		rate : 1 / 3,
		loop : true
	},
	mABT11Off : {
		frames : [3],
		rate : 1 / 2,
		loop : false
	}
});

Q.animations("aT11", {
	mAT11 : {
		frames : [0,1,2,3,4,5],
		rate : 1/3,
		loop : true
	}
});



Q.Sprite.extend("T11", {
	init : function(p) {
		
		this._super(p, {
			sprite: "aT11",
			sheet : "sT11",
			frame : 1,
			vx : -60,
			sensor : true,
			z : 1
		});
		
		this.add("animation,tween,aiBounce");
		this.play("mAT11");
	},
	step : function() 
		{
				if (this.p.vx >-50) 
				{
					this.p.flip = "x";
				}			
		}

});

Q.Sprite.extend("BT11", {
	init : function(p) {
		p.TUp="T11";
		this._super(p, {
			sprite : "aBT11",
			sheet : "sBT11",
			frame : 0,
		    gravity : 0,
			z : 1,
			encendida : true
		});

		this.add("2d,animation");
		this.play("mABT11On");

		this.on("bump.bottom", function(colision) {
			if (colision.obj.isA("Jugador") && this.p.encendida === true) {
				this.p.encendida = false;
				this.play("mABT11Off");
                
              
				var tAwaked = new Q[this.p.TUp]({
					x : this.p.x,
					y : this.p.y
				});

				this.stage.insert(tAwaked);

				tAwaked.animate({
					y : this.p.y-64
				}, 0.5, {
					callback : function() {
						this.p.sensor = false;
						this.add("2d");
					}
				});

			}

		});

	}
	});
