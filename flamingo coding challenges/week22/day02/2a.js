for(var k=0; k<6; k++) {
	(function(k) {
			setTimeout(function() {
					console.log("i=" , k);
			},5000);
	})(k);
}
