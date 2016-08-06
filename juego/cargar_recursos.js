//D66
//indicar en una cadena los recursos: audios, imagenes, tmx, json
//callback para configurar los sprites
var recursos = "flag.png,family.png,juan.png,raymundo.png,clouds/c_logs.png,clouds/c_bitacoras.png,clouds/c_usuarios.png,clouds/c_configuracion.png,clouds/c_monitor.png,umb/umb0.png,umb/umb1_0.png,umb/umb1_1.png,umb/umb1_2.png,umb/umb2.png,tecnos.png,arrow_down.png,arrow_left0.png,arrow_left1.png,arrow_left_top.png,uesx_entrada.png,bt0.png,bt1.png,bt2.png,bt3.png,bt4.png,bt5.png,bt6_0.png,bt6_1.png,bt7.png,bt8.png,bt9.png,bt10.png,bt11.png,bt12.png,t0.png,t1.png,t2.png,t3.png,t4.png,t5.png,t6_0.png,t6_1.png,t7.png,t8.png,t9.png,t10.png,t11.png,t12.png,objetivos.png,genesp.png,justificacion.png,mosaicos_objetos2.png,inin.png,player_sprite_sheet.png, mosaicos_objetos.png, mundo1.tmx, mosaicos_escenario_32x32.png, mosaicos_mario_enano_30x30.png, mosaicos_enemigos_32x32.png, mosaicos_enemigos_32x46.png,escenarios2.png,mosaicos_subway.png,tuberias.png,moneda.png,mundo1_subway.tmx,level_end.tmx";


Q.load(recursos, function() 
{
	//se ejecuta hasta que los recursos estén listos
	//compilar el spritesheets
	Q.sheet("sFamily","family.png",
	{
		tileh : 64,
		tilew : 128
	});
	
	Q.sheet("sRaymundo","raymundo.png",
	{
		tileh:64,
		tilew:32
	});
	
	Q.sheet("sJuan","juan.png",
	{
		tileh:64,
		tilew:32
	});
	Q.sheet("sTecnos","tecnos.png",
	{
		tileh: 256,
		tilew: 512
	});
	
	/*************************************************/
	
	Q.sheet("sFlag","flag.png",{
		tileh:288,
		tilew:64
	});
	
	Q.sheet("sArrowDown","arrow_down.png",{
		tileh:64,
		tilew:64
	});
	
	Q.sheet("sArrowLeft0","arrow_left0.png",{
		tileh:64,
		tilew:64
	});
	
	Q.sheet("sArrowLeft1","arrow_left1.png",{
		tileh:96,
		tilew:64
	});
	
	Q.sheet("sArrowLeftTop","arrow_left_top.png",{
		tileh:64,
		tilew:64
	});
	
	Q.sheet("sBT0","bt0.png",{
		tileh:32,
		tilew:128
	});
	Q.sheet("sBT1","bt1.png",{
		tileh:32,
		tilew:128
	});
	Q.sheet("sBT2","bt2.png",{
		tileh:32,
		tilew:128
	});
	Q.sheet("sBT3","bt3.png",{
		tileh:32,
		tilew:128
	});
	Q.sheet("sBT4","bt4.png",{
		tileh:32,
		tilew:128
	});
	Q.sheet("sBT5","bt5.png",{
		tileh:32,
		tilew:128
	});
	Q.sheet("sBT6_0","bt6_0.png",{
		tileh:32,
		tilew:128
	});
	Q.sheet("sBT6_1","bt6_1.png",{
		tileh:32,
		tilew:128
	});
	Q.sheet("sBT7","bt7.png",{
		tileh:32,
		tilew:128
	});
	Q.sheet("sBT8","bt8.png",{
		tileh:32,
		tilew:128
	});
	Q.sheet("sBT9","bt9.png",{
		tileh:32,
		tilew:128
	});
	Q.sheet("sBT10","bt10.png",{
		tileh:32,
		tilew:128
	});
	Q.sheet("sBT11","bt11.png",{
		tileh:32,
		tilew:128
	});
	Q.sheet("sBT12","bt12.png",{
		tileh:32,
		tilew:128
	});
	
	/*-------------------------------------------*/
		
	Q.sheet("sT0","t0.png",
	{
		tileh:64,
		tilew:96
	});
	Q.sheet("sT1","t1.png",
	{
		tileh:64,
		tilew:192
	});
	
	Q.sheet("sT2","t2.png",
	{
		tileh:96,
		tilew:96
	});
	
	Q.sheet("sT3","t3.png",
	{
		tileh:64,
		tilew:64
	});
	
	Q.sheet("sT4","t4.png",
	{
		tileh:96,
		tilew:64
	});
	
	Q.sheet("sT5","t5.png",
	{
		tileh:64,
		tilew:64
	});
	
	Q.sheet("sT6_0","t6_0.png",
	{
		tileh:160,
		tilew:160
	});
	
	Q.sheet("sT6_1","t6_1.png",
	{
		tileh:128,
		tilew:64
	});
	
	Q.sheet("sT7","t7.png",
	{
		tileh:96,
		tilew:96
	});
	
	Q.sheet("sT8","t8.png",
	{
		tileh:96,
		tilew:64
	});
	
	Q.sheet("sT9","t9.png",
	{
		tileh:96,
		tilew:64
	});
	
	Q.sheet("sT10","t10.png",
	{
		tileh:96,
		tilew:96
	});
	
	Q.sheet("sT11","t11.png",
	{
		tileh:64,
		tilew:96
	});
	
	
	Q.sheet("sT12","t12.png",
	{
		tileh:96,
		tilew:96
	});
	
	/*--------------------------------------------*/
	Q.sheet("sUesxEntrada","uesx_entrada.png",
	{
		tileh:288,
		tilew:576
	});
	
	Q.sheet("justificacion","justificacion.png",
	{
		tileh:141,
		tilew:816
	});
	
	Q.sheet("objetivos","objetivos.png",
	{
		tileh:288,
		tilew:576
	});
	
	Q.sheet("genesp","genesp.png",
	{
		tileh:288,
		tilew:576
	});
	
	Q.sheet("sJugador", "player_sprite_sheet.png",
   {
		tileh:64,
		tilew:32
	});
	
	Q.sheet("enemigosBajos", "mosaicos_enemigos_32x32.png", 
	{
		tileh:32,
		tilew:32
	});
	Q.sheet("tortugas","mosaicos_enemigos_32x46.png", 
	{
		tileh:46,
		tilew:32
	});
	//compilar Sprites para las tuberias
	Q.sheet("tuberias", "tuberias.png", 
	{
		tileh:64,
		tilew:64
	});	
	Q.sheet("objetos","mosaicos_objetos.png",
	{
		tileh:32,
		tilew:32
	});
	
	Q.sheet("objetos2","mosaicos_objetos2.png",
	{
		tileh:32,
		tilew:32
	});
	
	Q.sheet("moneda","moneda.png",
	{
		tileh:30,
		tilew:20
	});
	
	//ejecutamos la escena
	//cada invocan este metodo insertan una escena en su juego
	//el primer que inserta es la escena 0
Q.stageScene("mundo1",
	{
		//sort = HABILITA EL ORDENAMIENTO CON LA PROPIEDAD Z
		sort:true
	});
	//inserta la segunda escena y le asigna el numero 0
	Q.stageScene("score", 1);	
});

//le pegamos una bandera (pausado) al objeto
//que represetna todo nuestro juego
Q.pausado = false;

//-- con el metodo click escuchamos cuando alguien
//selecciona al boton cuyo id  es #boton-pausa (jquery)
$("#boton-pausa").click(function() {
	//aqui va el codigo que queremos que se ejecute
	//cuando alguien le da click al boton
	
	//SOLUCION BREVE EJERCICIO
	Q.audio.play("pausa.mp3");
	
	//this en este caso se refiere al boton que genero click
	var esteBoton = $(this);
	

	//SI EL JUEGO ESTA PAUSADO y el usuario presiona el boton
	//REANUDAMOS EL JUEGO
	if (Q.pausado === true) {
		
		// unpause reanuda el juego
		//con stage(0) es obtener la escena cuyo indice es 0
		//que corresponde a la escena de los enemigos
		Q.stage(0).unpause();
		
		//REANUDAMOS EL AUDIO
		//EN  ESTE MOMENTO ES MUY DIFICIL
		//EN QUINTUS hacer que una cancion siga desde el mmomento
		//en que la pasaron
		Q.audio.play("tema_superficie.mp3");
		
		Q.pausado = false;
		esteBoton.html("Pausar");

	}
});

/*********  q.load  *****************/
