const fetchDataCurrentMonthVisitor = (currentMonth) => {
    return {
        type: "FETCH_DATA_CURRENT_MONTH_VISITOR",
        payload: currentMonth
    }
}

const increaseCurrentMonthVisitor = () => {
    return {
        type: "ADD_DATA_CURRENT_MONTH_VISITOR"
    }
}

export { fetchDataCurrentMonthVisitor, increaseCurrentMonthVisitor }