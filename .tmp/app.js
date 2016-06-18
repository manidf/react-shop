(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var React = require(react);
var ReactAddons = require(react/addons);

module.exports = React.creatClass({
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("h1", null, "Grocery List")
   		)
		)
	}
});

},{}],2:[function(require,module,exports){
var React = require(react);
var ReactAddons = require(react/addons);

var GroceryItemList = require('./components/GroceryItemList.jsx');

console.log('hello from JSX');

react.render(React.createElement(GroceryItemList, null), app);

},{"./components/GroceryItemList.jsx":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWFubnVlbGZlcnJlaXJhL1dvcmtzcGFjZS9zYW5kYm94L3JlYWN0LXNob3AvYXBwL2NvbXBvbmVudHMvR3JvY2VyeUl0ZW1MaXN0LmpzeCIsIi9Vc2Vycy9tYW5udWVsZmVycmVpcmEvV29ya3NwYWNlL3NhbmRib3gvcmVhY3Qtc2hvcC9hcHAvbWFpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFeEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO0NBQ2pDLE1BQU0sRUFBRSxXQUFXO0VBQ2xCO0dBQ0Msb0JBQUEsS0FBSSxFQUFBLElBQUMsRUFBQTtJQUNKLG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUEsY0FBaUIsQ0FBQTtLQUNkLENBQUE7R0FDUjtFQUNEO0NBQ0QsQ0FBQyxDQUFDOzs7QUNYSCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFeEMsSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7O0FBRWxFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7QUFFOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxlQUFlLEVBQUEsSUFBQSxDQUFHLENBQUEsRUFBRSxHQUFHLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKHJlYWN0KTtcbnZhciBSZWFjdEFkZG9ucyA9IHJlcXVpcmUocmVhY3QvYWRkb25zKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdENsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGgxPkdyb2NlcnkgTGlzdDwvaDE+XG4gICBcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUocmVhY3QpO1xudmFyIFJlYWN0QWRkb25zID0gcmVxdWlyZShyZWFjdC9hZGRvbnMpO1xuXG52YXIgR3JvY2VyeUl0ZW1MaXN0ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0dyb2NlcnlJdGVtTGlzdC5qc3gnKTtcblxuY29uc29sZS5sb2coJ2hlbGxvIGZyb20gSlNYJyk7XG5cbnJlYWN0LnJlbmRlcig8R3JvY2VyeUl0ZW1MaXN0IC8+LCBhcHApO1xuIl19
