var shipInfo = (function() {
  var btn = $('#show-more-btn');

  function init() {
    api.getData(gridShips.printGallery, '?page=1');
  }

  function showMore() {
    api.getData(gridShips.printGallery, '?page=3');
    btn.hide();
  }

  btn.on( "click", showMore );

  return {
    init : init
  }
})();