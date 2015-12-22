
$(document).ready(function(){
    sideMenu(".side-menu");


});

/* left menu */
function sideMenu(obj){
    var obj = $(obj)
        ,dep1 = obj.find(" > li")
        ,submenu = obj.find(" > li > ul")


    submenu.css("display","none");
    dep1.find("a").each(function(){
        $(this).click(function(e){
            var isOpen = $(this).parent().hasClass("open")? true : false;
           dep1.each(function(){
                $(this).removeClass("open").find("> ul").slideUp("normal");
            });
            if(!isOpen){
                $(this).parent()[isOpen? "removeClass" : "addClass"]("open");
                $(this).siblings("ul").slideDown("normal");
            }else{
                $(this).parent()[isOpen? "removeClass" : "addClass"]("open");
                $(this).siblings("ul").slideUp("normal");
            }
            return false;
        });
    });


}

/* tab Menu */
$.fn.tab = function(options) {
    var that = $(this);
    options = $.extend({}, $.fn.tab.options, options);
    function init() {
        that.find(options.navs).on('click', show);
    }
    function show(e) {
        if(e) {
            e.preventDefault();
        }
        that.find("a").removeClass(options.current);
        $(this).addClass(options.current);

        $(this.hash).addClass(options.contents)
            .siblings().removeClass(options.contents);
    }
    this.go = function(index) {
        that.find(options.navs).eq(index).trigger('click');
    };
    init();
    return this.each(function () {
        var elem = $(this);
    });
};
$.fn.tab.options = {
    navs:'> a',
    contents:'active',
    current:'on'
};

var tooltip = function(obj){
    var $obj = $(obj);
    var $tooltipLayer = $(".tooltip-layer")
    $obj.each(function(){
        $(this).hover(
            function(){
               $tooltipLayer.removeClass("close");
                $(this.hash).addClass("open")
            },
            function(){
               $tooltipLayer.removeClass("open");
                $(this.hash).addClass("close");

            }
        );
    });
};
tooltip(".tooltip");




