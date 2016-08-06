Q.animations("aBT9", {
	mABT9On : {
		frames : [0,1,2],
		rate : 1 / 3,
		loop : true
	},
	mABT9Off : {
		frames : [3],
		rate : 1 / 2,
		loop : false
	}
});

Q.animations("aT9", {
	mAT9 : {
		frames : [0],
		rate : 2,
		loop : true
	}
});



Q.Sprite.extend("T9", {
	init : function(p) {
		
		this._super(p, {
			sprite: "aT9",
			sheet : "sT9",
			frame : 0,
			vx : 0,
			sensor : true,
			z : 1
		});
		
		this.add("animation,tween,aiBounce");
		this.play("mAT9");
	}
});

Q.Sprite.extend("BT9", {
	init : function(p) {
		p.TUp="T9";
		this._super(p, {
			sprite : "aBT9",
			sheet : "sBT9",
			frame : 0,
		    gravity : 0,
			z : 1,
			encendida : true
		});

		this.add("2d,animation");
		this.play("mABT9On");

		this.on("bump.bottom", function(colision) {
			if (colision.obj.isA("Jugador") && this.p.encendida === true) {
				this.p.encendida = false;
				this.play("mABT9Off");
                
              
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
