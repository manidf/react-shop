var React = require('react');
var ReactAddons = require('react-addons-update');
var StockItem = require('./StockItem.jsx');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<h1>A Shopping List</h1>
				<div>
					{this.props.items.map(function(item, index) {
						return (
							<StockItem item={item} key={"item"+index} />
						)
					})
					}
				</div>
			</div>
		)
	}
});
