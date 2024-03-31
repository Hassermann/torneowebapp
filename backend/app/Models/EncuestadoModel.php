<?php namespace App\Models;

use CodeIgniter\Model;

class EncuestadoModel extends Model
{
    protected $table = 'encuestado';
    protected $primaryKey = 'id_encuestado';

    protected $allowedFields = ['id_encuestado','nombre','apodo', 'edad', 'sexo', 
                                'id_estadocivil','id_vivienda','id_escolaridad','id_laboral',
                                'id_pandilla','tipo_vivienda','apoyo_familiar','pandilla_ingreso',
                                'fundacion_pandilla','actividad_pandilla','lugar_pandilla',
                                'razon_pandilla','miembros_pandilla','adicciones','influir_rm','cambios_rm',
                                'creacion'];

    public function getEncuestado($id = false)
    {
        if ($id === false)
        {
            return $this->findAll();
        }

        return $this->asArray()
                    ->where(['id' => $id])
                    ->first();
    }

    public function insertEncuestado($data)
    {
        return $this->save($data);
    }

    public function updateEncuestado($data, $id)
    {
        return $this->save($data, $id);
    }

    public function deleteEncuestado($id)
    {
        return $this->delete($id);
    }
}