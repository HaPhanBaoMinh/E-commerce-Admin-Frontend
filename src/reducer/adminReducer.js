
const reducer = (adminInfo = null, action) => {
    switch (action.type) {
        case "LOGIN":
            return action.payload

        case "LOGOUT":
            return null

        default:
            return adminInfo;
    }
}

export default reducer