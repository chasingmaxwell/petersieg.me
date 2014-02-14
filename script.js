(function($){

  'use strict';

  $(window).load(function() {
    $('.profile-link').on('click', function(e) {

      // Initiate variables.
      var profileId, href;
      profileId = $(this).attr('profileId');
      href = $(this).attr('href');

      // Send the event to analytics and send the user to the external url when
      // we're done.
      ga('send', 'event', 'Profile Links', 'Click', profileId, {
        'hitCallback': function() {
          document.location.href = href;
        }
      });

      // Prevent default action until after we've registered an event.
      e.preventDefault();

    });
  });
})(jQuery);

