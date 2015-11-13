// clock animation to be based off of http://i.imgur.com/NSiKM8Q.gifv
// css animation implemented from https://cssanimation.rocks/clocks/


// each number is 6 x 5 units with zero units in between, but 3 units 
// surrounding each side of whole number display unit
// center is 5,14

$(document).ready(function() {
  var numbers = {
    '1': [], 
    '2': [], 
    '3': [], 
    '4': [], 
    '5': [], 
    '6': [], 
    '7': [], 
    '8': [], 
    '9': [], 
    '0': [], 
    ':': [],
  }

  var initClock = function(x, y) {
    var centerX = 14;
    var centerY = 5;
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

    var location = x + '_' + y
    $clock.attr('id', location);

    // var setDelay = function(clock, x, y) {
    //   var distance = Math.sqrt(Math.abs(centerX - x) + Math.abs(centerY - y));
    //   console.log('distance is', distance)
    //   for(var i = 0; i < clock.children.length; i++) {
    //     var child = clock.children()[i];
    //     child.children[0].style.animationDelay = distance + 's';
    //   }
    // }

    var setStartAngle = function(clock, x, y) {
      var deltaX = centerX - x;
      var deltaY = centerY - y;
      var rad = Math.atan2(deltaY, deltaX);
      var deg = rad * (180 / Math.PI) + 90;
      var distance = Math.sqrt(Math.abs(centerX - x) + Math.abs(centerY - y));

      for(var i = 0; i < clock.children.length; i++) {
        var child = clock.children()[i];
        // set start rotation.... When modifying the transform rotateZ property, this is the end point.
        // there is a difference between settign the start angle for child, and child.children[0]
        // need to have two separate animations, one for child of  child, and one for child

        child.children[0].style.webkitTransform = 'rotateZ(' + deg + 'deg)';
        console.log('child classlist is', child.children[0]);
        if (child.classList[0] === 'minutes-container') {
          // end point should be at 225 degrees
          // var rotate = 360 + deg - 225;
          var rotate = 720 + deg;
          child.children[0].style.transform = 'rotateZ(' + rotate + 'deg)';
          child.children[0].style.animationDuraton = '1s';
          child.children[0].style.animationIterationCount = '1';
          child.children[0].style.animationTimingFunction = 'ease-out';
          child.children[0].style.animationDelay = (6 + distance) + 's';
        } else if (child.classList[0] === 'hours-container') {
          // var rotate = deg + 225;
          var rotate = 720 - deg;
          child.children[0].style.transform = 'rotateZ(-' + rotate + 'deg)';
          child.children[0].style.animationDuraton = '1s';
          child.children[0].style.animationIterationCount = '1';
          child.children[0].style.animationTimingFunction = 'ease-out';
          child.children[0].style.animationDelay = (6 + distance) + 's';
        }
        
        // for testing
        // child.style.animationDelay = distance + 60 + 's';
        // for deployment
        child.style.animationDelay = distance + 's';

      }
    }

    setStartAngle($clock, x, y);

    return $clock;
  }

  var initClocks = function() {
    // 12 columns with 29 rows

    var columns = 12;
    var rows = 29;

    for (var i = 0; i < columns; i++) {
      for (var j = 0; j < rows; j++) {
        var clock = initClock(j, i);
        $('body').append(clock);
      }
    }
  }

  initClocks();
});
