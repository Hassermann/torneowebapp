<?php

namespace App\Models;
use CodeIgniter\Model;

class PandillaModel extends Model
{

	protected $table = 'pandilla';
    protected $primaryKey = 'id_pandilla';
    
    protected $allowedFields = ['id_pandilla', 'nombre','creacion'];
	
	
}