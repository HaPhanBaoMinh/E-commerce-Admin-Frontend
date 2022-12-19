const addAdminInfo = (admin) => {
    return {
        type: "LOGIN",
        payload: admin
    }
}

const removeAdminInfo = () => {
    return {
        type: "LOGOUT",
    }
}

export { addAdminInfo, removeAdminInfo }