Q.animations("aBT8", {
	mABT8On : {
		frames : [27,28,29],
		rate : 1 / 3,
		loop : true
	},
	mABT8Off : {
		frames : [0],
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
			sheet : "sBTOn",
			frame : 0,
		    gravity : 0,
			z : 1,
			estadoTF : true
		});

		this.add("2d,animation");
		this.play("mABT8On");

		this.on("bump.bottom", function(colision) {
			if (colision.obj.isA("Jugador") && this.p.estadoTF === true) {
				this.p.estadoTF = false;
				this.p.sheet="sBTOff";
				this.play("mABT8Off");
                
              
				var tInvocada = new Q[this.p.TUp]({
					x : this.p.x,
					y : this.p.y
				});

				this.stage.insert(tInvocada);

				tInvocada.animate({
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
