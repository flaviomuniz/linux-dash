<?php
  require_once("api.php");
  if ($_GET["type"] == "power_cycle"){
    $request = 'https://api.digitalocean.com/droplets/'.$dropletId.'/power_cycle/?client_id='.$clientApi.'&api_key='.$apiKey;
    $response  = file_get_contents($request);
    echo $response;
  }
