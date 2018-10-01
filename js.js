// JavaScript Document
$(document).ready(function(){
	$('form').submit(function(e){
		e.preventDefault()
		alert("pedido realizado")
		$('.delR').val('');
		
	})
	$('#mc').click(function(){
		$('span').removeClass('menumb')
		$('span').addClass('wap')
		
		
		$('#nav').fadeIn(function(){
			$('li').click(function(){
				$('#nav').fadeOut()
				$('span').removeClass('wap')
				$('span').addClass('menumb')
			})
		})
		$('#mc').click(function(){
			$('#nav').fadeOut()
			$('span').removeClass('wap')
			$('span').addClass('menumb')
		})
		
		
	})


});

