Q.animations("aBT11", {
	mABT11On : {
		frames : [36,37,38],
		rate : 1 / 3,
		loop : true
	},
	mABT11Off : {
		frames : [0],
		rate : 1 / 2,
		loop : false
	}
});

Q.animations("aT11", {
	mAT11 : {
		frames : [0,1,2,3,4,5],
		rate : 1/3,
		loop : true
	}
});



Q.Sprite.extend("T11", {
	init : function(p) {
		
		this._super(p, {
			sprite: "aT11",
			sheet : "sT11",
			frame : 1,
			vx : -90,
			sensor : true,
			z : 1
		});
		
		this.add("animation,tween,aiBounce");
		this.play("mAT11");
	},
	step : function() 
		{
				if (this.p.vx >-50) 
				{
					this.p.flip = "x";
				}			
		}

});

Q.Sprite.extend("BT11", {
	init : function(p) {
		p.TUp="T11";
		this._super(p, {
			sprite : "aBT11",
			sheet : "sBTOn",
			frame : 0,
		    gravity : 0,
			z : 1,
			estadoTF : true
		});

		this.add("2d,animation");
		this.play("mABT11On");

		this.on("bump.bottom", function(colision) {
			if (colision.obj.isA("Jugador") && this.p.estadoTF === true) {
				this.p.estadoTF = false;
				this.p.sheet="sBTOff";
				this.play("mABT11Off");
                
              
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
