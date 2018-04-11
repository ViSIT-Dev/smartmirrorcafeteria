<?php 

$url = "http://flask.web.fh-kufstein.ac.at/json";

//$tempPath = '/var/www/html/tmp/owmForecast.json';
$tempPath = '/tmp/mentemp.json';
//$tempPath = 'owmForecast.json';
$dateFormat = "Y-m-d";

$refresh = true; 

if(file_exists($tempPath)) {
    $forecast = file_get_contents($tempPath);
    $forecastJSON = json_decode($forecast, 1);
    $createFromFormat = DateTime::createFromFormat($dateFormat , key($forecastJSON) );
    if($createFromFormat->format("W") == (new \DateTime())->format("W")){
        $refresh = false;
    }
}

if($refresh) {
    $forecast = file_get_contents($url);
    $forecastJSON = json_decode($forecast, 1);
    file_put_contents($tempPath, json_encode($forecastJSON));
}

echo $forecast;

?>