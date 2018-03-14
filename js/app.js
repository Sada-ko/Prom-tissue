/**
 * Created by Sada-Mac on 05/02/18.
 */

$(document).ready(function () {

    // Карусел
    $('.carousel').carousel({
        interval: false
    });


    (function ($, window, document) {
        $.fn.fillBox = function() {

            this.each(function(){
                var el = $(this),
                    src = el.attr('src'),
                    parent = el.parent();

                parent.addClass('filled');

                parent.css({
                    'background-image'    : 'url(' + src + ')',
                    'background-size'     : 'cover',
                    'background-position' : 'center'
                    //'transition' : 'all 0.1s ease-in-out 0s'
                });

                el.hide();
            });
        };
    }(jQuery, window, document));


});