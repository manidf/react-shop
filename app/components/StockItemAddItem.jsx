var React = require('react')
var ReactAddons = require('react-addons-update')
var Action = require('../actions/StockItemActionCreator.jsx')

module.exports = React.createClass({
	getInitialState:function() {
		return { input: "" }
	},
	handleInputName:function(e) {
		this.setState({input: e.target.value})
	},
	addItem:function(e) {
		e.preventDefault
		// console.log("Adding Item", this.state.input)
		Action.add({
			name: this.state.input
		})
		// reset the state so user can enter another item
		this.setState({
			input:''
		})
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
})
