Q.Sprite.extend("Pipeline2W1", 
{
	init : function(p) 
	{
		this._super(Q._extend(p, 
		{
			sheet : "sPipelines",
			frame : 1,
			z:2
		}));
		this.add("2d");
	}	
});

Q.Sprite.extend("Pipeline2W0_1", 
{
	init : function(p) 
	{
		this._super(p, 
		{
			sheet : "sPipelines",
			frame : 2,
			z:2
		});
		this.add("2d");
	}	
});

Q.Sprite.extend("Pipeline2W0_0", 
{
	init : function(p) 
	{
		this._super(Q._extend(p, 
		{
			sheet : "sPipelines",
			frame : 6,
			z: 2
		}));
	}
});
