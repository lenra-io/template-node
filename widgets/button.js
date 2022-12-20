'use strict'

module.exports = (data, counter) => {
    return {
        "type": "button",
        "text": "all +",
        "onPressed": {
            "action": "incrementAll",
            "props": {
                "ids": data,
            }
        }
    }
}


