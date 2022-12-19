const reducer = (category = [], action) => {
    switch (action.type) {
        case "FETCH_DATA_CATEGORY":
            return action.payload;

        case "DELETE_DATA_CATEGORY":
            return category.filter(category => category.id !== action.payload)

        case "UPDATE_DATA_CATEGORY":
            return category.map(category => {
                if (category.id === action.payload.id) {
                    return { ...action.payload }
                } else {
                    return category
                }
            })

        case "ADD_DATA_CATEGORY":
            return [action.payload, ...category]

        default:
            return category
    }
}

export default reducer