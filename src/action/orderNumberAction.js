const fetchDataOrderNumber = (currentMonth, preMonth) => {
    if (!currentMonth) {
        currentMonth = 0
    }

    if (!preMonth) {
        preMonth = 0
    }

    return {
        type: "FETCH_DATA_ORDERNUMBER",
        payload: {
            currentMonth: Number(currentMonth),
            preMonth: Number(preMonth)
        }
    }
}

const addDataOrderNumber = () => {
    return {
        type: 'ADD_DATA_ORDERNUMBER'
    }
}

export { fetchDataOrderNumber, addDataOrderNumber }