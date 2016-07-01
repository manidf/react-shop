var dispatcher = require('../dispatcher.js')

function StockItemStore() {
    var items = [
        { name: "Shoes" },
        { name: "Trousers", purchased: true },
        { name: "Hats" },
        { name: "Watches" },
        { name: "Sandles" }
    ]
    var listeners = []

    function getItems() {
        return items
    }

    function addStockItem(item) {
        item.push(item)
        triggerListeners()
    }

    function onChange(listeners) {
        listeners.push(listener)
    }

    function triggerListeners() {
        listeners.forEach(function(listener) {
            listener(items)
        })
    }

    dispatcher.register(function(event) {
        var split = event.type.split(':')
        if (split[0] === 'stock-item') {
            switch (split[1]) {
                case "add":
                    addStockItem(event.payload)
                    break
            }
        }
    })

    return {
        getItem: getItems,
        onChange: onChange
    }
}

module.exports = new StockItemStore