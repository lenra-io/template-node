'use strict'

const apiService = require("../services/api");

module.exports = async (props, event, api) => {
    let transaction = await apiService.startTransaction(api).then((res) => {
        let transaction_id = res.data
        props.ids[0].count += 1
        apiService.transactionUpdate(api, transaction_id, "counter", props.ids[0]).then(() => {
            props.ids[1].count += 1
            apiService.transactionUpdate(api, transaction_id, "counter", props.ids[1]).then(() => {
                apiService.transactionCommit(api, transaction_id)
            })
        })
    })


    return transaction;
}