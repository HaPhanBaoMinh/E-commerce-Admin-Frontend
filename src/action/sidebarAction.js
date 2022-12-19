const openSideBar = () => {
    return {
        type: "OPEN_SIDEBAR"
    }
}

const closeSideBar = () => {
    return {
        type: "CLOSE_SIDEBAR"
    }
}

export { openSideBar, closeSideBar }