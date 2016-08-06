Q.Sprite.extend("HongoVida2", {
	init : function(p) {
		this._super(p, {
			sheet : "justificacion",
			frame : 0,
			vx : 0,
			sensor : true,
			z : 1,
		});
		//this.add("animation,tween,aiBounce");
		this.add("2d");
	}
});

//extendemos el hongo vida para que sea un hongo crecer
Q.HongoVida2.extend("HongoCrece2", {
	init : function(p) {
		this._super(Q._extend(p, {
			frame : 0,
		}));
	}
});

Q.Sprite.extend("Caja2", {
	init : function(p) {
		p.claseRegalo2 = "HongoVida2";
	
		
		this._super(p, {
			sheet : "objetos2",
			frame : 0,
			gravity : 0,
			z : 4,
			encendida : true
		});

		this.add("2d");

		this.on("bump.top", function(colision) {


			if (colision.obj.isA("Jugador") && this.p.encendida === true) {
				
				this.p.encendida = false;
				var regalo2 = new Q[this.p.claseRegalo2]({
					x : this.p.x,
					y : this.p.y-500
				});

				//this.stage == AL ESCENARIO EN QUE VIVE ESTE OBJETO
				this.stage.insert(regalo2);



			}

		});

	}
});
