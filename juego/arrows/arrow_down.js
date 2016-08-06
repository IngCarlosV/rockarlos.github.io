Q.Sprite.extend("ArrowDown", {
	init : function(p) {
		this._super(p, {
			sheet : "sArrowDown",
			frame : 0,
			gravity : 0,
			sensor: true,
			z: 1
		});
		
	}
});
