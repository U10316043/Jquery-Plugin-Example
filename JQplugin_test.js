(function($) {
	
	var defaultColor = {
		color : "pink"
	};
	$.fn.fill = function(options) {
		if(options){
			var settings = $.extend({color: defaultColor}, options);
			return this.css({color: settings.color});
		}else{
			return this.css({color: defaultColor.color});
		}
	};
	$.fill = function(options) {
		if(options){
			var settings = $.extend({color: defaultColor}, options);
			$("body").css({"background-color": settings.color});
		}else{
			$("body").css({"background-color": defaultColor.color});
		}
	}
	
	$.fill.options = defaultColor;
	$.title = function(options){
		if(options){
			$(this).attr("title", options);
		}else{
			var getTitle = $(this).attr("title");
		}
	}
	
}(jQuery)); 