// clock animation to be based off of http://i.imgur.com/NSiKM8Q.gifv)


// each number is 6 x 5 units with zero in between, but 3 units 
// surrounding each side of whole number display unit

$(document).ready(function() {

  var initClock = function(x, y) {

    var $clock = $('<article>', {
      class:'clock'
    });
    var $hoursContainer = $('<div>', {
      class: 'hours-container'
    });
    $clock.append($hoursContainer);

    var $hours = $('<div>', {
      class: 'hours'
    });
    $hoursContainer.append($hours);

    var $minutesContainer = $('<div>', {
      class: 'minutes-container'
    });
    $clock.append($minutesContainer);

    var $minutes = $('<div>', {
      class: 'minutes'
    });
    $minutesContainer.append($minutes);

    var location = x + ',' + y
    $clock.attr('id', location);

    return $clock;
  }

  var initClocks = function() {
    // 12 columns with 29 rows

    var columns = 12;
    var rows = 29;

    for (var i = 0; i < columns; i++) {
      for (var j = 0; j < rows; j++) {
        console.log('ya');
        var clock = initClock(j, i);
        // clock.attr('id', )
        $('body').append(clock);
      }
    }
  }

  initClocks();
});