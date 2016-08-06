Q.animations("aBT1", {
	mABT1On : {
		frames : [0,1,2],
		rate : 1 / 3,
		loop : true
	},
	mABT1Off : {
		frames : [3],
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

Q.Sprite.extend("BT1", {
	init : function(p) {
		p.TUp="T1";
		this._super(p, {
			sprite : "aBT1",
			sheet : "sBT1",
			frame : 0,
		    gravity : 0,
			z : 1,
			encendida : true
		});

		this.add("2d,animation");
		this.play("mABT1On");

		this.on("bump.bottom", function(colision) {
			if (colision.obj.isA("Jugador") && this.p.encendida === true) {
				this.p.encendida = false;
				this.play("mABT1Off");
                
              
				var tAwaked = new Q[this.p.TUp]({
					x : this.p.x,
					y : this.p.y
				});

				this.stage.insert(tAwaked);

				tAwaked.animate({
					y : this.p.y-300,
				}, 1.5, {
					callback : function() {
						this.p.sensor = false;
						this.add("2d");
					}
				});

			}

		});

	}
});
