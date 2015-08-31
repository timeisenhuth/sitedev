(function ($) {
  Drupal.behaviors.sitedev = {
    attach: function (context, settings) {
      $('.sitedev-field-info').click(function(){
        var fieldName = $(this).attr('data-field-name');
        var contentType = $(this).attr('data-content-type');

        console.log('Field name: ' + fieldName);
        console.log('Content type: ' + contentType);
      });
    }
  };
}(jQuery));