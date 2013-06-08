App.Events = (function(lng,app, undefined){
	// Creamos un selector para que cuando pinche en el boton de refrescar
	// se llama al servicio para actualizar los datos
	lng.dom('[data-icon=refresh]').tap(function(event){
		
		// Comprobamos si hay datos en la BBDD
		lng.Data.Sql.select("pictures",null,function(result){
			// Si hay datos --> Cargar los datos de la BBDD
			if (result.length > 0){
				console.log(" Carga de la BBDD",result);
				var fotos = {photos:result};
				app.View.pictures(fotos);
			}else{ // Si no hay datos se trae la informacion del servicio web
				console.log(" Carga del servicio");
				app.Service.panoramioPictures();
			}
		});
		
	});





	//
	lng.dom('article#panoramio-items li').tap(function(event){
		console.log(this.id);
		
	});


	 return {
	 	
	 }

}) (Lungo,App);



