Q.scene("score", function(stage) 
{
	var anchoCanvas = Q.width;
	
	Q.state.set("tiempo", 1200);

	var textoPuntaje = new Q.UI.Text(
	{
		label : "CARLOS V.\n14072016",
		color : "white",
		y : 20,
		x : anchoCanvas / 8,
		size : 14,
		family : 'Press Start'
	});

	stage.insert(textoPuntaje);

	var contadorTiempo = new Q.ContadorTiempo(
	{
		y : 40,
		x : 7 * anchoCanvas / 8,
	});

	var textoTiempo = new Q.UI.Text(
	{
		label : "TIEMPO",
		color : "white",
		y : 20,
		x : 7 * anchoCanvas / 8,
		size : 14,
		family : 'Press Start'
	});
	
	stage.insert(contadorTiempo);
	stage.insert(textoTiempo);
	
	var idIntervalo = setInterval(function() 
	{
		var tiempo = Q.state.get("tiempo");
		if (tiempo > 0 && Q.pausado === false) 
		{
			Q.state.dec("tiempo", 1);
		} else if (tiempo === 0 && Q.pausado === false) 
		{
			clearInterval(idIntervalo);
		}
	}, 1000);
	
	var textoMundo = new Q.UI.Text({
		label : "MUNDO\nUESX",
		color : "white",
		y : 20,
		x : 5 * anchoCanvas / 8,
		size : 14,
		family : 'Press Start'
	});
	stage.insert(textoMundo);
});
Q.UI.Text.extend("ContadorTiempo", {
	init : function(p) {
		this._super(p, {
			label : "1200",
			color : "white",
			size : 14,
			family : 'Press Start'
		});
		Q.state.on("change.tiempo", this, "actualizarTiempo");
	},

	actualizarTiempo : function(tiempo) 
	{
		console.log("tiempo");
		this.p.label = "" + tiempo;
	}
});

