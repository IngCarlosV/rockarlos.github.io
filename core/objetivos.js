Q.Sprite.extend("Genesp", 
{
	init : function(p) 
	{
		this._super(p, {
			sheet : "sGenesp",
			frame : 0,
			vx : 0,
			sensor : true,
			z : 1
		});
		this.add("2d");
	}
});

//objetivos
Q.Sprite.extend("TraerGenesp", 
{
	init : function(p) 
	{
		p.CInvocado = "Genesp";
	
		this._super(p, 
		{
			sheet : "sObjetivos",
			frame : 0,
			gravity : 0,
			z : 3,
			estadoTF : true
		});
		this.add("2d");
		
		this.on("bump.bottom", function(colision) 
		{
			if (colision.obj.isA("Jugador") && this.p.estadoTF === true)
			{
				this.p.estadoTF = false;
				this.destroy();
				var invocado = new Q[this.p.CInvocado](
				{
					x : this.p.x+100,
					y : this.p.y-200
				});			
				this.stage.insert(invocado);
			}

		});

	}
});
