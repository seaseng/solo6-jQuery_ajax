$(document).ready(function(){

  function setCellColor(cell, color) {
    debugger
    var current_cell = $('#color_me li').eq(cell-1);
    current_cell.css('background-color', color);
  }

  $('#get_color').on('click', function (e) {
    e.preventDefault();
    var get_ajax = $.ajax({
        url: '/color',
        method: 'post',
        dataType: 'json'
      });

    get_ajax.done(function (response) {
      console.log(response);

      setCellColor(response.cell, response.color);
      // debugger; 
    });

  });


});