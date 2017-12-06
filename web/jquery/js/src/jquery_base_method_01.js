//중간스크롤 내리면 상단에 고정시키기


(function($) {
var headBox = $('#headBox');
    var headOffset = headBox.offset().top;
    console.log(headOffset);

    $(window).on('scroll', function() {
        var winScroll = $(this).scrollTop();
        console.log(winScroll);

        if (headOffset <= winScroll) {
                headBox.addClass('fixed');
            } else {
                $('#headBox').removeClass('fixed');
            }
        });

var gnb=$('#gnb');
var gnbLi=gnb.find('li');
var gnbSpan=gnbLi.children('a').children('span');//원칙은 tag를 하나씩 다나열해서 지정해줘야함

var banner=$('#banner')
    gnbSpan.prependTo(banner);
    

})(this.jQuery);