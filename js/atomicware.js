angular.module('AtomicwareApp', [])
.controller('ContactoCtrl', function($scope,$http){
	$scope.contacto = {};
	$scope.enviar = function(){
		console.log($scope.contacto);
		$http.post("http://atomicware.mx:8888/contacto",$scope.contacto)
		.success(function(res){
			console.info(res);
			alert("Gracias, en breve nos pondremos en contacto contigo.")
		}).error(function(err){
			alert("Ocurrió un error intenta de nuevo.")
		});

	}
});  