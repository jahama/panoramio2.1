App.Data = (function(lng,app, undefined){

var config = {
    name: 'panoramio_db',         //Name of the database
    version: '1.0',           //Version of the database
    size: 65536,              //Size of the database
    schema: [                 //Database schema
        {
            name: 'pictures',     //Table name
            drop: false,       //Drop existing content on init
            fields: {         //Table fields
              height: 'INTEGER',
              latitude: 'STRING',
              longitude: 'STRING',
              owner_id: 'INTEGER',
              owner_name: 'STRING',
              owner_url: 'STRING',
              photo_file_url:'STRING',
              photo_id:'INTEGER',
              photo_title: 'STRING',
              photo_url: 'STRING',
              upload_date: 'STRING',
              width: 'INTEGER'

            }
        }
        
    ]
};
Lungo.Data.Sql.init(config);


var terremoto = [
        {
              id: 555 ,
              title: 'titulo',
              link: 'enlace',
              latitud: 111,
              longitud : 222,
              magnitude: 'magnitud',
              guid : 'masInfo',
              depth : 'profundidad',
              description: '<table><tr><td><table cellpadding=\""0\"" cellspacing=\""0\"" border=\""0\"" style=\""margin-top:5px; font-size:11px;\"">',
              pubDate: 'fecha_ts'
          }
      ];

     // Lungo.Data.Sql.insert('terremotos', terremoto);

     var cachePictures = function(pictures){
       Lungo.Data.Sql.insert('pictures', pictures);
     }

 return {
      cachePictures: cachePictures
   }

}) (Lungo,App);

