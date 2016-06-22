var React = require('react');
var ReactAddons = require('react-addons-update');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<h1>A Shopping List</h1>
				<div>
					{this.props.items.map(function(item, index) {
						return (
							<div>{item.name}</div>
						)
					})
					}
				</div>
			</div>
		)
	}
});
