<?php

// require http request class
require_once('yang-class-http-request.php');


$url = ''; // bing url

$request = new yang_HTTP_request("http://s.weibo.com/weibo/%25E9%25A9%25AC%25E6%2588%25B73333&Refer=index"); // 
$request->set_header([]);

$i = 0;
while($i<1000){
	$raw_response = $request->request('GET'); // $raw_response is json string
	echo json_encode($raw_response);
	echo "+_+_+_+_+_+_+_+_+_+_+_+_+_+_";
	$i++;
	echo "\n".$i."\n";
}