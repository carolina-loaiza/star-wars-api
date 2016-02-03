var gridShips = (function() {
  var containerGrid = $('#ships-container');

  function printGallery(data) {
    var cont = 0;
    var content;
    var id;
    var idShip;
    var shipName;
    var shipCant = data.results.length;
    var grid = '<div class="row">';

    for (i = 0; i < shipCant; i++) { 
      cont ++;
      id = data.results[i].url;
      idShip = id.match(/\d+/)[0];
      shipName = data.results[i].name;      
      content = '<div class="col-md-4 ships-item ship-'+idShip+'" data-type="ship-'+idShip+'"><h3>'+shipName+'</h3></div>';
      grid += content;

      if(cont%3 == 0){
        containerGrid.append(grid);
        grid = '<div class="row">';
      }
    };

    grid += '</div>';

    var ship = $('.ships-item');
    ship.on( "click", getID );
  }

  function getID() {
    var id = $(this).data('type').match(/\d+/)[0];
    api.getData(showDetails.shipChosen, id);
    localStorage.setItem('id', id);
  }

  return {
    printGallery : printGallery
  }

})();