const fetchProductsData = (data) => {
    const action = {
        type: "FETCH_PRODUCTS_DATA",
        payload: data
    }
    return action;
}


const addProductsData = (data) => {
    const action = {
        type: "ADD_DATA_PRODUCTS_DATA",
        payload: data
    }
    return action;
}

const deleteProductsData = (sku) => {
    const action = {
        type: "DELETE_DATA_PRODUCTS_DATA",
        payload: sku
    }
    return action;
}

const updateProductData = (newProduct) => {
    const action = {
        type: "UPDATE_PRODUCT_DATA",
        payload: newProduct
    }
    return action;
}
export { addProductsData, fetchProductsData, deleteProductsData, updateProductData };