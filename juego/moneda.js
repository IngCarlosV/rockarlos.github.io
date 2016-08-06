Q.animations("animacionMoneda", {
	brillar : {
		frames : [1, 2, 3],
		rate : 1 / 3,
		loop : true
	}
});

Q.Sprite.extend("Moneda", {
	init : function(p) {
		this._super(p, {
			sprite : "animacionMoneda",
			sheet : "moneda",
			frame : 1,
			//DESHABILITAMOS LA GRAVEDAD
			gravity : 0,
			sensor: true,
			z: 1
		});
		this.add("2d,animation");
		this.play("brillar");
	}
});
