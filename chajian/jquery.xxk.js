$.fn.xxk = function(options) {
    var defaults = {
        name:"#abc"
    };
    var settings = $.extend({},defaults, options);//将一个空对象做为第一个参数
    return this.on("click",function(){
        var $this =$(this);
        var $index =$this.index();
        $this.addClass("active").siblings().removeClass("active");
        $(settings.name+":eq("+$index+")").show().siblings().hide();
    });

}