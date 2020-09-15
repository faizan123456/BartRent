//"use strict";
var chat_interval;
var eonearea;
var thread_page 		= 0;
var older_more 			= 'yes';
var loader_html 		= '<div class="at-preloader-section"><div class="at-preloader-holder"><div class="at-loader"></div></div></div>';
var chat_loader_html 	 = '<div class="at-preloader-checkout"><div class="at-preloader-holder"><div class="at-loader"></div></div></div>';

jQuery(document).on('ready', function() {
   
	var chatloader  	= scripts_vars.chatloader;
	var chat_settings = scripts_vars.chat_settings;
	var chat_page   	= scripts_vars.chat_page;
	var chat_host   	= scripts_vars.chat_host;
	var chat_port   	= scripts_vars.chat_port;

	if( chat_settings === 'chat' && chat_page === 'yes' ){
		var socket = io.connect(chat_host+":"+chat_port);
	}
	
	/* CHATBOX TOGGLE  */
	jQuery('#at-btnclosechat, #at-getsupport, #btn-contact').on('click', function(){
		jQuery('.at-chatbox').slideToggle();
		refreshScrollBarObject();
		//add user into socket
		var current_user_id = jQuery(this).data('currentid');
		if( chat_settings === 'chat' && chat_page === 'yes' ){
			socket.emit('add-user', { userId: current_user_id } );
		}
	});
	
	
	
	/* THEME VERTICAL SCROLLBAR */
    jQuery('.at-listverticalscrollbar').mCustomScrollbar({
		axis:"y",
		autoHideScrollbar: false,
	});

	//message holder
    jQuery(document).on('click', '.at-ad', function(e){
        jQuery(this).parents('.at-messages-holder').addClass('at-openmsg');
    });
	
	//Back click
    jQuery(document).on('click', '.at-back', function(e){
        jQuery(this).parents('.at-messages-holder').removeClass('at-openmsg');
    });
    
	//Apply user filter
	jQuery('.at-filter-users').on('keyup', function($){
		var content = jQuery(this).val();           
		jQuery(this).parents('li').find('.at-adcontent h3:contains(' + content + ')').parents('.at-ad').show();
		jQuery(this).parents('li').find('.at-adcontent h3:not(:contains(' + content + '))').parents('.at-ad').hide(); 
	});
	
	// Case insenstive in Contains
	jQuery.expr[":"].contains = jQuery.expr.createPseudo(function(arg) {
		return function( elem ) {
			return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
		};
	});

	//remove class
	jQuery(document).on('click','.back-chat', function(e){
		var _this 			= jQuery(this);
		_this.parents('.at-messages__content').removeClass('at-message-user');
	});

	//Load One to One Chat
    jQuery(document).on('click','.at-load-chat', function(e){
	    e.preventDefault();
		thread_page			= 0;
		older_more 			= 'yes';
        var _this 			= jQuery(this);
        var user_id 		= _this.data('userid');     
        var current_user_id = _this.data('currentid');   
        var msg_id 			= _this.data('msgid');  
        var ischat 			= _this.data('ischat');
		
		var chat_img 		= _this.data('img');
		var chat_url 		= _this.data('url');
		var chat_name 		= _this.data('name');
		thread_page			= thread_page;
		
		//load user info
		var load_message_sidebar = wp.template('load-user-details');
		var chat_user = {chat_img: chat_img,chat_url: chat_url,chat_name: chat_name};       
		load_message_sidebar = load_message_sidebar(chat_user); 
		jQuery('.chat-current-user').html(load_message_sidebar);
		
		jQuery('.load-at-chat-message').html('');
		jQuery('.load-at-chat-message').append(chatloader);
		
		if( chat_settings === 'chat' && chat_page === 'yes' ){
			socket.emit('add-user', { userId: current_user_id } );
		}

		_this.parents('ul').find('li').removeClass('active');
		_this.addClass('active');
		_this.parents('.at-messages__content').addClass('at-message-user');

		//Get chat
		var dataString = 'thread_page=' + thread_page + '&user_id=' + user_id + '&current_id=' + current_user_id + '&msg_id=' + msg_id + '&action=fetchUserConversation';
		jQuery.ajax({
				type: "POST",
				url: scripts_vars.ajaxurl,
				data: dataString,
				dataType: "json",
				success: function (response) {
				_this.parents('.at-load-chat').find('.at-dhb-line').removeClass('.at-dot');
					if (response.type === 'success') {                   
						//Load Reply Box Template
						var load_reply_box = wp.template('load-chat-replybox');                         
						var user_data = {receiver_id: response.chat_receiver_id};        
						load_reply_box = load_reply_box(user_data);
						
						//Load Messages Template
						var load_message_temp = wp.template('load-chat-messagebox');
						var chat_data = {chat_nodes: response.chat_nodes,user_register: response.user_register,current_useravatar: response.current_useravatar,current_username: response.current_username};        
						load_message_temp = load_message_temp(chat_data); 
						jQuery('.load-at-chat-message').html(load_reply_box);
						jQuery('.load-at-chat-message .at-messages').append(load_message_temp);
						refreshScrollBarObject();
						eonearea = jQuery(".reply_msg").emojioneArea();
					} else {
						jQuery.sticky(response.message, {classList: 'important', speed: 200, autoclose: 5000});
					}
				}
			});
		});
	
	//Send One to One Chat
    jQuery(document).on('click', '.at-send-single', function (e) {
        e.preventDefault();              
        var _this 			= jQuery(this);
        var receiver_id   	= _this.data('receiver_id');
		var status   	  	= _this.data('status');
		var msg_type   	  	= _this.data('msgtype');
		var textarea_box	= _this.parents('.at-replaybox').find('textarea.reply_msg');
		var reply_msg 	  	= textarea_box.val();
		jQuery('.at-messages__area').append(chat_loader_html);
		jQuery('.at-messages__area').addClass('slighloader');
	
        //Send message  
        _this.parents('.at-messages__area, .at-messages__area').addClass('sp-chatsendspin');       
        var dataString = 'status=' + status + '&msg_type=' + msg_type + '&message=' + reply_msg + '&receiver_id=' + receiver_id + '&action=sendUserMessage';
		
        jQuery.ajax({
            type: "POST",
            url: scripts_vars.ajaxurl,
            data: dataString,
            dataType: "json",
            success: function (response) {
				jQuery('body').find('.at-preloader-checkout').remove();
				jQuery('.at-messages__area').removeClass('slighloader');
					if ( response.type === 'success' ) {
						textarea_box.val('');
						
						var load_message_temp 	= wp.template('load-chat-replybox');
						var data 			= {
							img_url	: response.chat_nodes[0].chat_avatar,
							name	: response.chat_nodes[0].chat_username,
							message	: response.chat_nodes[0].chat_message,
							_date	: response.chat_nodes[0].chat_date
							};   
						load_message_temp = load_message_temp(data); 
						jQuery('.at-messages__area .mCSB_container').append(load_message_temp);
						eonearea[0].emojioneArea.setText(''); 
						refreshScrollBarObject();
					}else{
						jQuery('body').find('.at-preloader-section').remove();
						jQuery.sticky(response.message, {classList: 'important', speed: 200, autoclose: 5000});
					}
			}
		});               
    });
	//real time chat 
	if( chat_settings === 'chat' && chat_page === 'yes' ){
		// receiving messages from server and show it to users
		socket.on('send_msg' , function(data){
			var chat_data 			= {chat_nodes: data.chat_nodes};
			var load_message_temp 	= wp.template('load-chat-messagebox');
			load_message_temp 		= load_message_temp(chat_data);

			jQuery(".load-at-chat-message").html(load_message_temp);
			refreshScrollBarObject();
		});
	}
	
	
    //Send One to One Chat
    jQuery(document).on('click','.at-send', function (e) {
		
        e.preventDefault();             
        var _this = jQuery(this);
        var receiver_id   = _this.data('receiver_id');
		var status   	  = _this.data('status');
		var msg_type   	  = _this.data('msgtype');
        var reply_msg 	  = _this.parents('.at-replaybox').find('textarea.reply_msg').val();       
		jQuery('body').append(loader_html);
		
        //Send message  
        // _this.parents('.at-iconbox, .at-iconboxv').addClass('sp-chatsendspin');       
        var dataString = 'status=' + status + '&msg_type=' + msg_type + '&message=' + reply_msg + '&receiver_id=' + receiver_id + '&action=sendUserMessage';
		
        jQuery.ajax({
            type: "POST",
            url: scripts_vars.ajaxurl,
            data: dataString,
            dataType: "json",
            success: function (response) {
				jQuery('.at-preloader-section').remove();
				if (response.type === 'success') {  
					_this.parents('.at-replaybox').find('textarea.reply_msg').val('');
					if(response.msg_type === 'modal'){
						jQuery.sticky(response.message, {classList: 'success', speed: 200, autoclose: 5000});
					}else{
						
						var load_message_temp = wp.template('load-chat-messagebox-single');
						var chat_data = {chat_nodes: response.chat_nodes};       
						
						load_message_temp = load_message_temp(chat_data); 
						jQuery('.load-at-chat-message').find('.at-messages__area .mCSB_container').append(load_message_temp);
						jQuery('.at-offersmessages').find('#load-user-chat-'+response.chat_receiver_id).attr('data-msgid', response.last_id);

						//last message
						var load_message_recent_data_temp = wp.template('load-chat-recentmsg-data');
						var chat_recent_data = {desc:response.replace_recent_msg}
						load_message_recent_data_temp = load_message_recent_data_temp(chat_recent_data);
						jQuery('.at-offersmessages').find('#load-user-chat-'+response.chat_receiver_id+ ' .at-adcontent .list-last-message').html(load_message_recent_data_temp);
						
						refreshScrollBarObject();
						eonearea[0].emojioneArea.setText(''); // clear input 
						
						if( chat_settings === 'chat' && chat_page === 'yes' ){
							var chat_data = { user_id:receiver_id, chat_nodes: response.chat_nodes_receiver };
							socket.emit('send_msg' , chat_data );
						}
						
					}
				}else{
					jQuery.sticky(response.message, {classList: 'important', speed: 200, autoclose: 5000});
				}
            }
        });               
    });  

	
    //Delete One to One Chat Message
    jQuery(document).on('click','.at-delete-message', function (e) {
        e.preventDefault();            
        var _this = jQuery(this);
        var messageId   = _this.data('id');
        var userId      = _this.data('user');

        //Delete message  
        jQuery('body').append(loader_html);       
        var dataString = 'msgid=' + messageId + '&user_id=' + userId + '&action=deleteChatMessage';
        jQuery.ajax({
            type: "POST",
            url: scripts_vars.ajaxurl,
            data: dataString,
            dataType: "json",
            success: function (response) {
            jQuery('.at-preloader-section').remove();
               if (response.type === 'success') {  
                    _this.parents('.at-msg-thread').remove();                                          
                    jQuery.sticky(response.message, {classList: 'success', speed: 200, autoclose: 5000 });                   
                } else {
                    jQuery.sticky(response.message, {classList: 'important', speed: 200, autoclose: 5000});
                }
            }
        });               
    });
});
//Send offer

jQuery(document).on('click','.at-send-offer', function (e) {
   e.preventDefault();              
	var _this 			= jQuery(this);
	var receiver_id   	= _this.data('receiver_id');
	var status   	  	= _this.data('status');
	var msg_type   	  	= _this.data('msgtype');
	var project_id		= jQuery('#project_id').val();
	var reply_msg 	  	= _this.parents('.at-replaybox').find('textarea.reply_msg').val(); 
	
	if(typeof  project_id === 'undefined' ) {
		project_id	= '';
	}
   //Send message  
   _this.addClass('sp-chatsendspin');       
   var dataString = 'project_id=' + project_id +'&status=' + status + '&msg_type=' + msg_type + '&message=' + reply_msg + '&receiver_id=' + receiver_id + '&action=sendUserMessage';
	jQuery('body').append(loader_html);
   jQuery.ajax({
	   type: "POST",
	   url: scripts_vars.ajaxurl,
	   data: dataString,
	   dataType: "json",
	   success: function (response) {
		_this.removeClass('.sp-chatsendspin');
		jQuery('.at-preloader-section').remove();
		if (response.type === 'success') {  
			_this.parents('.at-replaybox').find('textarea.reply_msg').val('');
			 if(response.msg_type === 'modal'){
				 jQuery.sticky(response.message, {classList: 'success', speed: 200, autoclose: 5000});
				 location.reload(true);
			 }else{
				 _this.parents('.at-offersmessages ul li').find('.at-load-chat.at-active').attr('data-msgid', response.chat_nodes[0].chat_id);
				 eonearea[0].emojioneArea.setText(''); // clear input 
			 }
		 }else{
			 jQuery.sticky(response.message, {classList: 'important', speed: 200, autoclose: 5000});
		 }
	   }
   });               
});

//load new message
function loadNewMessage(senderid,receiverid){
	chat_interval 	 = setInterval(function(){
		var msgid  		 = document.getElementById('load-user-chat-'+receiverid);
		var msg_id 		 = msgid.dataset.msgid;
		var SP_Editor 	 = '';
		window.SP_Editor = msg_id;

		var dataString = 'sender_id=' + senderid + '&receiver_id=' + receiverid + '&last_msg_id=' + msg_id + '&action=getIntervalChatHistoryData';
		jQuery.ajax({
			type: 'POST',
			url: scripts_vars.ajaxurl,
			processData: false,

			data: dataString,
			dataType: 'json',
			success:function(response){
				if (response.type === 'success') {  
					window.SP_Editor = parseInt( response.last_id );
					var load_message_temp = wp.template('load-chat-messagebox');
					var chat_data = {chat_nodes: response.chat_nodes};        
					load_message_temp = load_message_temp(chat_data); 
					jQuery('.load-at-chat-message').find('.at-messages .mCSB_container').html(load_message_temp);
					jQuery('.at-offersmessages').find('#load-user-chat-'+response.receiver_id).attr('data-msgid', response.last_id);

					//last message
					var load_message_recent_data_temp = wp.template('load-chat-recentmsg-data');
					var chat_recent_data = {desc:response.last_message}
					load_message_recent_data_temp = load_message_recent_data_temp(chat_recent_data);
					jQuery('.at-offersmessages').find('#load-user-chat-'+response.receiver_id+ ' .at-adcontent .list-last-message').html(load_message_recent_data_temp);

					refreshScrollBarObject();
				}
			}
		});
	},15000);
}

//init nicescroll       
function refreshScrollBarObject() {
    jQuery('.at-verticalscrollbar').mCustomScrollbar({
		axis:"y",
		scrollbarPosition: "outside",
		autoHideScrollbar: true,
		scrollTo:'bottom',
		setTop:"9999px",
		callbacks:{
			onTotalScrollBack:function(){ _add_older_messages(this) },
			onTotalScrollBackOffset:100,
			alwaysTriggerOffsets:false
		},
		advanced:{updateOnContentResize:false} //disable auto-updates (optional)
	});
	
	//update
	jQuery('.at-verticalscrollbar').mCustomScrollbar("update");
	
	jQuery('.at-msg-thread .at-description').linkify();
	
	//scroll to bottom
	jQuery('.at-verticalscrollbar').mCustomScrollbar('scrollTo','bottom');
}

// Load older messages
function _add_older_messages(el){
	if( older_more === 'yes' ){
		thread_page++;
		var _this = jQuery('.at-active');
		var chatloader  = scripts_vars.chatloader;
		var oldContentHeight	=	jQuery(".chat-history-wrap .mCSB_container").innerHeight();

		var user_id 		= _this.data('userid');     
		var current_user_id = _this.data('currentid');   
		var msg_id 			= _this.data('msgid');  
		var ischat 			= _this.data('ischat');

		var chat_img 			= _this.data('img');
		var chat_url 			= _this.data('url');
		var chat_name 			= _this.data('name');
		thread_page				= thread_page;
		
		jQuery('.load-at-chat-message').addClass('slighloader');
		jQuery('.load-at-chat-message').append(chatloader);
		
		//Get chat
		var dataString = 'thread_page=' + thread_page + '&user_id=' + user_id + '&current_id=' + current_user_id + '&msg_id=' + msg_id + '&action=fetchUserConversation';
		jQuery.ajax({
			type: "POST",
			url: scripts_vars.ajaxurl,
			data: dataString,
			dataType: "json",
			success: function (response) {
			   jQuery('.load-at-chat-message').removeClass('slighloader');
			   jQuery('.sp-chatspin').remove();
			   if (response.type === 'success') {
				   
					//Load Messages Template
					var load_message_temp 	= wp.template('load-chat-messagebox');
					var chat_data 			= {chat_nodes: response.chat_nodes};        
					load_message_temp 		= load_message_temp(chat_data); 
					el.mcs.content.prepend(load_message_temp);
				    
				    jQuery('.at-msg-thread .at-description').linkify();
				   
				    var heightDiff	= jQuery(".chat-history-wrap .mCSB_container").innerHeight() - oldContentHeight;
					jQuery(".chat-history-wrap").mCustomScrollbar("update"); //update manually
					jQuery(".chat-history-wrap").mCustomScrollbar("scrollTo","-="+heightDiff,{scrollInertia:0,timeout:0}); //scroll-to
				   
				} else {
					jQuery.sticky(response.message, {classList: 'important', speed: 200, autoclose: 5000});
					older_more  = 'no';
					thread_page = 0;
				}
			}
		});
	}
}