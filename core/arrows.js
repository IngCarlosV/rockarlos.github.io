Q.Sprite.extend("ArrowDown", 
{
	init : function(p) 
	{
		this._super(p, 
		{
			sheet : "sArrowDown",
			frame : 0,
			gravity : 0,
			sensor: true,
			z: 1
		});	
	}
});

Q.Sprite.extend("ArrowLeft0", 
{
	init : function(p) 
	{
		this._super(p, 
		{
			sheet : "sArrowLeft0",
			frame : 0,
			gravity : 0,
			sensor: true,
			z: 1
		});	
	}
});

Q.Sprite.extend("ArrowLeft1", 
{
	init : function(p) 
	{
		this._super(p, 
		{
			sheet : "sArrowLeft1",
			frame : 0,
			gravity : 0,
			sensor: true,
			z: 1
		});
	}
});

Q.Sprite.extend("ArrowLeftTop", 
{
	init : function(p) 
	{
		this._super(p, 
		{
			sheet : "sArrowLeftTop",
			frame : 0,
			gravity : 0,
			sensor: true,
			z: 1
		});
		
	}
});
