const reducer = (productList = [], action) => {

    switch (action.type) {

        case ("FETCH_PRODUCTS_DATA"):
            return [...action.payload]

        case "ADD_DATA_PRODUCTS_DATA":
            return [action.payload, ...productList]

        case "DELETE_DATA_PRODUCTS_DATA":
            return productList.filter(product => product.sku !== action.payload)

        case "UPDATE_PRODUCT_DATA":
            return productList.map(product => {
                if (product.sku === action.payload.sku) {
                    return { ...action.payload }
                } else {
                    return product
                }
            })

        default:
            return productList
    }

}

export default reducer