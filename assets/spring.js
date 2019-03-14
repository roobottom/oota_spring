$(document).ready(function () {
  //audio players
  $('.spring-song').each(function() {
    var $audioFile = $('.spring-song-audio', this);
    var $button = $('.spring-song-playpause', this);

    $button.click(function () {
      if($(this).hasClass('stopped')) 
      {
        //pause all playing audio
        $('.spring-song-audio').trigger('pause');
        $('.spring-song-playpause').addClass('stopped');
        //now play this track
        $(this).removeClass('stopped');
        $audioFile.trigger('play');
      }
      else
      {
        $(this).addClass('stopped');
        $audioFile.trigger('pause');
      } 
      
    });

  });
});