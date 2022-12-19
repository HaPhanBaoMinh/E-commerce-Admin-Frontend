const fetchDataOrderList = (data) => {
    return {
        type: "FETCH_DATA_ORDERLIST",
        payload: data
    }
}

const addDataOrderList = (data) => {
    return {
        type: "ADD_DATA_ORDERLIST",
        payload: data
    }
}

const updateDataOrderList = (id, status) => {
    return {
        type: "UPDATE_DATA_ORDERLIST",
        payload: {
            id,
            status
        }
    }
}

const removeOrder = (orderId) => {
    return {
        type: "REMOVE_DATA_ORDERLIST",
        payload: orderId
    }
}


export { fetchDataOrderList, addDataOrderList, updateDataOrderList, removeOrder }