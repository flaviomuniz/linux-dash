var power_cycle = (function(){

	function init(){
		action();
	}

	var action = function(){
		$(".power-cycle").click(function(e){
			e.preventDefault();
			$(this).removeClass(".power-cycle").addClass("disabled")
			$.getJSON("sh/reboot.php?type=power_cycle", function(data){
			}).done(function(){
				$(".power-cycle").removeClass("disabled").addClass("power-cycle")
			});
		});
	}

	return {
		init: init
	}

}());