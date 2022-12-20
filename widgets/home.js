'use strict'

module.exports = (data, counter) => {
    return {
        "type": "flex",
        "direction": "vertical",
        "spacing": 4,
        "mainAxisAlignment": "spaceEvenly",
        "crossAxisAlignment": "center",
        "children": [
            {
                "type": "widget",
                "name": "counter",
                "coll": "counter",
                "query": {
                    "user": "@me"
                },
                "props": { text: "My personnal counter" }
            },
            {
                "type": "widget",
                "name": "counter",
                "coll": "counter",
                "query": {
                    "user": "global"
                },
                "props": { text: "The common counter" }
            },
            {
                "type": "widget",
                "name": "button",
                "coll": "counter",
                "query": {
                    "user": {
                        "$in": ["global", "@me"]
                    }
                },
                "props": { text: "The common counter" }
            },

        ]
    }
}

