const fetchCategorysData = (data) => {
    const action = {
        type: "FETCH_DATA_CATEGORY",
        payload: data
    }
    return action;
}

const deleteCategoryData = (id) => {
    const action = {
        type: "DELETE_DATA_CATEGORY",
        payload: id
    }
    return action;
}

const updateCategoryData = (category) => {
    const action = {
        type: "UPDATE_DATA_CATEGORY",
        payload: category
    }
    return action;
}

const addnewCategoryData = (category) => {
    const action = {
        type: "ADD_DATA_CATEGORY",
        payload: category
    }
    return action;
}

export { fetchCategorysData, deleteCategoryData, updateCategoryData, addnewCategoryData };