<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<button id="btn">click</button>
	<script>
		function aa (data) {
			console.log(data);
		}

		var oBtn = document.getElementById('btn');
		oBtn.onclick = function(){
			var oScript = document.createElement('script');
			oScript.src="http://www.b.com/index1.php?name=zs&age=20&callback=aa";
			document.body.appendChild(oScript);
		}


	</script>

	<!--<script src="http://www.b.com/index1.php?name=zs&age=20&callback=aa"></script>-->
	
	

</body>
</html>