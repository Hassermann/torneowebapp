<?php

namespace App\Models;
use CodeIgniter\Model;

class CatalogoModel extends Model
{

	protected $table = 'catalogo';
    protected $primaryKey = 'id_catalogo';
    
    protected $allowedFields = ['id_catalogo', 'nombre','tipo'];
	
	
}