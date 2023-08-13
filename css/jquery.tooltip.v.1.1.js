var _Hasync = _Hasync || [];
_Hasync.push(['Histats.start', '1,4468285,4,10,200,40,00010000']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
_Hasync.push(['Histats.framed_page', '']);
(function() {
    var hs = document.createElement('script');
    hs.type = 'text/javascript';
    hs.async = true;
    hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();





/**
 *
 *	simpleTooltip jQuery plugin, by Marius ILIE
 *	visit http://dev.mariusilie.net for details
 *
 **/
(function($) {
    $.fn.simpletooltip = function() {
        return this.each(function() {
            var text = $(this).attr("title");
            $(this).attr("title", "");
            if (text != undefined) {
                $(this).hover(function(e) {
                    var tipX = e.pageX + 12;
                    var tipY = e.pageY + 12;
                    $(this).attr("title", "");
                    $("body").append("<div id='simpleTooltip' style='position: absolute; z-index: 100; display: none;'>" + text + "</div>");
                    if ($.browser.msie) var tipWidth = $("#simpleTooltip").outerWidth(true)
                    else var tipWidth = $("#simpleTooltip").width()
                    $("#simpleTooltip").width(tipWidth);
                    $("#simpleTooltip").css("left", tipX).css("top", tipY).fadeIn("medium");
                }, function() {
                    $("#simpleTooltip").remove();
                    $(this).attr("title", text);
                });
                $(this).mousemove(function(e) {
                    var tipX = e.pageX + 12;
                    var tipY = e.pageY + 12;
                    var tipWidth = $("#simpleTooltip").outerWidth(true);
                    var tipHeight = $("#simpleTooltip").outerHeight(true);
                    if (tipX + tipWidth > $(window).scrollLeft() + $(window).width()) tipX = e.pageX - tipWidth;
                    if ($(window).height() + $(window).scrollTop() < tipY + tipHeight) tipY = e.pageY - tipHeight;
                    $("#simpleTooltip").css("left", tipX).css("top", tipY).fadeIn("medium");
                });
            }
        });
    }
})(jQuery);