var React = require('react');
var ReactAddons = require('react-addons-update');

var MobilePhoneList = require('./components/MobilePhoneList.jsx');

var initial = [
	{ name: "Shoes" },
	{ name: "Trousers", purchased: true },
	{ name: "Hats" },
	{ name: "Watches" },
	{ name: "Sandles" }
];
console.log("List:", initial);

React.render(<MobilePhoneList items={initial} />, app);
