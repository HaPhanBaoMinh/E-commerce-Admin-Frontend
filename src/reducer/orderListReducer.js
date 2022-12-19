const reducer = (orderList = [], action) => {
    switch (action.type) {
        case "FETCH_DATA_ORDERLIST":
            return action.payload;

        case "UPDATE_DATA_ORDERLIST":
            let indexOfOrder = 0;
            orderList.map((order, index) => {
                if (order.id === action.payload.id) {
                    indexOfOrder = index
                }
            })
            const orderListTmp = orderList;
            orderListTmp[indexOfOrder].status = action.payload.status;
            return orderListTmp;

        case "ADD_DATA_ORDERLIST":
            return [action.payload, ...orderList]

        case "REMOVE_DATA_ORDERLIST":
            return orderList.filter(order => order.id !== action.payload)

        default:
            return orderList
    }
}

export default reducer