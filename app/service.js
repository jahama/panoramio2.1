App.Service = (function(lng,app, undefined){
	var obj,tempalete,html;
	var panoramioPictures = function(){
		// cogo el fichero JSON con los datos en local
		$$.get('datos/panoramio.json',{ },
			function(response){
				console.log(response);
				/**  Cargar la BBDD con los datos que vienen del servicio**/
				app.Data.cachePictures(response.photos);
				app.View.pictures(response);
				
		});
	}

	 return {
	 	panoramioPictures: panoramioPictures
	 }

}) (Lungo,App);



