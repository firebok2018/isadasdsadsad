// JavaScript Document
$(document).ready(function(){
	$('form').submit(function(e){
		e.preventDefault()
		alert("pedido realizado")
		$('.delR').val('');
		
	})
	$('#mc').click( function () {
	
		$('#nav').fadeToggle(ren())
		
		$('li').click(function(){
			
			ner()
			
		})
		
		
		
	})
	$('.rslink').click(function(){
		$('#nav').fadeOut()
	})

})

function ren(){
	$('span').removeClass('menumb').addClass('wap')
}
function ner(){
	$('span').removeClass('wap').addClass('menumb')
}


});

