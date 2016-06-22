var React = require('react');
var ReactAddons = require('react-addons-update');

var MobilePhoneList = require('./components/MobilePhoneList.jsx');

console.log('hello from JSX');

var initial = [
	{ name: "Shoes" },
	{ name: "Trousers", puchased: true },
	{ name: "Hats" },
	{ name: "Watches" },
	{ name: "Sandles" }
];

React.render(<MobilePhoneList items={initial} />, app);
