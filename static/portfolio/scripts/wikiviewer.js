var wikiApp = function() {

  // Private

  function init() {
    console.log("init");
    searchHandler();
  }

  function searchHandler() {
    console.log('searchHandler');
    // $('#search-button').click(searchClick);
    $('#search').submit(searchClick);

  }

  // Callbacks
  function searchClick(event) {
    event.preventDefault();
    console.log('searchClick');

    $.ajax({
        url: "https://en.wikipedia.org/w/api.php?callback=?",
        data: {
        action: 'opensearch',
        search: $('#search-box').val(),
        limit: 10,
        origin: '*',
        },
        dataType: 'json',
        headers: {'Api-User-Agent': 'Example/1.0'},
        success: function (data) {
          $('.result-box').html('');
          for (var i = 1; i < data[1].length; i++) {
            $('.result-box').append('<a target="_blank" href="' + data[3][i] + '"><li class="result"><h3>' + data[1][i] + '</h3><h6>' + data[2][i] + '</h6></li></a>');
          }
          $('.result-box li').hover(function() {
            $(this).css({'background-color': 'black', 'color': 'white'});
            }, function() {
            $(this).css({'background-color': 'rgba(200,200,200,1)', 'color': 'black'});
          });
          }
    }); // Ajax
  }

  function displayResults(data) {
    console.log('displayResults', data);
  }

return {
  // Public
  init: init
  };
}();


$(document).ready(function() {
  console.log('ready');
  wikiApp.init();
});
