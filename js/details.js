var showDetails = (function() {
  var nameShip = $('.name-ship');
  var modelShip = $('.model-ship');
  var manufacturerShip = $('.manufacturer-ship');
  var pictureShip = $('#picture-ship');

  var shipContainer = $('#ship-container');
  var close = $('#close-container');
  var shipInfo = $('#ship-info');

  function shipChosen(data){
    nameShip.html(data.name);
    modelShip.html(data.model);
    manufacturerShip.html(data.manufacturer);

    pictureShip.attr('src','img/ships/ship-'+ localStorage.getItem('id') +'.jpg');
    shipContainer.fadeIn();

    close.on('click', hide)
  }

  function hide() {
    shipContainer.fadeOut();
  }

  return {
    shipChosen : shipChosen
  }
})();
