const visitorDefault = 0

const reducer = (visitor = visitorDefault, action) => {
    switch (action.type) {
        case "FETCH_DATA_PRE_MONTH_VISITOR":
            return action.payload;

        default:
            return visitor
    }
}

export default reducer