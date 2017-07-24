var TwitchApp = (function() {

  var config = {
  userList: ["ESL_SC2", "OgamingSC2", "cretetion", "FreeCodeCamp",
               "storbeck", "Habathcx", "RobotCaleb", "noobs2ninjas",
            "brunofin", "comster404"],
  baseURL: "https://wind-bow.gomix.me/twitch-api"
  };

  var init = function () {
    createList();
  };

  var createList = function() {
    config.userList.forEach(function(user) {
      $('#list').append('<a href="https://www.twitch.tv/' + user + '"  target="_blank"><li class="list-item" id="' + user + '"><span class="user"></span><span class="status"></span><span class="viewers"></span><span class="preview"></span></li></a>');
      getChannels(user);
      getStream(user);
    });
  };

  var getChannels = function(user) {
    $.getJSON(config.baseURL + '/channels/' + user + '?callback=?', function(data) {
      console.log('showing logo, name, and offline status', data.display_name)
      var name = '#' + data.display_name;
      if (data.error !== "Not Found") {
      $(name + ' > .user').append('<img src="' + data.logo + '" alt="User Icon">')
           .append(data.display_name);
      } else {
        $('#' + user + ' > .status').remove();
        $('#' + user + ' > .user').append(data.message).addClass('no-user');
      }
    });
  };

  var getStream = function(user) {
      $.getJSON(config.baseURL + '/streams/' + user + '?callback=?', function(data) {
        var name = '#' + user;
        if (data.stream !== null) {
          console.log('changing status to online and appending preview', user)
          $(name + ' > .status').text('Online').css({'color': 'green'});
          $(name + ' > .viewers').append(data.stream.viewers + ' viewers');
          $(name + ' > .preview').append('<img src="' + data.stream.preview.small + '">');
        } else {
          $(name + ' > .status').text('Offline');
        }
      });
  };

  return {
    init: init
  };
})();


$(document).ready(function() {
  TwitchApp.init();
});
