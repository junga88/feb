 $(document).ready( function() {
   $('#btnSize .clsButton').click( function(){
     //본문 영역을 변수에 담기
     var $contents = $('#contentWrap'); //alert($contents);
     //본문 영역의 폰트 사이즈 가져오기
     var fontSize = $contents.css('fontSize'); //alert(fontSize);
     //폰트사이즈의 숫자만 가져오기
     var num = parseFloat(fontSize, 10); //alert(num);
     //단위만 가져오기
     var unit = fontSize.slice(-2); //alert(unit); //
     // 크게/작게
     //alert(this.id);
     if(this.id == "fontBig") {
      num *= 1.03;
     }
     else if(this.id == "fontSmall") {
      num /= 1.03;
     }
     // 폰트 크기 재설정
     $contents.css('fontSize', num + unit);
   });
 });



/*
var nav = $('.nav-container');
 
$(window).scroll(function () {
    if ($(this).scrollTop() > 136) {
        nav.addClass("f-nav");
    } else {
        nav.removeClass("f-nav");
    }
});

*/


$(function(){
	var tabDiv = $('.tabbox');
	var tabBtn = tabDiv.find('.tabs a');
	var panelBox = tabDiv.find( 'div.panel' );
	var currentBtn = tabBtn.filter('.on');
	var currentPanel = $(currentBtn.attr('href'));
	panelBox.hide();
	currentPanel.show();
	
	tabBtn.click( function(event){
		event.preventDefault(); 
		var newBtn = $(this);
		var newPanel = $(newBtn.attr('href'));		
		currentBtn.removeClass('on');
		newBtn.addClass('on');
		currentPanel.hide();
		newPanel.show();
		currentBtn = newBtn;
		currentPanel = newPanel;
	})
    $(tabBtn[0]).trigger( "click" );
})


$(function(){
	var tabDiv = $('.tabbox02');
	var tabBtn = tabDiv.find('.tabs02 a');
	var panelBox = tabDiv.find( 'div.panel02' );
	var currentBtn = tabBtn.filter('.on');
	var currentPanel = $(currentBtn.attr('href'));
	panelBox.hide();
	currentPanel.show();
	
	tabBtn.click( function(event){
		event.preventDefault(); 
		var newBtn = $(this);
		var newPanel = $(newBtn.attr('href'));		
		currentBtn.removeClass('on');
		newBtn.addClass('on');
		currentPanel.hide();
		newPanel.show();
		currentBtn = newBtn;
		currentPanel = newPanel;
	})
    $(tabBtn[0]).trigger( "click" );
})



/*selectbox_arrow*/
 jQuery(document).ready(function(){
    var select = $("select#color");
    
    select.change(function(){
        var select_name = $(this).children("option:selected").text();
        $(this).siblings("label").text(select_name);
    });
});   



jQuery(function($){
	
	// Common
	var select_root = $('div.select');
	var select_value = $('.my_value');
	var select_a = $('div.select>ul>li>a');
	var select_input = $('div.select>ul>li>input[type=radio]');
	var select_label = $('div.select>ul>li>label');
	
	// Radio Default Value
	$('div.my_value').each(function(){
		var default_value = $(this).next('.i_list').find('input[checked]').next('label').text();
		$(this).append(default_value);
	});
	
	// Line
	select_value.bind('focusin',function(){$(this).addClass('outLine')});
	select_value.bind('focusout',function(){$(this).removeClass('outLine')});
	select_input.bind('focusin',function(){$(this).parents('div.select').children('div.my_value').addClass('outLine')});
	select_input.bind('focusout',function(){$(this).parents('div.select').children('div.my_value').removeClass('outLine')});
	
	// Show
	function show_option(){
		$(this).parents('div.select:first').toggleClass('open');
	}
	
	// Hover
	function i_hover(){
		$(this).parents('ul:first').children('li').removeClass('hover');
		$(this).parents('li:first').toggleClass('hover');
        $(this).parents('li:first').css('background', '#ffb628');
	}
	
	// Hide
	function hide_option(){
		var t = $(this);
		setTimeout(function(){
			t.parents('div.select:first').removeClass('open');
		}, 1);
	}
	
	// Set Input
	function set_label(){
		var v = $(this).next('label').text();
		$(this).parents('ul:first').prev('.my_value').text('').append(v);
		$(this).parents('ul:first').prev('.my_value').addClass('selected');
	}
	
	// Set Anchor
	function set_anchor(){
		var v = $(this).text();
		$(this).parents('ul:first').prev('.my_value').text('').append(v);
		$(this).parents('ul:first').prev('.my_value').addClass('selected');
	}

	// Anchor Focus Out
	$('*:not("div.select a")').focus(function(){
		$('.a_list').parent('.select').removeClass('open');
	});
			
	select_value.click(show_option);
	select_root.removeClass('open');
	select_root.mouseleave(function(){$(this).removeClass('open')});
	select_a.click(set_anchor).click(hide_option).focus(i_hover).hover(i_hover);
	select_input.change(set_label).focus(set_label);
	select_label.hover(i_hover).click(hide_option);
	
});

