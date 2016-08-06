Q.animations("aBT0", {
	mABT0On : {
		frames : [0,1,2],
		rate : 1 / 3,
		loop : true
	},
	mABT0Off : {
		frames : [3],
		rate : 1 / 2,
		loop : false
	}
});

Q.animations("aT0", {
	mAT0 : {
		frames : [0],
		rate : 2,
		loop : true
	}
});



Q.Sprite.extend("T0", {
	init : function(p) {
		
		this._super(p, {
			sprite: "aT0",
			sheet : "sT0",
			frame : 0,
			vx : 0,
			sensor : true,
			z : 1
		});
		
		this.add("animation,tween,aiBounce");
		this.play("mAT0");
	}
});

Q.Sprite.extend("BT0", {
	init : function(p) {
		p.TUp="T0";
		this._super(p, {
			sprite : "aBT0",
			sheet : "sBT0",
			frame : 0,
		    gravity : 0,
			z : 1,
			encendida : true
		});

		this.add("2d,animation");
		this.play("mABT0On");

		this.on("bump.bottom", function(colision) {
			if (colision.obj.isA("Jugador") && this.p.encendida === true) {
				this.p.encendida = false;
				this.play("mABT0Off");
                
              
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
