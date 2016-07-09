var React = require('react')
var ReactAddons = require('react-addons-update')

var MobilePhoneList = require('./components/MobilePhoneList.jsx')

var stockItemStore = require('./stores/StockItemStore.jsx')
// var initial = stockItemStore.getItems()

console.log("List:", initial)
function render() {
	React.render(<MobilePhoneList items={initial} />, app)
}
stockItemStore.onChange(function(items) {
	initial = items
	render()
})

render()
