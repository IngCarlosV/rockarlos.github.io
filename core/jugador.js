Q.animations("animacionesJugador", 
{
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


Q.Sprite.extend("Jugador", 
{
	init : function(p) 
	{
		this._super(p, 
		{
			sprite : "animacionesJugador",
			sheet : "sJugador",
			frame : 1,
			jumpSpeed : -600,
			speed : 1200,
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


		this.on("bump.bottom", function(colision) 
		{
			if (colision.obj.isA("Pipeline2W1") && Q.inputs["down"]) 
			{
				this.p.sensor = true;
				this.del("2d");
				this.animate(
			    {
					y : this.p.y + 30
				}, 0.5, 
				{
					callback : function() 
					{
						this.p.sensor = false;
						this.add("2d");
						Q.stageScene("w1", 2, 
						{
							sort : true
						});
					}
				});
			}
		});

		this.on("bump.right", function(colision) 
		{
			if (colision.obj.isA("Pipeline2W0_0") && Q.inputs["right"]) 
			{
				this.p.sensor = true;
				this.del("2d");
				this.animate(
				{
					x : this.p.x + 30
				}, 0.5, 
				{
					callback : function() 
					{
						this.stage.stop();
						this.p.escena_previa.start();

						Q.stageScene("w0", 
						{
							propiedadesJugador: this.p
						});

						this.stage.destroy();
					}
				});
			}
		});
		
		this.on("bump.right", function(colision) 
		{
			if (colision.obj.isA("Uesx") && Q.inputs["right"]) 
			{
				this.p.sensor = true;
				this.del("2d");
				this.animate(
				{
					x : this.p.x + 370
				},10, 
				{
					callback : function() 
					{
						this.p.sensor = false;
						this.add("2d");
						Q.stageScene("w2", 2, 
						{
							sort : true
						});
					}
				});
			}
		});
	},

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
