var container = document.getElementById('blue-zigzag-container');
var element = document.getElementById('blue-zigzag');

var onMouseMoveHandler = function(event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

window.onmousemove = onMouseMoveHandler;

var counter = 0;
var updateRate = 10;
var isTimeToUpdate = function() {
  return counter++ % updateRate === 0;
};

var mouse = {
  _x: 0,
  _y: 0,
  x: 0,
  y: 0,
  updatePosition: function(event) {
    var e = event || window.event;
    this.x = e.clientX - this._x;
    this.y = (e.clientY - this._y) * -1;
  },
//   setOrigin: function(e) {
//     this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
//     this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
//   },
  show: function() { return '(' + this.x + ', ' + this.y + ')'; }
}

var update = function(event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / element.offsetHeight/2).toFixed(2),
      (mouse.x / element.offsetWidth/2).toFixed(2)
    );
  };
  
  var updateTransformStyle = function(x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    element.style.transform = style;
    element.style.webkitTransform = style;
    element.style.mozTransform = style;
    element.style.msTransform = style;
    element.style.oTransform = style;
  };

// var container = document.getElementById('visual-container--dynamic');
// var windowHeight = window.innerHeight;
// var windowWidth = window.innerWidth;
// var scrollArea = 1000 - windowHeight;
// var darkblues = document.getElementsByClassName('darkblue');
// var greentrees = document.getElementsByClassName('greentree');
// var pinktriangles = document.getElementsByClassName('pinktriangle');
// var tealzigzags = document.getElementsByClassName('tealzigzag');
// var yellowcircles = document.getElementsByClassName('yellowcircle');

// // update position of square 1 and square 2 when scroll event fires.
// window.addEventListener('scroll', function() {
//   var scrollTop = window.pageYOffset || window.scrollTop;
//   var scrollPercent = scrollTop/scrollArea || 0;

//   darkblues[0].style.top = scrollPercent*window.innerWidth*0.1 + 'px';
// //   square2.style.left = 800 - scrollPercent*window.innerWidth*0.6 + 'px';
// });