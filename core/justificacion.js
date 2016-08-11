Q.Sprite.extend("Justificacion", 
{
	init : function(p) 
	{
		this._super(p, 
		{
			sheet : "sJustificacion",
			frame : 0,
			vx : 0,
			sensor : true,
			z : 1,
		});
		this.add("2d");
	}
});

Q.Sprite.extend("TraerJustificacion", 
{
	init : function(p) 
	{
		p.CInvocado = "Justificacion";
			
		this._super(p, 
		{
			sheet : "sObjetos",
			frame : 0,
			gravity : 0,
			z : 3,
			estadoTF : true
		});

		this.add("2d");

		this.on("bump.top", function(colision) 
		{
			if (colision.obj.isA("Jugador") && this.p.estadoTF === true) 
			{	
				this.p.estadoTF = false;
				var invocado = new Q[this.p.CInvocado](
				{
					x : this.p.x,
					y : this.p.y-500
				});
				this.stage.insert(invocado);
			}
		});
	}
});
