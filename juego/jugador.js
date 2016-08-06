//Definir animaciones: caminar, saltar
//frames, velocidad de frame,
Q.animations("animacionesMario", {
	caminar: 
	{
			frames: [1,2,3],
			rate: 1/6,
			loop: false
	},
	saltar: 
	{
			frames:[4],
			rate: 1/2,
			loop: false
	},
	quieto:
	{
			frames: [0],
			rate: 1/2,
			loop: false
	}
});


Q.Sprite.extend("Jugador", {
	init : function(p) {
		this._super(p, {
			sprite : "animacionesMario",
			sheet : "sJugador",
			frame : 1,
			jumpSpeed : -600,
			speed : 1500,
			z : 3,
			alturaEscenario : Q("TileLayer").first().p.h
		});
		this.add("2d, platformerControls, animation, tween");

		this.on("hit", function(colision) 
		{
			if (colision.obj.isA("Family")) 
			{
				this.destroy();
			}	

		});

		//escucho cuando colisiono por abajo con la tuberia de entrada
		this.on("bump.bottom", function(colision) {
			//revisar si colsione con una TuberiaEntrada y su pulse flecha abajo
			if (colision.obj.isA("Tuberia") && Q.inputs["down"]) {
				this.p.sensor = true;
				this.del("2d");
				this.animate({
					//anima a mario en la cordenada y de la tuberia
					y : this.p.y + 30
				}, 0.5, {
					//ejecutamos esta funcion una vez que el hongo salio por completo
					//de su caja
					callback : function() {
						//regresamos al hongo el modulo 2d para detectar colisones
						//deshabilitamos la propiedad sensor
						this.p.sensor = false;
						this.add("2d");
						Q.stageScene("mundo1Subterraneo", 2, {
							//sort = HABILITA EL ORDENAMIENTO CON LA PROPIEDAD Z
							sort : true
						});
					}
				});
			}
		});

		//escuchar colision por la derecha con la tuberia de salida
		this.on("bump.right", function(colision) {

			if (colision.obj.isA("TuberiaSalida") && Q.inputs["right"]) {
				this.p.sensor = true;
				this.del("2d");
				this.animate({
					//anima a mario en la cordenada y de la tuberia
					x : this.p.x + 30
				}, 0.5, {
					//ejecutamos esta funcion una vez que el hongo salio por completo
					//de su caja
					callback : function() {
						//darle stop al mundo subterraneo
						this.stage.stop();
						//activar la escena previa (mundo1)
						this.p.escena_previa.start();

						//el atributo stage de mario debe ser el mundo1
						//this.stage = this.p.escena_previa;

						Q.stageScene("mundo1", {
							propiedadesMario : this.p
						});

						//destruimos este mario y su escena
						this.stage.destroy();
					}
				});
			}
		});
		
		//escucho cuando colisiono por abajo con la tuberia de entrada
		this.on("bump.right", function(colision) {
			//revisar si colsione con una TuberiaEntrada y su pulse flecha abajo
			if (colision.obj.isA("UesxEntrada") && Q.inputs["right"]) {
				this.p.sensor = true;
				this.del("2d");
				this.animate({
					//anima a mario en la cordenada y de la tuberia
					x : this.p.x + 370
				},3.5, {
					//ejecutamos esta funcion una vez que el hongo salio por completo
					//de su caja
					callback : function() {
						//regresamos al hongo el modulo 2d para detectar colisones
						//deshabilitamos la propiedad sensor
						this.p.sensor = false;
						this.add("2d");
						Q.stageScene("level_end", 2, {
							//sort = HABILITA EL ORDENAMIENTO CON LA PROPIEDAD Z
							sort : true
						});
					}
				});
			}
		});
	},
	//esta funcion se repite continuamente (Game Loop)
	step : function() 
	{

		if (this.p.direction === "left" && Q.inputs["right"]) 
		{
			this.p.flip = false;
		}
		if (this.p.direction == "right" && Q.inputs["left"]) 
		{
			this.p.flip = "x";
		}
		if (this.p.vx != 0) 
		{
			this.play("caminar");
		}
		if (this.p.vy < 0) 
		{
			this.play("saltar");
		}
		if (this.p.vy === 0 && this.p.vx === 0) {
			this.play("quieto");
		}
	    
	}
});
