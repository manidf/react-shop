var React = require('react');
var ReactAddons = require('react-addons-update');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<h4 className={this.props.item.purchased ? "strikethrough" : ""}>{this.props.item.name}</h4>
	   </div>
		)
	}
});
