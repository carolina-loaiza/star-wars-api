var shipInfo = (function() {
  var item = $('.ships-item');

  function init() {
    api.getData(gridShips.printGallery, '?page=3');
    item.on( "click", getID );
  }

  function getID() {
    var id = $(this).data('type').match(/\d+/)[0];
    api.getData(showDetails.shipChosen, id);
    localStorage.setItem('id', id);
  }

  return {
    init : init
  }
})();