//axure rp


Q.animations("aBT3", {
	mABT3On : {
		frames : [0,1,2],
		rate : 1 / 3,
		loop : true
	},
	mABT3Off : {
		frames : [3],
		rate : 1 / 2,
		loop : false
	}
});

Q.animations("aT3", {
	mAT3 : {
		frames : [0],
		rate : 1,
		loop : false
	}
});



Q.Sprite.extend("T3", {
	init : function(p) {
		
		this._super(p, {
			sprite: "aT3",
			sheet : "sT3",
			frame : 1,
			vx : 0,
			sensor : true,
			z : 1
		});
		
		this.add("animation,tween,aiBounce");
		this.play("mAT3");
	}
});

Q.Sprite.extend("BT3", {
	init : function(p) {
		p.TUp="T3";
		this._super(p, {
			sprite : "aBT3",
			sheet : "sBT3",
			frame : 0,
		    gravity : 0,
			z : 1,
			encendida : true
		});

		this.add("2d,animation");
		this.play("mABT3On");

		this.on("bump.bottom", function(colision) {
			if (colision.obj.isA("Jugador") && this.p.encendida === true) {
				this.p.encendida = false;
				this.play("mABT3Off");
                
              
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
