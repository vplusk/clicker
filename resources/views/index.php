<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Laravel and Angular Comment System</title>

	<!-- CSS -->
	
	<link rel="stylesheet" href="css/app.css"> 	

	<!-- ANGULAR -->	
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.js"></script> <!-- load angular -->
	
	<!-- all angular resources will be loaded from the /public folder -->
	<script>
		angular.bootstrap(document, ['clickerApp']);
	</script>
	<script src="js/app.js"></script> 
	<!-- load our controller -->
	<script src="js/controllers/MainController.js"></script> 
	<script src="js/services/itemsFactory.js"></script>
	<script src="js/directives/itemsDirective.js"></script>
</head> 

<!-- declare our angular app and controller --> 
<body class="container" ng-app="clickerApp" ng-controller="MainController"> 
	hey {{ world }}
	<br>
	<br>
	<div class="wrap">
		

		<items-data></items-data>
	</div>
</body>
</html>