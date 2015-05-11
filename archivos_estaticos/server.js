var http = require('http');
/*Libreria para entrar al sistema de archivos*/
var sa = require('fs');
/*Libreria para rutas -> path nos dira de que extensión es el archivo*/
var ruta = require('path');

function ejecutar(){
	function onRequest(req, res){
		/*req.url propiedad del request*/
		//console.log(req.url);

		var rutaArchivo = './views'+ ((req.url == '/')?'/index.htm':req.url);
		console.log(rutaArchivo);
		/*Extrayendo el nombre de la extension*/
		var ext = ruta.extname(rutaArchivo);
		var contentType = 'text/html';
		switch(ext){
			case '.css':
				contentType = 'text/css';
				break;
			case '.js':
				contentType = 'text/javascript';
				break;
		}
 
		sa.exists(rutaArchivo, function(existe){
			if(existe){
				sa.readFile(rutaArchivo, function(error, contenido){
					if(error){
						/*Error pagina no encontrada*/
						res.writeHead(500);
						res.end();
					}else{
						res.writeHead(200, {'Content-Type':contentType});
						/*la variable contenido es lo que devuelve la variable sa*/
						res.end(contenido);
					}
				});
			}else{
				res.writeHead(404);
				res.end();
			}
		});

		
	}
	var server = http.createServer(onRequest).listen(1989);
	console.log('Servidor corriendo en puesto 1989')
}

exports.ejecutar = ejecutar;
//ejecutar();
