<?php
/**
 * Get Bing Photo Everytime
 */

// require http request class
require_once('yang-class-http-request.php');

$index = $_GET['index'];	// which pics do you want?
$number = $_GET['number'];	// how many pics do you want?

$bing_url = 'http://cn.bing.com/HPImageArchive.aspx'; // bing url
$format = ['json'=>'js', 'xml'=>'xml']; // response format, json or xml

if( !is_numeric($index) || !is_numeric($number) ){
	$index = 0; $number = 1;
}

$url = $bing_url.'?'.'format='.$format['json'].'&'.'idx='.$index.'&'.'n='.$number; // make the request url

$request = new yang_HTTP_request("$url"); // 
$request->set_header([]);
$raw_response = $request->request('GET'); // $raw_response is json string

if(!$raw_response){
	echo null;
	return false;
}

$obj = json_decode($raw_response);
$raw_images = $obj->images; // []

$image = []; $i = 0;
while( list($index, $image) = each($raw_images) ){
	// $image is an object, not an array.
	$images[$i] = [
					'copyright' => $image->copyright, 
					'url' => $image->url 
				];
	$i++;
}
reset($raw_images); reset($images); // reset the arrays~

$response = ["images"=>$images];

echo json_encode($response);