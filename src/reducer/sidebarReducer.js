
const reducer = (isOpen = false, action) => {
    switch (action.type) {
        case "OPEN_SIDEBAR":
            return true;

        case "CLOSE_SIDEBAR":
            return false

        default:
            return isOpen
    }
}

export default reducer