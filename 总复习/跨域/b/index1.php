<?php

	$name = $_GET['name'];
	$age = $_GET['age'];
	$callback = $_GET['callback'];

	echo $callback.'("'.$name."-bbb".'")';

?>