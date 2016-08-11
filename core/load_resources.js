var recursos = "end_song.png,tw0.mp3,tw1.mp3,tw2.mp3,flag.png,family.png,juan.png,raymundo.png,clouds/c_logs.png,clouds/c_bitacoras.png,clouds/c_usuarios.png,clouds/c_configuracion.png,clouds/c_monitor.png,umb/umb0.png,umb/umb1_0.png,umb/umb1_1.png,umb/umb1_2.png,umb/umb2.png,tecnos.png,arrow_down.png,arrow_left0.png,arrow_left1.png,arrow_left_top.png,uesx.png,bt_on.png,bt_off.png,t0.png,t1.png,t2.png,t3.png,t4.png,t5.png,t6_0.png,t6_1.png,t7.png,t8.png,t9.png,t10.png,t11.png,t12.png,objetivos.png,genesp.png,justificacion.png,mosaicos_objetos2.png,inin.png,player_sprite_sheet.png, mosaicos_escenario_32x32.png,escenarios2.png,mosaicos_subway.png,tuberias.png,moneda.png,w0.tmx,w1.tmx,w2.tmx";

Q.load(recursos, function() 
{
	Q.sheet("sEndSong","end_song.png",
	{
		tileh: 32,
		tilew: 32
	});
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
	
	Q.sheet("sFlag","flag.png",
	{
		tileh:288,
		tilew:64
	});
	
	Q.sheet("sArrowDown","arrow_down.png",
	{
		tileh:64,
		tilew:64
	});
	
	Q.sheet("sArrowLeft0","arrow_left0.png",
	{
		tileh:64,
		tilew:64
	});
	
	Q.sheet("sArrowLeft1","arrow_left1.png",
	{
		tileh:96,
		tilew:64
	});
	
	Q.sheet("sArrowLeftTop","arrow_left_top.png",
	{
		tileh:64,
		tilew:64
	});
	
	Q.sheet("sBTOn","bt_on.png",{
		tileh:32,
		tilew:128
	});
	
	Q.sheet("sBTOff","bt_off.png",{
		tileh:32,
		tilew:128
	});
			
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
	
	Q.sheet("sUesx","uesx.png",
	{
		tileh:288,
		tilew:576
	});
	
	Q.sheet("sJustificacion","justificacion.png",
	{
		tileh:141,
		tilew:816
	});
	
	Q.sheet("sObjetivos","objetivos.png",
	{
		tileh:288,
		tilew:576
	});
	
	Q.sheet("sGenesp","genesp.png",
	{
		tileh:288,
		tilew:576
	});
	
	Q.sheet("sJugador", "player_sprite_sheet.png",
   {
		tileh:64,
		tilew:32
	});
	
	Q.sheet("sPipelines", "tuberias.png", 
	{
		tileh:64,
		tilew:64
	});	

	Q.sheet("sObjetos","mosaicos_objetos2.png",
	{
		tileh:32,
		tilew:32
	});
	
	Q.sheet("sCoin","moneda.png",
	{
		tileh:30,
		tilew:20
	});
	
Q.stageScene("w0",
{
	sort:true
});
	Q.stageScene("score", 1);	
});
Q.pausado = false;

