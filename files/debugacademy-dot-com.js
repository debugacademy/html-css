$(function() {
  $('body').prepend('<a href="#" class="styleDebug" id="template">Debug</a>');
  $('body').prepend('<a href="#" class="noStyleDebug" id="template">Stop Debugging</a>');
  $('.noStyleDebug').toggle();

  $('.styleDebug').click(function() {
    var debug = 'files/' + $(this).attr('id') + '.css?' + $.now();
    $('head').append('<link rel="stylesheet" type="text/css" href="' + debug + '">');
    $(this).toggle();
    $('.noStyleDebug').toggle();
  });

  $('.noStyleDebug').click(function() {
    $(this).toggle();
    $('.styleDebug').toggle();
      $('link[rel="stylesheet"]:last').remove();
    });
});
