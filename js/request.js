var shipInfo = (function() {
  var item = $('.ships-item');

  function getID() {
    var id = $(this).data('type').match(/\d+/)[0];
    api.respont(id);
  }

  var init = item.on( "click", getID );

  return {
    init : init
  }
})()