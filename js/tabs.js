;(function($){
  $.fn.Tabs = function(options){
    return this.each(function(index, value){
      var obj = $(this),
      objFirst = obj.eq(index),
      objNotFirst = obj.not(objFirst);
      
      $("#" +  objNotFirst.attr("data-toggle")).hide();
      $(this).eq(index).addClass("is-active");
      
      obj.click(function(evt){
        
        toggler = "#" + obj.attr("data-toggle");
        togglerRest = $(toggler).parent().find("div");
        
        togglerRest.hide().removeClass("is-active");
        $(toggler).show().addClass("is-active");

        //toggle Active Class on tab buttons
        $(this).parent("div").find("a").removeClass("is-active");
        $(this).addClass("is-active");

        return false; //Stop event Bubbling and PreventDefault
      });
    });
  };
}(jQuery));