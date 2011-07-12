(function($){
 
    $.fn.extend({ 
         
        leanModal: function(options) {
 
            var defaults = {
                top: -1,
                overlay: 0.5,
                onOpen: function() {},
                onClose: function() {}
            }
                 
            var o = $.extend(defaults, options);

            return this.each(function() {
                $(this).click(function(e) {
	          	  	var overlay = $("<div id='lean_overlay'></div>");
	              	var modal_id = $(this).attr("href");
					$("body").append(overlay);
					$("#lean_overlay").click(function() { 
	                    $("#lean_overlay").fadeOut(200, o.onClose);
		        		$(modal_id).css({ 'display' : 'none' });                    
	                });	
	              	var modal_height = $(modal_id).outerHeight();
	        	  	var modal_width = $(modal_id).outerWidth();
	        		$('#lean_overlay').css({ 'display' : 'block', opacity : 0 });
	        		$('#lean_overlay').fadeTo(200, o.overlay);
	        		$(modal_id).css({
	        			'display': 'block',
	        			'position': 'fixed',
	        			'opacity': 0,
	        			'z-index': 11000,
	        			'left': 50 + '%',
	        			'margin-left': -(modal_width/2) + 'px',
	        			'top': (o.top < 0 ? '50%' : o.top + 'px'),
	        			'margin-top': (o.top < 0 ? -(modal_height/2)+'px' : 0)
	        		});
	        		$(modal_id).fadeTo(200, 1, o.onOpen);
	                e.preventDefault();
             	});
            });    
        }
    });
     
})(jQuery);