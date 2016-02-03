var gridShips = (function() {
  var containerGrid = $('#ships-container');

  function printGallery(data) {
    var cont = 0;
    var content;
    var d;
    var dShip;
    var shipName;
    var grid = '<div class="row">';

    for (i = 0; i < 9; i++) { 
      cont ++;
      d = data.results[i].url;
      dShip = d.match(/\d+/)[0];
      shipName = data.results[i].name;      
      content = '<div class="col-md-4 ships-item ship-'+dShip+'" data-type="ship-'+dShip+'"><h3>'+shipName+'</h3></div>';
      grid += content;

      if(cont%3 == 0){
        containerGrid.append(grid);
        grid = '<div class="row">';
      }
      //console.log(data.results[i].name)
      //console.log(d.match(/\d+/)[0])
      //containerGrid.append(content);
    };

    grid += '</div>';
  }

  return {
    printGallery : printGallery
  }

})();