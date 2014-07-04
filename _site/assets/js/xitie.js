window.onload = function() {
  //background music
  $("#jquery_jplayer").jPlayer({
    ready: function () {
      $(this).jPlayer("setMedia", {
        m4a: "assets/mp3/come_away_with_me.mp3"
      }).jPlayer("play");
    },


    supplied: "m4a"
  });

  var playing = true 

  $("#jquery_jplayer_end").click(function() {
    if (playing == true) {
      $(".music").removeClass("music-play").addClass("music-pause")
      $("#jquery_jplayer").jPlayer("pause");
      playing = false
    } else {
      $(".music").removeClass("music-pause").addClass("music-play")
      $("#jquery_jplayer").jPlayer("play");
      playing = true
    }
  });

};
