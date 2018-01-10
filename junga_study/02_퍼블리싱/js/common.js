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
});


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
});



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
	var select_input = $('div.select>ul>li>input');
	var select_label = $('div.select>ul>li>label');
	
	// Radio Default Value
	$('div.my_value').each(function(){
		var default_value = $(this).next('.i_list').find('input[checked]').next('label').text();
		$(this).append(default_value);
	});
	
	
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

	
	select_value.click(show_option);
	select_root.removeClass('open');
	select_root.mouseleave(function(){$(this).removeClass('open')});
	select_a.click(set_anchor).click(hide_option).focus(i_hover).hover(i_hover);
	select_input.change(set_label).focus(set_label);
	select_label.hover(i_hover).click(hide_option);
	
});


/*toggle_설정on_off*/

$(document).ready(function(e) {
	$('.settingCon input').lc_switch();
	// triggered each time a field changes status
	$('body').delegate('.lcs_check', 'lcs-statuschange', function() {
		var status = ($(this).is(':checked')) ? 'checked' : 'unchecked';
		console.log('field changed status: '+ status );
	});
	// triggered each time a field is checked
	$('body').delegate('.lcs_check', 'lcs-on', function() {
		console.log('field is checked');
	});
	// triggered each time a is unchecked
	$('body').delegate('.lcs_check', 'lcs-off', function() {
		console.log('field is unchecked');
	});
});

/*switch on/off_계정관리*/
(function($){
	if(typeof($.fn.lc_switch) != 'undefined') {return false;} // prevent dmultiple scripts inits
	
	$.fn.lc_switch = function(on_text, off_text) {

		// destruct
		$.fn.lcs_destroy = function() {
			
			$(this).each(function() {
                var $wrap = $(this).parents('.lcs_wrap');
				
				$wrap.children().not('input').remove();
				$(this).unwrap();
            });
			return true;
		};	
		
		// set to ON
		$.fn.lcs_on = function() {
			$(this).each(function() {
                var $wrap = $(this).parents('.lcs_wrap');
				var $input = $wrap.find('.settingCon input');
				
				if(typeof($.fn.prop) == 'function') {
					$wrap.find('.settingCon input').prop('checked', true);
				} else {
					$wrap.find('.settingCon input').attr('checked', true);
				}
				
				$wrap.find('.settingCon input').trigger('lcs-on');
				$wrap.find('.settingCon input').trigger('lcs-statuschange');
				$wrap.find('.lcs_switch').removeClass('lcs_off').addClass('lcs_on');
				
				// if radio - disable other ones 
				if( $wrap.find('.lcs_switch').hasClass('lcs_radio_switch') ) {
					var f_name = $input.attr('name');
					$wrap.parents('form').find('.settingCon input[name='+f_name+']').not($input).lcs_off();
				}
            });
			
			return true;
		};	
		
		// set to OFF
		$.fn.lcs_off = function() {
			
			$(this).each(function() {
                var $wrap = $(this).parents('.lcs_wrap');

				if(typeof($.fn.prop) == 'function') {
					$wrap.find('.settingCon input').prop('checked', false);
				} else {
					$wrap.find('.settingCon input').attr('checked', false);
				}
				
				$wrap.find('.settingCon input').trigger('lcs-off');
				$wrap.find('.settingCon input').trigger('lcs-statuschange');
				$wrap.find('.lcs_switch').removeClass('lcs_on').addClass('lcs_off');
            });
			
			return true;
		};	

		// construct
		return this.each(function(){
			
			// check against double init
			if( !$(this).parent().hasClass('lcs_wrap') ) {
			
				// default texts
				var ckd_on_txt = (typeof(on_text) == 'undefined') ? '' : on_text;
				var ckd_off_txt = (typeof(off_text) == 'undefined') ? '' : off_text;
			   
			   // labels structure
				var on_label = (ckd_on_txt) ? '<div class="lcs_label lcs_label_on">'+ ckd_on_txt +'</div>' : '';
				var off_label = (ckd_off_txt) ? '<div class="lcs_label lcs_label_off">'+ ckd_off_txt +'</div>' : '';
				
				
				// default states
				var disabled 	= ($(this).is(':disabled')) ? true: false;
				var active 		= ($(this).is(':checked')) ? true : false;
				
				var status_classes = '';
				status_classes += (active) ? ' lcs_on' : ' lcs_off'; 
				if(disabled) {status_classes += ' lcs_disabled';} 
			   
			   
				// wrap and append
				var structure = 
				'<div class="lcs_switch '+status_classes+'">' +
					'<div class="lcs_cursor"></div>' +
					on_label + off_label +
				'</div>';
			   
				if( $(this).is(':input') && ($(this).attr('type') == 'checkbox' || $(this).attr('type') == 'radio') ) {
					
					$(this).wrap('<div class="lcs_wrap"></div>');
					$(this).parent().append(structure);
					
					$(this).parent().find('.lcs_switch').addClass('lcs_'+ $(this).attr('type') +'_switch');
				}
			}
        });
	};	
	
	// handlers
	$(document).ready(function() {
		
		// on click
		$(document).delegate('.lcs_switch:not(.lcs_disabled)', 'click tap', function(e) {

			if( $(this).hasClass('lcs_on') ) {
				if( !$(this).hasClass('lcs_radio_switch') ) { // not for radio
					$(this).lcs_off();
				}
			} else {
				$(this).lcs_on();	
			}
		});
		
		// on checkbox status change
		$(document).delegate('.lcs_wrap input', 'change', function() {

			if( $(this).is(':checked') ) {
				$(this).lcs_on();
			} else {
				$(this).lcs_off();	
			}	
		});
	});
	
})(jQuery);