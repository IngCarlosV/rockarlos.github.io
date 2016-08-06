Q.animations("aBT6_1", {
	mABT6_1On : {
		frames : [0,1,2],
		rate : 1 / 3,
		loop : true
	},
	mABT6_1Off : {
		frames : [3],
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



Q.Sprite.extend("T6_1", {
	init : function(p) {
		
		this._super(p, {
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

Q.Sprite.extend("BT6_1", {
	init : function(p) {
		p.TUp="T6_1";
		this._super(p, {
			sprite : "aBT6_1",
			sheet : "sBT6_1",
			frame : 0,
		    gravity : 0,
			z : 1,
			encendida : true
		});

		this.add("2d,animation");
		this.play("mABT6_1On");

		this.on("bump.bottom", function(colision) {
			if (colision.obj.isA("Jugador") && this.p.encendida === true) {
				this.p.encendida = false;
				this.play("mABT6_1Off");
                
              
				var tAwaked = new Q[this.p.TUp]({
					x : this.p.x,
					y : this.p.y
				});

				this.stage.insert(tAwaked);

				tAwaked.animate({
					y : this.p.y-80
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
