var gridShips = (function() {
  


  function printGallery(data) {

    for (i = 0; i < 6; i++) { 
      //console.log(data.results[i].name)
      var d = data.results[i].url
      //console.log(d.match(/\d+/)[0])
    };
  }

  return {
    printGallery : printGallery
  }

})();