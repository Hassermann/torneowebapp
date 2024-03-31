<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/catalogos', 'Home::catalogos');
$routes->get('/pandillas', 'Home::pandillas');
$routes->post('/agregarEncuesta', 'Home::agregarEncuesta');
$routes->get('/encuestas', 'Home::encuestas');
$routes->get('/encuesta', 'Home::encuesta');