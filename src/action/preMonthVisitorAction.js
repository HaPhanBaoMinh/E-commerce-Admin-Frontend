const fetchDataPreMonthVisitor = (preMonth) => {
    return {
        type: "FETCH_DATA_PRE_MONTH_VISITOR",
        payload: preMonth
    }
}

export { fetchDataPreMonthVisitor }