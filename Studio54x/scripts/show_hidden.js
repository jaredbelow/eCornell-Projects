$(function () {

  $('.faq').each(function() {

    $(this).on('click', function() {

      if ($(this).children('p.more').is(':visible')) {
        $(this).children('p.more').addClass('hidden');
        $(this).children('p.less').removeClass('hidden');
      } else {
        $(this).children('p.more').removeClass('hidden');
        $(this).children('p.less').addClass('hidden');
      }

    });

  });

});