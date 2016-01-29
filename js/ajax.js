var api = (function() {
  function callAjax(id) {
    $.ajax({
      type:'GET',
      url: 'http://swapi.co/api/starships/'+id,
      dataType:'json',
      success:function(data) {
        showDetails.shipChosen(data, id)
      },
      error:function(jqXHR, textStatus, errorThrown) {
        console.log("Text Status:" +textStatus+"\nError:"+errorThrown);
      }
    });
  }

  return {
    respont : callAjax
  }
})()