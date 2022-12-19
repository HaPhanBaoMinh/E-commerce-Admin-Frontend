const orderNumberDefault = {
    currentMonth: 0,
    preMonth: 0
}


const reducer = (orderNumber = orderNumberDefault, action) => {
    switch (action.type) {
        case "FETCH_DATA_ORDERNUMBER":
            return action.payload;

        case "ADD_DATA_ORDERNUMBER":
            let newOrderNumber = orderNumber;
            newOrderNumber.currentMonth += 1;
            return newOrderNumber;

        default:
            return orderNumber
    }
}

export default reducer