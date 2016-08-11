Q.scene("w0", function(stage) 
{
	var vieneDeTuberia = false;
	Q.stageTMX("w0.tmx", stage);
	var jugador = Q("Jugador").first();

	if (stage.options.propiedadesJugador) 
	{
		jugador = new Q.Jugador(stage.options.propiedadesJugador);
		vieneDeTuberia = true;
	} else 
	{
		jugador = new Q.Jugador(
		{
			x:64,
			y:0
		});
	}
	
	stage.insert(jugador);
	var capaFondo = Q("TileLayer").first();
	
	stage.add("viewport").follow(jugador, 
	{
		x : true,
		y : true
	}, 
	{
		minX : 32,
		maxX : capaFondo.p.w - 32,
		minY : 0,
		maxY : capaFondo.p.h
	});
	 
	
	if (vieneDeTuberia === true) 
	{
		var tuberia = Q("Pipeline2W0_1", 0).first();
		jugador.p.x = tuberia.p.x;
		jugador.p.y = tuberia.p.y;

		jugador.p.sensor = true;
		jugador.del("2d");

		jugador.animate(
		{
			y : jugador.p.y - jugador.p.h - tuberia.p.h
		}, 0.5, 
		{
			callback : function() 
			{
				jugador.p.sensor = false;
				jugador.add("2d");				
			}
		});
	}
	
    stage.insert(new Q.UI.Button(
    {
      asset:"clouds/c_monitor.png",
      y: 350,
      x: 5900
    }, function() 
    {
    	window.open("../Monitor.html","_blank");
    	this.p.asset="umb/umb1_1.png";
    	this.p.x = this.p.x-102.5;
    }));
    
    stage.insert(new Q.UI.Button(
    {
      asset: "clouds/c_bitacoras.png",
      y: 350,
      x: 5600
    }, function() 
    {
    	window.open("../Bitacoras.html","_blank");
    	this.p.asset="umb/umb1_0.png";
    	this.p.y = this.p.y-150;
    	this.p.x = this.p.x+100;
    }));
        
    stage.insert(new Q.UI.Button(
    {
      asset: "clouds/c_usuarios.png",
      y: 250,
      x: 5900
    }, function() 
    {
    	window.open("../Usuarios.html","_blank");
    	this.p.asset="umb/umb0.png";
    	this.p.y= this.p.y+47;
    	this.p.x = this.p.x-103.7;
    }));
    
    stage.insert(new Q.UI.Button(
    {
      asset: "clouds/c_logs.png",
      y: 350,
      x: 6200
    }, function() 
    {
    	window.open("../Logs.html","_blank");
    	this.p.asset="umb/umb1_2.png";
    	this.p.y = this.p.y-150;
    	this.p.x = this.p.x+100;
    }));
    
    stage.insert(new Q.UI.Button(
    {
	  asset: "clouds/c_configuracion.png",
      y: 450,
      x: 5900
    }, function() 
    {
    	window.open("../Configuracion.html","_blank");
    	this.p.asset="umb/umb2.png";
    	this.p.y = this.p.y-47.5;
    	this.p.x = this.p.x-100;
    }));
    
    Q.audio.stop();
	Q.audio.play("tw0.mp3", 
	{
		loop : true
	});
	
});
