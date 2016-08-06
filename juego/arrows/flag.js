Q.Sprite.extend("Flag", {
	init : function(p) {
		this._super(p, {
			sheet : "sFlag",
			frame : 0,
			gravity : 0,
			sensor: true,
			z: 1
		});
		
	}
});
