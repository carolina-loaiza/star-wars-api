var showDetails = (function() {
  var nameShip = $('.name-ship');
  var modelShip = $('.model-ship');
  var manufacturerShip = $('.manufacturer-ship');
  var pictureShip = $('#ok');

  var shipContainer = $('#ship-container');
  var close = $('#close-container');
  var shipInfo = $('#ship-info');

  function hide() {
    shipContainer.fadeOut().addClass('hidden');
  }

  function shipChosen(data, id){
    nameShip.html(data.name);
    modelShip.html(data.model);
    manufacturerShip.html(data.manufacturer);

    pictureShip.attr('src','img/ships/ship-'+id+'.jpg');
    shipContainer.fadeIn().removeClass('hidden');

    close.on('click', hide)
  }

  return {
    shipChosen : shipChosen
  }
})()