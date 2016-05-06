$(document).ready( function() {
	var root = 'http://demo9482008.mockable.io';

	$("#check").click(function(){
		if (isNaN($("#ans").val())) {
			alert("Dude...that is not a number.Focus!");
		}

		$.ajax({
		  url: root + '/' + $("#ans").val(),
		  method: 'GET',
		  crossDomain: true,
    	  error: function(data){
    	  	$("#error").text("Mai încearcă!"); 
    	  }, 
    	  success: function(data){
    	  	$("#error").text(""); 
			alert("Bine, Boss! Click OK să vezi stupiza! ;)");
			window.location=data.toSurprise;
    	  }
		});
	})
});