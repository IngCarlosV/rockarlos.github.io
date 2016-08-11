Q.animations("aBT7", {
	mABT7On : {
		frames : [24,25,26],
		rate : 1 / 3,
		loop : true
	},
	mABT7Off : {
		frames : [0],
		rate : 1 / 2,
		loop : false
	}
});

Q.animations("aT7", {
	mAT7 : {
		frames : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
		rate : 1/8,
		loop : true
	}
});



Q.Sprite.extend("T7", {
	init : function(p) {
		
		this._super(p, {
			sprite: "aT7",
			sheet : "sT7",
			frame : 1,
			vx : 0,
			sensor : true,
			z : 1
		});
		
		this.add("animation,tween,aiBounce");
		this.play("mAT7");
	}
});

Q.Sprite.extend("BT7", {
	init : function(p) {
		p.TUp="T7";
		this._super(p, {
			sprite : "aBT7",
			sheet : "sBTOn",
			frame : 0,
		    gravity : 0,
			z : 1,
			estadoTF : true
		});

		this.add("2d,animation");
		this.play("mABT7On");

		this.on("bump.bottom", function(colision) {
			if (colision.obj.isA("Jugador") && this.p.estadoTF === true) {
				this.p.estadoTF = false;
				this.p.sheet="sBTOff";
				this.play("mABT7Off");
            
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
