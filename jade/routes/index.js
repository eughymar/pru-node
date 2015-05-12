var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bienvenid@ a Express', otroTexto:'Mary Rosales',contenido:'Contenido', izquierda:'izquierda', derecha:'derecha' });
});


router.get('/users', function(req, res, next) {
  res.render('users', { title: 'Bienvenido a Express', otroTexto:'Mary Rosales' });
});

router.get('/formulario', function(req, res, next) {
  /*Todos los elementos*/
  res.render('formulario', { title: 'Area de Postulaciones', contenido:'Contenido', izquierda:'izquierda', derecha:'derecha'});
  /*Solo el contenido y la barra lateral derecha*/
  //res.render('postulacion', { title: 'Area de Postulaciones', contenido:'Contenido',  derecha:'derecha'});
  /*Solo el contenido y la barra lateral izquierda*/
  //res.render('postulacion', { title: 'Area de Postulaciones', contenido:'Contenido', izquierda:'izquierda'});
});

module.exports = router;
