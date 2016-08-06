Q.animations("aBT10", {
	mABT10On : {
		frames : [0,1,2],
		rate : 1 / 3,
		loop : true
	},
	mABT10Off : {
		frames : [3],
		rate : 1 / 2,
		loop : false
	}
});

Q.animations("aT10", {
	mAT10 : {
		frames : [0,1],
		rate : 2,
		loop : true
	}
});



Q.Sprite.extend("T10", {
	init : function(p) {
		
		this._super(p, {
			sprite: "aT10",
			sheet : "sT10",
			frame : 1,
			vx : 0,
			sensor : true,
			z : 1
		});
		
		this.add("animation,tween,aiBounce");
		this.play("mAT10");
	}
});

Q.Sprite.extend("BT10", {
	init : function(p) {
		p.TUp="T10";
		this._super(p, {
			sprite : "aBT10",
			sheet : "sBT10",
			frame : 0,
		    gravity : 0,
			z : 1,
			encendida : true
		});

		this.add("2d,animation");
		this.play("mABT10On");

		this.on("bump.bottom", function(colision) {
			if (colision.obj.isA("Jugador") && this.p.encendida === true) {
				this.p.encendida = false;
				this.play("mABT10Off");
                
              
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
