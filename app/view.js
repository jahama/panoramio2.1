App.View = (function(lng,app, undefined){
	// Le decimos a Lungo que cree un nuevo template, uqe lo guardar en memoria
	// con el MARKIUP, que necesitamos para añadir luego la informacion que viene
	// del servecio


	var pictures = function(pictures){
		/** PART DE LA VISTA **/
				/** Utilizo Mustache como motor de plantillas **/
		template="<ul>{{#photos}}\
					 <li id='{{photo_id}}'>\
					 <div class='right'>{{upload_date}}</div>\
					 <img src=\"{{photo_file_url}}\"  />  <strong>{{owner_name}}</strong> <small>{{owner_name}}</small>   </li>   {{/photos}}</ul>"; 
		html=Mustache.render(template,pictures);
		//Aqui es donde se 'pintaría' los datos que estamos consumiendo en JSON
        $$('section article#panoramio-items').html(html); 

	}
	
			

	 return {
	 	pictures: pictures
	 }

}) (Lungo,App);

