var React = require('react');
var ReactAddons = require('react-addons-update');

module.exports = React.createClass({
	getInitialSate:function() {
		return { input: "" };
	},
	handleInputName:function(e) {
		this.setState({input: e.target.value});
	},
	addItem:function(e) {
		e.preventDefault;
		console.log("Adding Item", this.state.input);
	},
	render:function() {
		return (
			<div className="StockAddItem">
				<form onSubmit={this.addItem}>
    			<input value={this.state.input} onChange={this.handleInputName} />
					<button> Add Item </button>
    		</form>
   		</div>
		)
	}
});
