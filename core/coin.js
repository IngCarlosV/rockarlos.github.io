Q.animations("aCoin", 
{
	mBlink : 
	{
		frames : [1, 2, 3],
		rate : 1 / 3,
		loop : true
	}
});

Q.Sprite.extend("Coin", 
{
	init : function(p) 
	{
		this._super(p, 
		{
			sprite : "aCoin",
			sheet : "sCoin",
			frame : 1,
			gravity : 0,
			sensor: true,
			z: 1
		});
		this.add("2d,animation");
		this.play("mBlink");
	}
});
