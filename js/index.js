$('.best_seller .list li').hover(function () {
    if ($(this).hasClass('on')) {
        $(this).removeClass('on');
    } else {
        $(this).addClass('on');
    }
}) 