<?php

namespace App\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\CatalogoModel;
use App\Models\PandillaModel;
use App\Models\EncuestadoModel;
use CodeIgniter\Controller;

class Home extends Controller
{
    public function index()
    {
        
        return view('welcome_message');
    }

    public function catalogos()
    {
        $catalogoModel = new CatalogoModel();
        return json_encode($catalogoModel->where('tipo',$_GET['tipo'])
        ->findAll());
    }

    public function pandillas()
    {
        $pandillaModel = new PandillaModel();
        return json_encode($pandillaModel->findAll());
    }

    public function agregarEncuesta()
    {
        $encuestadoModel = new EncuestadoModel();
        $encuesta = $this->request->getJSON('encuestado');
        $encuestadoModel->insert($encuesta['encuestado']);
        return json_encode($encuesta['encuestado']);
    }   

    public function encuestas()
    {
        $encuestadoModel = new EncuestadoModel();
        return json_encode($encuestadoModel->findAll());
    }   

    public function encuesta()
    {
        $encuestadoModel = new EncuestadoModel();
        return json_encode($encuestadoModel->find($_GET['id_encuestado']));
    }   
}
