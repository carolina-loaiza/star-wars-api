var api = (function() {
  
  function getData(callback, src) {
    $.ajax({
      url : 'http://swapi.co/api/starships/'+src,
      type: 'GET',
      success : callback
    })
  }

  return {
    getData : getData
  }
})();