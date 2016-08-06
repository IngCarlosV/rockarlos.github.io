Q.animations("aBT12", {
	mABT12On : {
		frames : [0,1,2],
		rate : 1 / 3,
		loop : true
	},
	mABT12Off : {
		frames : [3],
		rate : 1 / 2,
		loop : false
	}
});

Q.animations("aT12", {
	mAT12 : {
		frames : [0,1],
		rate : 2,
		loop : true
	}
});



Q.Sprite.extend("T12", {
	init : function(p) {
		
		this._super(p, {
			sprite: "aT12",
			sheet : "sT12",
			frame : 1,
			vx : 0,
			sensor : true,
			z : 1
		});
		
		this.add("animation,tween,aiBounce");
		this.play("mAT12");
	}
});

Q.Sprite.extend("BT12", {
	init : function(p) {
		p.TUp="T12";
		this._super(p, {
			sprite : "aBT12",
			sheet : "sBT12",
			frame : 0,
		    gravity : 0,
			z : 1,
			encendida : true
		});

		this.add("2d,animation");
		this.play("mABT12On");

		this.on("bump.bottom", function(colision) {
			if (colision.obj.isA("Jugador") && this.p.encendida === true) {
				this.p.encendida = false;
				this.play("mABT12Off");
                
              
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
