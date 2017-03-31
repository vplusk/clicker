<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Clicker</title>

	<!-- CSS -->
	
	<link rel="stylesheet" href="css/app.css"> 	

	<!-- ANGULAR -->	
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.js"></script> <!-- load angular -->

	
	<script src="js/app.js"></script> 
	
	<script src="js/controllers/MainController.js"></script> 
	<script src="js/services/itemsFactory.js"></script>
	<script src="js/directives/itemsDirective.js"></script>
</head> 

<!-- declare our angular app and controller --> 
<body class="container" ng-app="clickerApp" ng-controller="MainController">
	<div class="wrap">
		<items-data></items-data>
	</div>
</body>
</html>