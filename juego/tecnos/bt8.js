Q.animations("aBT8", {
	mABT8On : {
		frames : [0,1,2],
		rate : 1 / 3,
		loop : true
	},
	mABT8Off : {
		frames : [3],
		rate : 1 / 2,
		loop : false
	}
});

Q.animations("aT8", {
	mAT8 : {
		frames : [0],
		rate : 1,
		loop : true
	}
});



Q.Sprite.extend("T8", {
	init : function(p) {
		
		this._super(p, {
			sprite: "aT8",
			sheet : "sT8",
			frame : 1,
			vx : 0,
			sensor : true,
			z : 1
		});
		
		this.add("animation,tween,aiBounce");
		this.play("mAT8");
	}
});

Q.Sprite.extend("BT8", {
	init : function(p) {
		p.TUp="T8";
		this._super(p, {
			sprite : "aBT8",
			sheet : "sBT8",
			frame : 0,
		    gravity : 0,
			z : 1,
			encendida : true
		});

		this.add("2d,animation");
		this.play("mABT8On");

		this.on("bump.bottom", function(colision) {
			if (colision.obj.isA("Jugador") && this.p.encendida === true) {
				this.p.encendida = false;
				this.play("mABT8Off");
                
              
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
