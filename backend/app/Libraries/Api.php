<?php

namespace App\Libraries;
use App\Models\RitmoCardiacoModel;
use App\Models\ActividadModel;
use App\Models\FrecuenciaRespiratoriaModel;
use App\Models\ResumenSuenoModel;
use App\Models\SaturacionModel;
use App\Models\SuenoModel;

class Api
{

     public function refreshToken($user){
          $ritmoModel = new RitmoCardiacoModel();
          $apiURL = 'https://api.fitbit.com/oauth2/token?grant_type=refresh_token&client_id=' . $user['client_id'] . '&refresh_token=' . $user['refresh_token'];
          try {
              $client = \Config\Services::curlrequest();
                $response = $client->request('POST',$apiURL, [
                                        'headers' => [
                                        'Content-Type' => 'application/x-www-form-urlencoded'
                                        ]]);
               
              $code = $response->getStatusCode();
              if($code == 200){ // Success
                   $body = json_decode($response->getBody(),true);
                   $user['token'] =$body["access_token"];
                   $user['refresh_token'] =$body["refresh_token"];
                    return $user;
              }else{
                   echo "failed ritmo cardiaco";
              }
          }
          catch (\Exception $e) {
              echo $e->getMessage() . " user: " . $user['id_user'] . "<br>";

          }
         return null;
     }

	public function ritmocardiaco( $token,$id_user, $fecha){
		$ritmoModel = new RitmoCardiacoModel();
		$apiURL = 'https://api.fitbit.com/1/user/-/activities/heart/date/'. $fecha . '/1d/1min.json';

         $client = \Config\Services::curlrequest();
       	 $response = $client->request('GET',$apiURL,[
                                    'headers' => ['Authorization'=> 'Bearer '. $token],
                                ]);

          $code = $response->getStatusCode();
         if($code == 200){ // Success
              $body = json_decode($response->getBody(),true);
              if(!empty($body["activities-heart-intraday"])){
                   foreach ($body["activities-heart-intraday"]["dataset"] as $valor){
                   		
                   		$ritmoModel->insert(['id_user' => $id_user,
                   							'fecha' => $fecha .' ' .$valor["time"],
                   							'valor' => $valor["value"],
     								        ]);              	
                   }
               }
         }else{
              echo "failed ritmo cardiaco";
              die;
         }
         return null;
	}

	public function actividad( $token,$id_user, $fecha, $actividad){
		$actividadModel = new ActividadModel();

		$apiURL = 'https://api.fitbit.com/1/user/-/activities/'. $actividad .'/date/'. $fecha . '/'. $fecha . '/1min.json';

         $client = \Config\Services::curlrequest();
       	 $response = $client->request('GET',$apiURL,[
                                    'headers' => ['Authorization'=> 'Bearer '. $token],
                                ]);

         $code = $response->getStatusCode();
         if($code == 200){ // Success
              $body = json_decode($response->getBody(),true);
              if(!empty($body["activities-". $actividad ."-intraday"])){
                    foreach ($body["activities-". $actividad ."-intraday"]["dataset"] as $valor){
                    
                    $actividadModel->insert(['id_user' => $id_user,
                                                  'tipoactividad' => $actividad,
                                                  'fecha' => $fecha .' ' .$valor["time"],
                                                  'valor' => $valor["value"],
                                                     ]);
                   } 
              }
              
              echo "Finaliza actividad " . $actividad ."<br>";
         }else{
              echo "failed ritmo cardiaco";
              die;
         }
         return null;
	}

	public function frecuenciarespiratoria( $token,$id_user, $fecha){
		$frecuenciaModel = new FrecuenciaRespiratoriaModel();
		$apiURL = 'https://api.fitbit.com/1/user/-/br/date/'. $fecha . '/'. $fecha . '.json';

         $client = \Config\Services::curlrequest();
       	 $response = $client->request('GET',$apiURL,[
                                    'headers' => ['Authorization'=> 'Bearer '. $token],
                                ]);

         $code = $response->getStatusCode();
         if($code == 200){ // Success
              $body = json_decode($response->getBody(),true);
              
              foreach ($body["br"] as $valor){
              	$frecuenciaModel->insert(['id_user' => $id_user,
              							'fecha' => $fecha,
              							'valor' => $valor["value"]["breathingRate"],
								        ]);
              }
              echo "Finaliza Frecuencia Respiratoria";
         }else{
              echo "failed ritmo cardiaco";
              die;
         }
         return null;
	}

	public function saturacion( $token,$id_user, $fecha){
		$saturacionModel = new SaturacionModel();

		$apiURL = 'https://api.fitbit.com/1/user/-/spo2/date/'. $fecha . '/'. $fecha . '/all.json';

         $client = \Config\Services::curlrequest();
       	 $response = $client->request('GET',$apiURL,[
                                    'headers' => ['Authorization'=> 'Bearer '. $token],
                                ]);

         $code = $response->getStatusCode();
         if($code == 200){ // Success
              $body = json_decode($response->getBody(),true);
              var_dump($body);
              /*foreach ($body["sleep"] as $valor){
              	$saturacionModel->insert(['id_user' => $id_user,
              							'fecha' => $valor["dateOfSleep"],
              							'inicio' => $valor["startTime"],
              							'fin' => $valor["endTime"],
              							'duracion' => $valor["duration"] / (1000*60) ,
              							'eficiencia' => $valor["efficiency"],
              							'minutosdespierto' => $valor["minutesAwake"],
              							'minutosdormido' => $valor["minutesAsleep"],
              							'minutostrasdespertar' => $valor["minutesAfterWakeup"],
              							'minutosquedardormido' => $valor["minutesToFallAsleep"],
              							'minutoscama' => $valor["timeInBed"]
								        ]);
              }*/

              echo "Finaliza Saturacion";
         }else{
              echo "failed Saturacion";
              die;
         }
         return null;
	}

	public function resumensueno( $token,$id_user, $fecha){
		$resumenSuenoModel = new ResumenSuenoModel();

		$apiURL = 'https://api.fitbit.com/1.2/user/-/sleep/date/'. $fecha . '/'. $fecha . '.json';

         $client = \Config\Services::curlrequest();
       	 $response = $client->request('GET',$apiURL,[
                                    'headers' => ['Authorization'=> 'Bearer '. $token],
                                ]);
          $code = $response->getStatusCode();
         if($code == 200){ // Success
              $body = json_decode($response->getBody(),true);
              
              foreach ($body["sleep"] as $valor){
                    $count = $resumenSuenoModel->where('fin >=',$valor["endTime"])
                         ->first();
                    if(empty($count)){
                         $resumenSuenoModel->insert(['id_user' => $id_user,
                                                  'fecha' => $valor["dateOfSleep"],
                                                  'inicio' => $valor["startTime"],
                                                  'fin' => $valor["endTime"],
                                                  'duracion' => $valor["duration"] / (1000*60) ,
                                                  'eficiencia' => $valor["efficiency"],
                                                  'minutosdespierto' => $valor["minutesAwake"],
                                                  'minutosdormido' => $valor["minutesAsleep"],
                                                  'minutostrasdespertar' => $valor["minutesAfterWakeup"],
                                                  'minutosquedardormido' => $valor["minutesToFallAsleep"],
                                                  'minutoscama' => $valor["timeInBed"]
                                                     ]);
                         $resumenId = $resumenSuenoModel->getInsertID();
                         
                         $this->sueno($token,$id_user, $fecha, $resumenId);     
                    } else {
                         $this->sueno($token,$id_user, $fecha, $count['id']);
                    }
              	
              }

              echo "Finaliza Resumen Sueño";
         }else{
              echo "failed Resumen Sueño";
              die;
         }
         return null;
	}

	public function sueno( $token,$id_user, $fecha,$resumenId){
		$suenoModel = new SuenoModel();

		$apiURL = 'https://api.fitbit.com/1.2/user/-/sleep/date/'. $fecha . '/'. $fecha . '.json';

         $client = \Config\Services::curlrequest();
       	 $response = $client->request('GET',$apiURL,[
                                    'headers' => ['Authorization'=> 'Bearer '. $token],
                                ]);

         $code = $response->getStatusCode();
         if($code == 200){ // Success
              $body = json_decode($response->getBody(),true);
              
              foreach ($body["sleep"][0]["levels"] as $valor){
              	foreach ($valor as $val){
                    if(!empty($val["level"])){
                         $count = $suenoModel->where('inicio >=',$valor["dateTime"])
                         ->first();
                         if(empty($count)){
                              $suenoModel->insert(['id_user' => $id_user,
                                             'idresumensueno' => $resumenId,
                                             'fase' => $val["level"],
                                             'inicio' => $val["dateTime"],
                                             'duracionsegundos' => $val["seconds"]
                                                ]);     
                         }
                    }
	              	
	          }
             	
              }

              echo "Finaliza Sueno";
         }else{
              echo "failed Sueno";
              die;
         }
         return null;
	}
}