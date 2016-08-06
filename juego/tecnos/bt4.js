Q.animations("aBT4", {
	mABT4On : {
		frames : [0,1,2],
		rate : 1 / 3,
		loop : true
	},
	mABT4Off : {
		frames : [3],
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



Q.Sprite.extend("T4", {
	init : function(p) {
		
		this._super(p, {
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

Q.Sprite.extend("BT4", {
	init : function(p) {
		p.TUp="T4";
		this._super(p, {
			sprite : "aBT4",
			sheet : "sBT4",
			frame : 0,
		    gravity : 0,
			z : 1,
			encendida : true
		});

		this.add("2d,animation");
		this.play("mABT4On");

		this.on("bump.bottom", function(colision) {
			if (colision.obj.isA("Jugador") && this.p.encendida === true) {
				this.p.encendida = false;
				this.play("mABT4Off");
                
              
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
