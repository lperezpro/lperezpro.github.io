jQuery(function ($) {
    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------
    (function () {
        $('#preloader').delay(300).fadeOut('slow');
    }());
});

// Initialize popover component
$(function () {
    $('[data-toggle="popover"]').popover()
})

$('.btn-more').click(function () {
    $(this).text(function (i, old) {
        return old === 'less' ? 'more' : 'less';
    });
});