function tour1_1(){
	tour1 = new EnjoyHint({
	   onEnd:function(){
		   $("#img1_1").hide();
		   $("#img2_1").show();
		   setTimeout(function(){
			   tour2_1();
		   }, 100);
	  }
	});
	var pasos_tour_1 = [
	  {
		'click #areaNuevo' : 'Al seleccionar esta opcion ingresaras a el procesador de texto',
		'showSkip' : false,
		scrollAnimationSpeed : 1000
	  }
	];
	tour1.set(pasos_tour_1);
	tour1.run();
}

function tour2_1(){
	var tour2 = new EnjoyHint({
		onEnd:function(){
		   $("#img2_1").hide();
		   $("#img3_1").show();
		   setTimeout(function(){
			   tour3_1();
		   }, 100);
	  }
	});
	var pasos_tour_2 = [
	   {
		'next #areaBarraHerramientas' : 'Barra de herramientas',
		"nextButton" : {className: "mySkip", text: "Seguir"},
		'showSkip' : false
	  },
	  {
		'next #areaBarraTitulo' : 'Barra de titulo del documento',
		"nextButton" : {className: "mySkip", text: "Seguir"},
		'showSkip' : false
	  },
	  {
		'next #areaCuadroControl' : 'Cuadro de control',
		"nextButton" : {className: "mySkip", text: "Seguir"},
		'showSkip' : false
	  },
	  {
		'next #areaFichas' : 'Fichas del documento',
		"nextButton" : {className: "mySkip", text: "Seguir"},
		'showSkip' : false
	  },
	  {
		'next #areaCintaOpciones' : 'Cinta de opciones generales',
		"nextButton" : {className: "mySkip", text: "Seguir"},
		'showSkip' : false
	  },

	 {
		'next #areaBarraEstado' : 'Barra de estado',
		"nextButton" : {className: "mySkip", text: "Seguir"},
		'showSkip' : false
	  } ,
	 {
		'next #areaVistaDocumento' : 'Vistas de documento',
		"nextButton" : {className: "mySkip", text: "Seguir"},
		'showSkip' : false
	  } ,
	 {
		'next #areaZoom' : 'Area de Zoom',
		"nextButton" : {className: "mySkip", text: "Seguir"},
		'showSkip' : false
	  } 	  
	];
	tour2.set(pasos_tour_2);
	tour2.run();
}

function tour3_1(){
	tour3 = new EnjoyHint({
		onEnd:function(){
		   $("#img3_1").hide();
		   $("#img4_1").show();
		   setTimeout(function(){
			   tour4_1();
		   }, 100);
	  }
	});
	var pasos_tour_3 = [
	  {
		'click #areaArchivo' : 'Para cerrar un archivo de click en Archivo',
		'showSkip' : false
	  }
	];
	tour3.set(pasos_tour_3);
	tour3.run();
}

function tour4_1(){
	tour4 = new EnjoyHint({
		onEnd:function(){
		   $("#img4_1").hide();
		   $("#img5_1").show();
		   setTimeout(function(){
			   tour5_1();
		   }, 100);
	  }
	});
	var pasos_tour_4 = [
	  {
		'click #areaCerrar' : 'Ahora de click en Cerrar',
		'showSkip' : false
	  }
	];
	tour4.set(pasos_tour_4);
	tour4.run();
}

function tour5_1(){
	tour5 = new EnjoyHint({
		onEnd:function(){
		   $("#img5_1").hide();
		   $("#img6_1").show();
		   setTimeout(function(){
			   tour6_1();
		   }, 100);
	  }
	});
	var pasos_tour_5 = [
	  {
		'click #araeInicio_1' : 'Para redactar una carta empezemos dando click en Inicio',
		'showSkip' : false
	  },
	  {
		'click #areaOpcionesFuente' : 'Ahora de click en opciones de fuente',
		'showSkip' : false
	  }
	];
	tour5.set(pasos_tour_5);
	tour5.run();
}

function tour6_1(){
	tour6 = new EnjoyHint({
		onEnd:function(){
		   $("#img6_1").hide();
		   $("#img7_1").show();
		   setTimeout(function(){
			   tour7_1();
		   }, 100);
	  }
	});
	var pasos_tour_6 = [
	  {
		'next #areaFuenteOpcionesFuente' : 'El tipo de fuente (tipo de letra)',
		'showSkip' : false
	  },
	  {
		'next #areaEstiloOpcionesFuente' : 'Estilo de fuente (negrita, cursiva, negrita, negrita cursiva)',
		'showSkip' : false
	  },
	  {
		'next #areaTamañoOpcionesFuente' : 'El tamaño de letra',
		'showSkip' : false
	  },
	  {
		'next #areaColorOpcionesFuente' : 'El color del texto',
		'showSkip' : false
	  },
	  {
		'click #areaAceptarOpcionesFuente' : 'Y finalmente damos click en Aceptar',
		'showSkip' : false
	  }
	];
	tour6.set(pasos_tour_6);
	tour6.run();
}

function tour7_1(){
	tour7 = new EnjoyHint({
		onEnd:function(){
		   $("#img7_1").hide();
		   $("#img8_1").show();
		   setTimeout(function(){
			   tour8_1();
		   }, 100);
	  }
	});
	var pasos_tour_7 = [
	  {
		'click #araeInicio_2' : 'De igual manera para darle formato a un parrafo le das click a Inicio',
		'showSkip' : false
	  },
	  {
		'click #areaOpcionesParrafo' : 'Ahora de click en opciones de parrafo',
		'showSkip' : false
	  }
	];
	tour7.set(pasos_tour_7);
	tour7.run();
}

function tour8_1(){
	tour8 = new EnjoyHint();
	var pasos_tour_8 = [
	  {
		'next #areaAlineacionOpcionesParrafo' : 'Seleccionamos el alineado que deseamos',
		'showSkip' : false
	  },
	  {
		'click #areaAceptarOpcionesParrafo' : 'Y finalmente damos click en Aceptar',
		'showSkip' : false
	  }
	];
	tour8.set(pasos_tour_8);
	tour8.run();
}