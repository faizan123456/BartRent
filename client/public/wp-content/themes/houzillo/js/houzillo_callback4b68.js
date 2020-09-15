"use strict";
var review_pagi		= 1;
jQuery(document).on('ready', function() {
    var loader_html 	            = '<div class="at-preloader-section"><div class="at-preloader-holder"><div class="at-loader"></div></div></div>';
    var checkout_loader_html 	    = '<div class="at-preloader-checkout"><div class="at-preloader-holder"><div class="at-loader"></div></div></div>';
    var is_loggedin         		= scripts_vars.is_loggedin;
    var loader_duration     		= scripts_vars.loader_duration;
	var ajax_nonce     	  	 	 	= 'security='+scripts_vars.ajax_nonce;

    /* MOBILE MENU*/
    function collapseMenu(){
        jQuery('.at-navdashboard ul li.menu-item-has-children,.at-navigation ul li.menu-item-has-children').prepend('<span class="at-dropdowarrow"><i class="lnr lnr-chevron-right"></i></span>');
        
		if (jQuery(window).width() < 992) {
            jQuery('.at-navigation ul li.menu-item-has-children span.at-dropdowarrow').on('click', function() {
                jQuery(this).parent('li').toggleClass('at-open');
                jQuery(this).next().next().slideToggle(300);
            });
        }
		
        jQuery('.at-navdashboard ul li.menu-item-has-children').on('click', function(){
            jQuery(this).toggleClass('at-open');
            jQuery(this).find('.sub-menu').slideToggle(300);
        });
    }
    collapseMenu();
	
	
	//Comment down
	jQuery(".at-btnreply.comment-reply-link").click(function (event){
		event.preventDefault();
		var _this	= jQuery(this);
		var _to 	= _this.data('respondelement');
		setTimeout(function(){
			jQuery('html, body').animate({
				scrollTop: jQuery("#"+_to).offset().top
			}, 0);
		}, 300);
		
	});
	
	//forgot password
	jQuery( "#forogot-pass" ).click(function() {
        jQuery('#loginpopup').modal('hide');
    });
	
	//Login click
    jQuery( "#btn-login" ).click(function() {
        jQuery('#forgetpasspopup').modal('hide');
        jQuery('#loginpopup').modal('show');
    });
	
	//register now
    jQuery( "#register-now-login" ).click(function() {
        jQuery('#loginpopup').modal('hide');
        jQuery('#registerpopup').modal('show');
    });
    
	//forgot
    jQuery( "#register-now-forgot" ).click(function() {
        jQuery('#forgetpasspopup').modal('hide');
        jQuery('#registerpopup').modal('show');
    });
	
    jQuery( "#login-now" ).click(function() {
        jQuery('#registerpopup').modal('hide');
        jQuery('#loginpopup').modal('show');
    });

    jQuery( "#login-now" ).click(function() {
        jQuery('#registerpopup').modal('hide');
        jQuery('#loginpopup').modal('show');
    });

    jQuery( "#forgot-pass" ).click(function() {
        jQuery('#registerpopup').modal('hide');
        jQuery('#forgetpasspopup').modal('show');
    });

    jQuery('.select2-houzillo').select2({});

	var scroll = document.getElementById('at-x-axis')
    if (scroll !== null) {
		jQuery("#at-x-axis").mCustomScrollbar({
			axis:"x" 
		});  
    }
    
    jQuery(".load-at-chat-message").click(function(){
        var userID = jQuery('.at-load-chat').data('userid');
        jQuery('#load-user-chat-'+userID).find('.at-dhb-line').removeClass('at-dot');
    })

    jQuery(".print-booking").click(function(){
        var prtContent = document.getElementById("booking-details");
        var winPrint = window.open('', '','width=1000,height=900,toolbar=0,scrollbars=0,status=0');
        winPrint.document.write(prtContent.innerHTML);
        winPrint.document.close();
        winPrint.focus();
        winPrint.print();
    })

    /* DROPDOWN RADIO */
	jQuery('input[type=radio]').on('change',function(){
        var _this = jQuery(this);
        var _type = _this.data('title');
        _this.parents('.at-radioholder').prev('.at-dropdown').find('span .selected-search-type').text(_type);
    });
	
    /*TOGGLE DIV */
	jQuery('.at-dropdown').on('click', function(event){
		event.preventDefault();
		var _this = jQuery(this);
		_this.next().slideToggle();
    });
    
      /*Reset Form */
	jQuery('.at-resetf').on('click', function(event){
		event.preventDefault();
        jQuery('#search-form-properties').trigger("reset");
    });
 
    // Login Form
    jQuery('.login-btn').on('click', function(e){
        e.preventDefault();   
        jQuery('body').append(loader_html);
        var _serialized   = jQuery('#at-formlogin').serialize();
        var dataString 	  = ajax_nonce+'&'+_serialized+'&action=houzillo_ajax_login';   
        
        jQuery.ajax({
            type: "POST",
            url: scripts_vars.ajaxurl,
            data: dataString,
            dataType: "json",
            success: function (response) {
                jQuery('body').find('.at-preloader-section').remove();
                if (response.type === 'success') {
                    jQuery('#loginpopup').modal('hide');
                    jQuery.sticky(response.message, {classList: 'success', speed: 200, autoclose: 5000});
                    window.location.replace( response.redirect ); 
                } else {
                    jQuery.sticky(response.message, {classList: 'important', speed: 200, autoclose: 5000});
                }
            }
        });	
    })

    //Forget Password Preloader
    jQuery('#forget-pass-btn').on('click', function(e){
        e.preventDefault();
        jQuery('body').append(loader_html);
        var _serialized   = jQuery('#at-forget-pass').serialize();
        var dataString 	  = ajax_nonce+'&'+_serialized+'&action=houzillo_ajax_lp';   
        
        jQuery.ajax({
            type: "POST",
            url: scripts_vars.ajaxurl,
            data: dataString,
            dataType: "json",
            success: function (response) {
                jQuery('body').find('.at-preloader-section').remove();
                if (response.type === 'success') {
                    jQuery('#forgetpasspopup').modal('hide');
                    jQuery.sticky(response.message, {classList: 'success', speed: 200, autoclose: 5000});
                } else {
                    jQuery.sticky(response.message, {classList: 'important', speed: 200, autoclose: 5000});
                }
            }
        });	
    })

    //Update Regular Profile
    jQuery(document).on('click', '.at-update-user-profile', function (e) {
        e.preventDefault();        
        jQuery('body').append(loader_html);
        var _serialized   = jQuery('.at-update-profile').serialize();
        var dataString 	  = ajax_nonce+'&'+_serialized+'&action=houzillo_update_user_profile';   
        jQuery.ajax({
            type: "POST",
            url: scripts_vars.ajaxurl,
            data: dataString,
            dataType: "json",
            success: function (response) {
                jQuery('body').find('.at-preloader-section').remove();
                if (response.type === 'success') {
                    jQuery.sticky(response.message, {classList: 'success', speed: 200, autoclose: 5000});
                    window.location.reload();
                } else {
                    jQuery.sticky(response.message, {classList: 'important', speed: 200, autoclose: 5000});
                }
            }
        });
    });

    //Newsletter form submit 
	jQuery(document).on('click', '.subscribe_me', function (event) {
        event.preventDefault();
        var _this = jQuery(this);
        jQuery('body').append(loader_html);
        jQuery.ajax({
            type: 'POST',
            url: scripts_vars.ajaxurl,
            data: ajax_nonce+'&'+_this.parents('form').serialize() + '&action=houzillo_subscribe_mailchimp',
            dataType: "json",
            success: function (response) {
            	jQuery('body').find('.at-preloader-section').remove();              
                if (response.type === 'success') {                	
                    jQuery.sticky(response.message, {classList: 'success', speed: 200, autoclose: 5000});
                } else {                	                
                	jQuery.sticky(response.message, {classList: 'important', speed: 200, autoclose: 5000});               
                }
            }
        });
    });
    
    //Pretty Photo VIDEO Images
    jQuery("a[data-rel]").on('each',function () {
		jQuery(this).attr("rel", jQuery(this).data("rel"));
	});
	
	jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
		animation_speed: 'normal',
		theme: 'dark_square',
		slideshow: 3000,
		default_width: 800,
        default_height: 500,
        allowfullscreen: true,
		autoplay_slideshow: false,	
		social_tools: false,
		iframe_markup: "<iframe src='{path}' width='{width}' height='{height}' frameborder='no' allowfullscreen='true'></iframe>", 
		deeplinking: false
    });
    
    //Add to saved properties
    jQuery(document).on('click', '.at-add-wishlist', function (e) { 
        e.preventDefault();
		jQuery('body').append(loader_html);
		if (scripts_vars.is_loggedin == 'false') {
            jQuery('body').find('.at-preloader-section').remove();
            jQuery.sticky(scripts_vars.login_required, {classList: 'important', speed: 200, autoclose: 7000});
            return false;
        }
		
        var _this 		= jQuery(this);
        var id 			= _this.data('id') ;    
        var dataString 	= ajax_nonce+'&id=' + id + '&action=houzillo_save_properties';
		
        jQuery.ajax({
            type: "POST",
            url: scripts_vars.ajaxurl,
            data: dataString,
            dataType: "json",
            success: function (response) {
                jQuery('body').find('.at-preloader-section').remove();
               if (response.type === 'success') {
                    _this.removeClass('at-add-wishlist');
                    _this.addClass('at-liked');
                    jQuery.sticky(response.message, {classList: 'success', speed: 200, autoclose: 5000 });                   
                } else {
                    jQuery.sticky(response.message, {classList: 'important', speed: 200, autoclose: 5000});
                }
            }
        });           
    });

    //Add feedback
	jQuery('.at-add-feedback').on('click', function(){
		event.preventDefault();
		var _this 	= jQuery(this);
		var _reservation_id		= _this.data('reservation_id');
		var _property_id		= _this.data('property_id');
		if (scripts_vars.is_loggedin === 'false') {
			jQuery('.at-preloader-section').remove();
            jQuery.sticky(scripts_vars.feedback_message, {classList: 'important', speed: 200, autoclose: 7000});
            return false;
        }
		
		if (scripts_vars.user_type !== 'regular_users') {
			jQuery('.at-preloader-section').remove();
            jQuery.sticky(scripts_vars.allow_feedback, {classList: 'important', speed: 200, autoclose: 7000});
            return false;
        } else {
			jQuery('body').append(loader_html);
			jQuery.ajax({
				type: 'POST',
				url: scripts_vars.ajaxurl,
				data: {
					action	        : 'houzillo_check_feedback',
					res_id		    : _reservation_id,
					property_id		: _property_id,
					security		: scripts_vars.ajax_nonce
				},
				dataType: "json",
				success: function (response) {
					jQuery('.at-preloader-section').remove();
					if (response.type === 'success') {   
                        jQuery.sticky(response.message, {classList: 'success', speed: 200, autoclose: 5000});
                        jQuery('.at-preloader-section').remove();             	
						jQuery('#feedbackmodal').modal('show');
					} else {                	                
						jQuery.sticky(response.message, {classList: 'important', speed: 200, autoclose: 5000});               
					}
				}
			});
		}
    });
    
    //feedback step 3 form submit 
	jQuery(document).on('click', '.at-formfeedback-btn', function (event) {
        jQuery('body').append(loader_html);
        jQuery.ajax({
            type: 'POST',
            url:  scripts_vars.ajaxurl,
            data: ajax_nonce+'&'+jQuery('.at-formfeedback').serialize() + '&action=houzillo_add_feedback',
            dataType: "json",
            success: function (response) {
            	jQuery('body').find('.at-preloader-section').remove(); 
                if (response.type === 'success') {					
                    jQuery.sticky(response.message, {classList: 'success', speed: 200, autoclose: 5000});
					window.location.reload();
                } else { 
                	jQuery.sticky(response.message, {classList: 'important', speed: 200, autoclose: 5000});  
                }
            }
        });
    });

    //Submit load more reviews
	jQuery(document).on('click', '.load-more-reviews', function(e){
		e.preventDefault(); 
        var _this    	  = jQuery(this);  
		var _post_id    = _this.data('id');
		jQuery('body').append(loader_html);
		jQuery.ajax({
			type: "POST",
			url: scripts_vars.ajaxurl,
			data: {
				action		 	: 'houzillo_get_more_reviews',
				page			: review_pagi,
				post_id		    : _post_id,
				security		: scripts_vars.ajax_nonce
			},
			dataType: "json",
			success: function (response) {
				jQuery('body').find('.at-preloader-section').remove();
				if (response.type === 'success') {
                    review_pagi++;
                    jQuery('.review-wrap li:last-child').before(response.reviews);
				} else {
					jQuery('.feedback-btn').hide();
                    jQuery.sticky(response.message, {classList: 'important', speed: 200, autoclose: 5000});  
				}
			}
		});	
    });
    
    //Report property
    jQuery(document).on('click', '.at-btn-submit-report', function (e) {
        e.preventDefault();
        jQuery('body').append(loader_html);
		var _this 	= jQuery(this); 
		var _id   	= _this.data('id'); 
        var _form	= jQuery('#at-form-report-property').serialize();
		var dataString = ajax_nonce+'&id=' + _id + '&'+_form+'&action=houzillo_report_property';   
		jQuery.ajax({
			type: "POST",
			url: scripts_vars.ajaxurl,
			data: dataString,
			dataType: "json",
			success: function (response) {
				jQuery('body').find('.at-preloader-section').remove();
				if (response.type === 'success') {
					jQuery.sticky(response.message, {classList: 'success', speed: 200, autoclose: 5000});
					window.location.reload();
				} else {
					jQuery.sticky(response.message, {classList: 'important', speed: 200, autoclose: 5000});
				}
			}
		});
    });	
	
	// get checkout details
	jQuery('.at-checkout-service').on('click', function() { 
        var _this           = jQuery(this);
        var _id             = _this.data('id');
        var _serialized     = jQuery('#at-checkout-form').serialize();
        var dataString      = ajax_nonce+'&'+_serialized+'&id='+_id+'&action=houzillo_checkout_details';
        jQuery('#at-checkout-detail').append(checkout_loader_html);
        jQuery('#at-checkout-detail').addClass('at-checkout-loader');
        jQuery.ajax({
            type: "POST",
            url: scripts_vars.ajaxurl,
            data: dataString,
            dataType: "json",
            success: function (response) {  
                jQuery('body').find('.at-preloader-checkout').remove();
                jQuery('#at-checkout-detail').removeClass('at-checkout-loader');
                if (response.type === 'success') {
                    jQuery.sticky(response.message, {classList: 'success', speed: 200, autoclose: 5000});
                    jQuery('#at-checkout-list').html(response.html);
                    tipso_init();
                } else {
                    jQuery.sticky(response.message, {classList: 'important', speed: 200, autoclose: 5000});
                }
            }
        });
        
    });
    
      //feedback step 3 form submit 
	jQuery(document).on('click', '.at-formcancellation-btn', function (event) {
        var _this 	            = jQuery(this);
		var _booking_id		    = _this.data('booking');
        var _description	    = jQuery('#cancellation_description').val();
        jQuery('body').append(loader_html);
        jQuery.ajax({
            type: 'POST',
            url:  scripts_vars.ajaxurl,
            data: {
                action	            : 'houzillo_booking_cancellation',
                booking_id		    : _booking_id,
                description		    : _description,
				security		: scripts_vars.ajax_nonce
            },
            dataType: "json",
            success: function (response) {
            	jQuery('body').find('.at-preloader-section').remove(); 
                if (response.type === 'success') {					
                    jQuery.sticky(response.message, {classList: 'success', speed: 200, autoclose: 5000});
					window.location.reload();
                } else { 
                	jQuery.sticky(response.message, {classList: 'important', speed: 200, autoclose: 5000});  
                }
            }
        });
    });

	// get checkout page
	jQuery('.at-btn-checkout').on('click', function() { 
		var _this      		= jQuery(this);
		var _id				= _this.data('id');
		var _serialized   	= jQuery('#at-checkout-form').serialize();
        var dataString 	  	= ajax_nonce+'&'+_serialized+'&id='+_id+'&action=houzillo_checkout_page';
        jQuery('#at-checkout-detail').append(checkout_loader_html);
        jQuery('#at-checkout-detail').addClass('at-checkout-loader');
		jQuery.ajax({
			type: "POST",
			url: scripts_vars.ajaxurl,
			data: dataString,
			dataType: "json",
			success: function (response) {	
                jQuery('body').find('.at-preloader-checkout').remove();
				if (response.type === 'success') {
					jQuery.sticky(response.message, {classList: 'success', speed: 200, autoclose: 5000});
					window.location.replace( response.checkout_url );
				} else {
					jQuery.sticky(response.message, {classList: 'important', speed: 200, autoclose: 5000});
				}
			}
		});
		
    });
	
	tipso_init();
	
	//Signup process
	jQuery('.at-btn-signup').on('click', function(){
		jQuery('body').append(loader_html);
		var _serialized   = jQuery('#at-formsignup').serialize();
		var dataString 	  = ajax_nonce+'&'+_serialized+'&action=houzillo_signup';   
		
		jQuery.ajax({
			type: "POST",
			url: scripts_vars.ajaxurl,
			data: dataString,
			dataType: "json",
			success: function (response) {
				jQuery('body').find('.at-preloader-section').remove();
				if (response.type === 'success') {
					jQuery.sticky(response.message, {classList: 'success', speed: 200, autoclose: 5000});
					window.location.replace( response.url );
				} else {
					jQuery.sticky(response.message, {classList: 'important', speed: 200, autoclose: 5000});
				}
			}
		});	
		
	});
	
	//Shop page title duplication
	jQuery( "nav.woocommerce-breadcrumb, header.woocommerce-products-header" ).remove();
	
	/*Become a host request*/
	jQuery('.at-host-request').on('click', function(){
		var phone		= jQuery("#at-formhost_request .at-phone").val();
		var description	= jQuery("#at-formhost_request .at-description").val();
		var terms		= jQuery("#at-formhost_request .at-terms").is(":checked");
		
		if( is_loggedin == false ) {
			jQuery('.at-preloader-section').remove();
            jQuery.sticky(scripts_vars.already_login, {classList: 'important', speed: 200, autoclose: 7000});
            return false;
		}
		
		if( terms == false ) {
			jQuery('.at-preloader-section').remove();
            jQuery.sticky(scripts_vars.agree_terms, {classList: 'important', speed: 200, autoclose: 7000});
            return false;
		}
		
		jQuery('body').append(loader_html);
		var _serialized   = jQuery('#at-formhost_request').serialize();
		var dataString 	  = ajax_nonce+'&'+_serialized+'&action=houzillo_host_request';   
		
		jQuery.ajax({
			type: "POST",
			url: scripts_vars.ajaxurl,
			data: dataString,
			dataType: "json",
			success: function (response) {
				jQuery('body').find('.at-preloader-section').remove();
				if (response.type === 'success') {
					jQuery.sticky(response.message, {classList: 'success', speed: 200, autoclose: 5000});
					window.location.reload( );
				} else {
					jQuery.sticky(response.message, {classList: 'important', speed: 200, autoclose: 5000});
				}
			}
		});		
    });

    /* SIDE NAVIGATION */
    var _at_btnopenclose = jQuery('#at-btnopenclose');
    _at_btnopenclose.on('click', function () {
        jQuery('#at-wrapper').toggleClass('at-sidenavshow');
        if( jQuery('#at-wrapper').hasClass('at-sidenavshow') ){
            jQuery('body').addClass('spread-overlay');
            return true;
        }
        jQuery('body').removeClass('spread-overlay');
    });
	
    var _at_close = jQuery('#at-closesidebar');
    _at_close.on('click', function () {
        jQuery(this).closest('.at-dhb-sideholder').find('#at-closesidebar i').toggleClass('lnr lnr-layers ti-close')
        jQuery('#at-wrapper').toggleClass('at-sidenavshow');
        if( jQuery('#at-wrapper').hasClass('at-sidenavshow') ){
            jQuery('body').addClass('spread-overlay');
            return true;
        }
        jQuery('body').removeClass('spread-overlay');
    });
    
});

jQuery(window).load(function () {
	var loading_duration = scripts_vars.loader_duration;
	jQuery(".preloader-outer").delay(loading_duration).fadeOut();
	jQuery(".pins").delay(loading_duration).fadeOut("slow");
});

//Toolip init
function tipso_init(){
	if(jQuery('.at-tipso').length > 0){
		jQuery('.at-tipso').tipso({
			tooltipHover	  : true,
			useTitle		  : false,
			background        : scripts_vars.tip_content_bg,
			titleBackground   : scripts_vars.tip_title_bg,
			color             : scripts_vars.tip_content_color,
			titleColor        : scripts_vars.tip_title_color,
		});
	}
}

//Sticky Note
!function(e){e.sticky=e.fn.sticky=function(t,s,i){"function"==typeof s&&(i=s);var a=function(e){var t=0,s=0,i=e.length;if(0===i)return t;for(s=0;s<i;s++)t=(t<<5)-t+e.charCodeAt(s),t&=t;return"s"+Math.abs(t)},o={position:"top-right",speed:"fast",allowdupes:!0,autoclose:5e3,classList:""},l=a(t),r=!0,c=!1;if(s&&e.extend(o,s),e(".sticky").each(function(){e(this).attr("id")===a(t)&&(c=!0,o.allowdupes||(r=!1)),e(this).attr("id")===l&&(l=a(t))}),scripts_vars.sm_success)var n=scripts_vars.sm_success;else n=o.position;e(".sticky-queue").length?e(".sticky-queue").removeClass(["top-right","top-center","top-left","bottom-right","bottom-center","bottom-left","middle-left","middle-right","middle-center"].join(" ")).addClass(n):e("body").append('<div class="sticky-queue '+n+'">'),r&&e(".sticky-queue").prepend('<div id="ID" class="at-alert-loader alert-dismissible border-POS CLASSLIST" role="alert"><button type="button" class="at-close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true"><i class="lnr lnr-cross"></i></span></button><div class="at-description"><p><i class="lnr lnr-bullhorn"></i>NOTE</p></div></div>'.replace("POS",n).replace("ID",l).replace("NOTE",t).replace("CLASSLIST",o.classList)).find("#"+l).slideDown(o.speed,function(){r=!0,i&&"function"==typeof i&&i({id:l,duplicate:c,displayed:r})}),e(".sticky").ready(function(){o.autoclose&&e("#"+l).delay(o.autoclose).fadeOut(o.speed,function(){e(this).remove()})}),e(".jf-close").on("click",function(){var t=e(this);e("#"+t.parents(".jf-alert").attr("id")).dequeue().fadeOut(o.speed,function(){t.remove()})})}}(jQuery);

// Confirm Box
!function(n){jQuery.confirm=function(i){if(n("#confirmOverlay").length)return!1;var o="";n.each(i.buttons,function(n,i){n="Yes"==n?scripts_vars.yes:"No"==n?scripts_vars.no:n,o+='<a href="#" class="button '+i.class+'">'+n+"<span></span></a>",i.action||(i.action=function(){})});var t=['<div id="confirmOverlay">','<div id="confirmBox">',"<h1>",i.title,"</h1>","<p>",i.message,"</p>",'<div id="confirmButtons">',o,"</div></div></div>"].join("");n(t).hide().appendTo("body").fadeIn();var r=n("#confirmBox .button"),c=0;n.each(i.buttons,function(n,i){r.eq(c++).on("click",function(){return i.action(),jQuery.confirm.hide(),!1})})},jQuery.confirm.hide=function(){n("#confirmOverlay").fadeOut(function(){n(this).remove()})}}(jQuery);


//Check Numeric Value only
!function(e){e.fn.numeric=function(t,i){"boolean"==typeof t&&(t={decimal:t}),void 0===(t=t||{}).negative&&(t.negative=!0);var n,a,r=!1===t.decimal?"":t.decimal||".",c=!0===t.negative;return i="function"==typeof i?i:function(){},"number"==typeof t.scale?0==t.scale?(r=!1,n=-1):n=t.scale:n=-1,a="number"==typeof t.precision?t.precision:0,this.data("numeric.decimal",r).data("numeric.negative",c).data("numeric.callback",i).data("numeric.scale",n).data("numeric.precision",a).keypress(e.fn.numeric.keypress).keyup(e.fn.numeric.keyup).blur(e.fn.numeric.blur)},e.fn.numeric.keypress=function(t){var i=e.data(this,"numeric.decimal"),n=e.data(this,"numeric.negative"),a=t.charCode?t.charCode:t.keyCode?t.keyCode:0;if(13==a&&"input"==this.nodeName.toLowerCase())return!0;if(13==a)return!1;var r=!1;if(t.ctrlKey&&97==a||t.ctrlKey&&65==a)return!0;if(t.ctrlKey&&120==a||t.ctrlKey&&88==a)return!0;if(t.ctrlKey&&99==a||t.ctrlKey&&67==a)return!0;if(t.ctrlKey&&122==a||t.ctrlKey&&90==a)return!0;if(t.ctrlKey&&118==a||t.ctrlKey&&86==a||t.shiftKey&&45==a)return!0;if(a<48||a>57){var c=e(this).val();if(0!==c.indexOf("-")&&n&&45==a&&(0===c.length||0===parseInt(e.fn.getSelectionStart(this),10)))return!0;i&&a==i.charCodeAt(0)&&-1!=c.indexOf(i)&&(r=!1),8!=a&&9!=a&&13!=a&&35!=a&&36!=a&&37!=a&&39!=a&&46!=a?r=!1:void 0!==t.charCode&&(t.keyCode==t.which&&0!==t.which?(r=!0,46==t.which&&(r=!1)):0!==t.keyCode&&0===t.charCode&&0===t.which&&(r=!0)),i&&a==i.charCodeAt(0)&&(r=-1==c.indexOf(i))}else if(e.data(this,"numeric.scale")>=0){var s=this.value.indexOf(i);s>=0?(decimalsQuantity=this.value.length-s-1,e.fn.getSelectionStart(this)>s?r=decimalsQuantity<e.data(this,"numeric.scale"):(integersQuantity=this.value.length-1-decimalsQuantity,r=integersQuantity<e.data(this,"numeric.precision")-e.data(this,"numeric.scale"))):r=!(e.data(this,"numeric.precision")>0)||this.value.replace(e.data(this,"numeric.decimal"),"").length<e.data(this,"numeric.precision")-e.data(this,"numeric.scale")}else r=!(e.data(this,"numeric.precision")>0)||this.value.replace(e.data(this,"numeric.decimal"),"").length<e.data(this,"numeric.precision");return r},e.fn.numeric.keyup=function(t){var i=e(this).val();if(i&&i.length>0){var n=e.fn.getSelectionStart(this),a=e.data(this,"numeric.decimal"),r=e.data(this,"numeric.negative");if(""!==a&&null!==a){var c=i.indexOf(a);0===c&&(this.value="0"+i),1==c&&"-"==i.charAt(0)&&(this.value="-0"+i.substring(1)),i=this.value}for(var s=[0,1,2,3,4,5,6,7,8,9,"-",a],u=i.length,l=u-1;l>=0;l--){var h=i.charAt(l);0!==l&&"-"==h?i=i.substring(0,l)+i.substring(l+1):0!==l||r||"-"!=h||(i=i.substring(1));for(var d=!1,o=0;o<s.length;o++)if(h==s[o]){d=!0;break}d&&" "!=h||(i=i.substring(0,l)+i.substring(l+1))}var m=i.indexOf(a);if(m>0){for(var f=u-1;f>m;f--){i.charAt(f)==a&&(i=i.substring(0,f)+i.substring(f+1))}e.data(this,"numeric.scale")>=0&&(i=i.substring(0,m+e.data(this,"numeric.scale")+1)),e.data(this,"numeric.precision")>0&&(i=i.substring(0,e.data(this,"numeric.precision")+1))}else e.data(this,"numeric.precision")>0&&(i=i.substring(0,e.data(this,"numeric.precision")-e.data(this,"numeric.scale")));this.value=i,e.fn.setSelection(this,n)}},e.fn.numeric.blur=function(){var t=e.data(this,"numeric.decimal"),i=e.data(this,"numeric.callback"),n=this.value;""!==n&&(new RegExp("^\\d+$|^\\d*"+t+"\\d+$").exec(n)||i.apply(this))},e.fn.removeNumeric=function(){return this.data("numeric.decimal",null).data("numeric.negative",null).data("numeric.callback",null).unbind("keypress",e.fn.numeric.keypress).unbind("blur",e.fn.numeric.blur)},e.fn.getSelectionStart=function(e){if(e.createTextRange){var t=document.selection.createRange().duplicate();return t.moveEnd("character",e.value.length),""===t.text?e.value.length:e.value.lastIndexOf(t.text)}return e.selectionStart},e.fn.setSelection=function(e,t){if("number"==typeof t&&(t=[t,t]),t&&t.constructor==Array&&2==t.length)if(e.createTextRange){var i=e.createTextRange();i.collapse(!0),i.moveStart("character",t[0]),i.moveEnd("character",t[1]),i.select()}else e.setSelectionRange&&(e.focus(),e.setSelectionRange(t[0],t[1]))}}(jQuery);


//get random ID
function get_random_number() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4();
}

  //convert bytes to KB< MB,GB,TB
function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
 };
 
 //validate amount
 function validateAmount(_this) {
     if (isNaN(jQuery.trim(jQuery(_this).val()))) {
         jQuery(_this).val("");
     } else {
         var amt = jQuery(_this).val();
         if (amt != '') {
             if (amt.length > 16) {
                 amt = amt.substr(0, 16);
                 jQuery(_this).val(amt);
             }
             return true;
         } else {
             return true;
         }
     }
 }

 //Map styles
function houzillo_get_map_styles(style) {

    var styles = '';
    if (style == 'view_1') {
        var styles = [{"featureType": "administrative.country", "elementType": "geometry", "stylers": [{"visibility": "simplified"}, {"hue": "#ff0000"}]}];
    } else if (style == 'view_2') {
        var styles = [{"featureType": "water", "elementType": "all", "stylers": [{"hue": "#7fc8ed"}, {"saturation": 55}, {"lightness": -6}, {"visibility": "on"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"hue": "#7fc8ed"}, {"saturation": 55}, {"lightness": -6}, {"visibility": "off"}]}, {"featureType": "poi.park", "elementType": "geometry", "stylers": [{"hue": "#83cead"}, {"saturation": 1}, {"lightness": -15}, {"visibility": "on"}]}, {"featureType": "landscape", "elementType": "geometry", "stylers": [{"hue": "#f3f4f4"}, {"saturation": -84}, {"lightness": 59}, {"visibility": "on"}]}, {"featureType": "landscape", "elementType": "labels", "stylers": [{"hue": "#ffffff"}, {"saturation": -100}, {"lightness": 100}, {"visibility": "off"}]}, {"featureType": "road", "elementType": "geometry", "stylers": [{"hue": "#ffffff"}, {"saturation": -100}, {"lightness": 100}, {"visibility": "on"}]}, {"featureType": "road", "elementType": "labels", "stylers": [{"hue": "#bbbbbb"}, {"saturation": -100}, {"lightness": 26}, {"visibility": "on"}]}, {"featureType": "road.arterial", "elementType": "geometry", "stylers": [{"hue": "#ffcc00"}, {"saturation": 100}, {"lightness": -35}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "elementType": "geometry", "stylers": [{"hue": "#ffcc00"}, {"saturation": 100}, {"lightness": -22}, {"visibility": "on"}]}, {"featureType": "poi.school", "elementType": "all", "stylers": [{"hue": "#d7e4e4"}, {"saturation": -60}, {"lightness": 23}, {"visibility": "on"}]}];
    } else if (style == 'view_3') {
        var styles = [{"featureType": "water", "stylers": [{"saturation": 43}, {"lightness": -11}, {"hue": "#0088ff"}]}, {"featureType": "road", "elementType": "geometry.fill", "stylers": [{"hue": "#ff0000"}, {"saturation": -100}, {"lightness": 99}]}, {"featureType": "road", "elementType": "geometry.stroke", "stylers": [{"color": "#808080"}, {"lightness": 54}]}, {"featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{"color": "#ece2d9"}]}, {"featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{"color": "#ccdca1"}]}, {"featureType": "road", "elementType": "labels.text.fill", "stylers": [{"color": "#767676"}]}, {"featureType": "road", "elementType": "labels.text.stroke", "stylers": [{"color": "#ffffff"}]}, {"featureType": "poi", "stylers": [{"visibility": "off"}]}, {"featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{"visibility": "on"}, {"color": "#b8cb93"}]}, {"featureType": "poi.park", "stylers": [{"visibility": "on"}]}, {"featureType": "poi.sports_complex", "stylers": [{"visibility": "on"}]}, {"featureType": "poi.medical", "stylers": [{"visibility": "on"}]}, {"featureType": "poi.business", "stylers": [{"visibility": "simplified"}]}];
    } else if (style == 'view_4') {
        var styles = [{"elementType": "geometry", "stylers": [{"hue": "#ff4400"}, {"saturation": -68}, {"lightness": -4}, {"gamma": 0.72}]}, {"featureType": "road", "elementType": "labels.icon"}, {"featureType": "landscape.man_made", "elementType": "geometry", "stylers": [{"hue": "#0077ff"}, {"gamma": 3.1}]}, {"featureType": "water", "stylers": [{"hue": "#00ccff"}, {"gamma": 0.44}, {"saturation": -33}]}, {"featureType": "poi.park", "stylers": [{"hue": "#44ff00"}, {"saturation": -23}]}, {"featureType": "water", "elementType": "labels.text.fill", "stylers": [{"hue": "#007fff"}, {"gamma": 0.77}, {"saturation": 65}, {"lightness": 99}]}, {"featureType": "water", "elementType": "labels.text.stroke", "stylers": [{"gamma": 0.11}, {"weight": 5.6}, {"saturation": 99}, {"hue": "#0091ff"}, {"lightness": -86}]}, {"featureType": "transit.line", "elementType": "geometry", "stylers": [{"lightness": -48}, {"hue": "#ff5e00"}, {"gamma": 1.2}, {"saturation": -23}]}, {"featureType": "transit", "elementType": "labels.text.stroke", "stylers": [{"saturation": -64}, {"hue": "#ff9100"}, {"lightness": 16}, {"gamma": 0.47}, {"weight": 2.7}]}];
    } else if (style == 'view_5') {
        var styles = [{"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#e9e9e9"}, {"lightness": 17}]}, {"featureType": "landscape", "elementType": "geometry", "stylers": [{"color": "#f5f5f5"}, {"lightness": 20}]}, {"featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{"color": "#ffffff"}, {"lightness": 17}]}, {"featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{"color": "#ffffff"}, {"lightness": 29}, {"weight": 0.2}]}, {"featureType": "road.arterial", "elementType": "geometry", "stylers": [{"color": "#ffffff"}, {"lightness": 18}]}, {"featureType": "road.local", "elementType": "geometry", "stylers": [{"color": "#ffffff"}, {"lightness": 16}]}, {"featureType": "poi", "elementType": "geometry", "stylers": [{"color": "#f5f5f5"}, {"lightness": 21}]}, {"featureType": "poi.park", "elementType": "geometry", "stylers": [{"color": "#dedede"}, {"lightness": 21}]}, {"elementType": "labels.text.stroke", "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"lightness": 16}]}, {"elementType": "labels.text.fill", "stylers": [{"saturation": 36}, {"color": "#333333"}, {"lightness": 40}]}, {"elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "transit", "elementType": "geometry", "stylers": [{"color": "#f2f2f2"}, {"lightness": 19}]}, {"featureType": "administrative", "elementType": "geometry.fill", "stylers": [{"color": "#fefefe"}, {"lightness": 20}]}, {"featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{"color": "#fefefe"}, {"lightness": 17}, {"weight": 1.2}]}];
    } else if (style == 'view_6') {
        var styles = [{"featureType": "landscape", "stylers": [{"hue": "#FFBB00"}, {"saturation": 43.400000000000006}, {"lightness": 37.599999999999994}, {"gamma": 1}]}, {"featureType": "road.highway", "stylers": [{"hue": "#FFC200"}, {"saturation": -61.8}, {"lightness": 45.599999999999994}, {"gamma": 1}]}, {"featureType": "road.arterial", "stylers": [{"hue": "#FF0300"}, {"saturation": -100}, {"lightness": 51.19999999999999}, {"gamma": 1}]}, {"featureType": "road.local", "stylers": [{"hue": "#FF0300"}, {"saturation": -100}, {"lightness": 52}, {"gamma": 1}]}, {"featureType": "water", "stylers": [{"hue": "#0078FF"}, {"saturation": -13.200000000000003}, {"lightness": 2.4000000000000057}, {"gamma": 1}]}, {"featureType": "poi", "stylers": [{"hue": "#00FF6A"}, {"saturation": -1.0989010989011234}, {"lightness": 11.200000000000017}, {"gamma": 1}]}];
    } else {
        var styles = [{"featureType": "administrative.country", "elementType": "geometry", "stylers": [{"visibility": "simplified"}, {"hue": "#ff0000"}]}];
    }
    return styles;
}


//get distance
function _get_distance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1 / 180
    var radlat2 = Math.PI * lat2 / 180
    var theta = lon1 - lon2
    var radtheta = Math.PI * theta / 180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180 / Math.PI
    dist = dist * 60 * 1.1515
    if (unit == "K") {
        dist = dist * 1.609344
    }
    if (unit == "N") {
        dist = dist * 0.8684
    }
    return dist
}

// get rounded value
function _get_round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}


//SVG Render
jQuery("img.amsvglogo").each(function(){var t=jQuery(this),r=t.attr("id"),a=t.attr("class"),e=t.attr("src");jQuery.get(e,function(e){var i=jQuery(e).find("svg");void 0!==r&&(i=i.attr("id",r)),void 0!==a&&(i=i.attr("class",a+" replaced-svg")),i=i.removeAttr("xmlns:a"),t.replaceWith(i)},"xml")});

