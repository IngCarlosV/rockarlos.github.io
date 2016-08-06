//Grupo de animaciones de Goomba
Q.animations("aTecnos", {
	caminar : {
		frames : [0],
		rate : 1 / 2,
		loop : true
	}
	});

Q.Sprite.extend("Tecnos", {
	init : function(p) {
		this._super(p, {
			sprite : "aTecnos",
			sheet : "sTecnos",
			frame : 0,
			vx : 130,
			z : 1
		});
		this.add("2d, aiBounce, animation,tween");
		//Ejecuta la animacion caminar siempre
		this.play("caminar");
}
});
