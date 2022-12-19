const visitorDefault = 0

const reducer = (visitor = visitorDefault, action) => {
    switch (action.type) {
        case "FETCH_DATA_CURRENT_MONTH_VISITOR":
            return action.payload;

        case "ADD_DATA_CURRENT_MONTH_VISITOR":
            return ++visitor

        default:
            return visitor
    }
}

export default reducer