
var min = 25;
var b_time = 5;



$(document).ready(function(){
	$('#set_break').html(b_time);
	$("#set_min").html(min);
	$('#time').html(min+":00");

		set_nums();

	$('#play').click(function(){
	play()
	});

	$("#pause").click(function(){
	clearInterval(interval);});

$("#refresh").click(function(){
		refresh() });

$("#stop").click(function(){
		stop()

	});
	
});



function stop() {
	clearInterval(interval);
	$('#set_break').html(b_time);
	$("#set_min").html(min);
	$('#time').html( min +":00");
	$("#clock_lbl").html("Session");


}


function refresh(){
	clearInterval(interval);
	min=25;
	b_time=5;
	$('#set_break').html(b_time);
	$("#set_min").html(min);
	$('#time').html(min +":00");
	$("#clock_lbl").html("Session");


}

function play(){
	seconds=60;
	minutes=min;
	minutes--;
	i=0;
	

	interval = setInterval(function(){
		seconds--;

		if (minutes===0 && seconds===0){
			
			if(i===0){
			minutes=b_time;
			$("#clock_lbl").html("Break");
			i++;
			}
			else if (i===1){
			minutes=min;
			$("#clock_lbl").html("Session");
			i--;

			}

		}


		if(seconds===0){

			minutes--;
		}

		if(seconds===-1){
			seconds=59;
		}
		

	if(seconds<10){
		$('#time').html(minutes+":0" + seconds);

		}

		else {
			$('#time').html(minutes+":" + seconds);
		}

	},1000)

}


function set_nums(){

	



	$('.min_up').click(function(){
		if (min<99){
		min++;
		$("#set_min").html(min);
		$('#time').html(min+":00")

	}
	});

	$('.min_down').click(function(){
		if (min>1){
		min--;
		$("#set_min").html(min);
		$('#time').html(min+":00")

	}
	});



	$('.break_up').click(function(){
		if (b_time<99){
		b_time++;
		$('#set_break').html(b_time);
	}
	});

	$('.break_down').click(function(){
		if (b_time>1){
		b_time--;
		$('#set_break').html(b_time);
	}
	});

}


