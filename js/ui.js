
$(document).ready(function(){
    sideMenu(".side-dep1");


});

/* left menu */
function sideMenu(obj){
    var obj = $(obj)
        ,dep2 = obj.find(".side-dep2 > li > a");

    obj.find("li:not(.open)").each(function(){
        $(this).find(">ul, >div").css("display","none");
    });
    obj.find(".open ul, .open div").css("display","block");
    var act = function(e){
        if($(e.target).is("a")){
            var $ele = $(e.target),
                 $thisDeps = ($ele.parent().parent().prop("class").replace("side-dep",""))* 1,
                 isOpen = $ele.parent().hasClass("open")? true : false;
            $(".side-dep" + $thisDeps).find(".open").removeClass("open").find(">ul").slideUp("normal");
            if(!isOpen){
                $ele.parent()[isOpen? "removeClass" : "addClass"]("open");
                $ele.siblings("ul").slideDown("normal");
            }else{
                $ele.parent()[isOpen? "removeClass" : "addClass"]("open");
                $ele.siblings("ul").slideUp("normal");
            }
        }
    }
    obj.click( act )
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




