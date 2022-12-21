'use strict'

const { default: axios } = require("axios");

module.exports = {
    getDoc(api, coll, id) {
        return axios.get(`${api.url}/app/colls/${coll}/docs/${id}`, options(api));
    },
    createDoc(api, coll, doc) {
        return axios.post(`${api.url}/app/colls/${coll}/docs`, doc, options(api));
    },
    updateDoc(api, coll, doc) {
        return axios.put(`${api.url}/app/colls/${coll}/docs/${doc._id}`, doc, options(api));
    },
    deleteDoc(api, coll, doc) {
        return axios.delete(`${api.url}/app/colls/${coll}/docs/${doc._id}`, options(api));
    },
    executeQuery(api, coll, query) {
        return axios.post(`${api.url}/app/colls/${coll}/docs/find`, query, options(api));
    },
    startTransaction(api) {
        return axios.post(`${api.url}/app/transaction`, {}, options(api));
    },
    transactionCreate(api, id, coll, doc) {
        return axios.post(`${api.url}/app/transaction/${id}/colls/${coll}/docs`, doc, options(api));
    },
    transactionUpdate(api, id, coll, doc) {
        return axios.put(`${api.url}/app/transaction/${id}/colls/${coll}/docs/${doc._id}`, doc, options(api));
    },
    transactionCommit(api, id) {
        return axios.post(`${api.url}/app/transaction/${id}/commit`, {}, options(api));
    }
}

function options(api) {
    return { headers: headers(api) }
}

function headers(api) {
    return { Authorization: `Bearer ${api.token}` }
}
