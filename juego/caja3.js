Q.Sprite.extend("HongoVida3", {
	init : function(p) {
		this._super(p, {
			sheet : "genesp",
			frame : 0,
			vx : 0,
			//deshabilitamos temporalmente las colisiones
			sensor : true,
			z : 1
		});
		this.add("2d");
	}
});

Q.Sprite.extend("Caja3", {
	init : function(p) {
		p.claseRegalo3 = "HongoVida3";
	
		this._super(p, {
			sheet : "objetivos",
			frame : 0,
			//DESHABILITAMOS LA GRAVEDAD
			gravity : 0,
			// z es mayor se pone encima de los objetos2 que tienen un valor de z menor
			z : 4,
			
			//------------ NUESTRAS PROPIEDADES ----------
			encendida : true //mientras no entrege el regalo esta Caja2, su estado es de encendida=true
		});
		this.add("2d");
		
		this.on("bump.bottom", function(colision) {

			//si a la Caja2 le pego un jugador y todavia esta encendida esta Caja2
			if (colision.obj.isA("Jugador") && this.p.encendida === true) {
				//la Caja2 ya no tiene mas regalos que entregar
				this.p.encendida = false;

				this.destroy();
				//insertamos al regalo EN EL ESCENARIO
				var regalo3 = new Q[this.p.claseRegalo3]({
					//this.p.x = es la cordenada en x de la Caja2
					x : this.p.x+100,
					y : this.p.y-200
				});

				//this.stage == AL ESCENARIO EN QUE VIVE ESTE OBJETO
				this.stage.insert(regalo3);


			}

		});

	}
});
