import { combineReducers } from "redux";
import sidebar from "./sidebarReducer";
import orderNumber from "./orderNumberReducer";
import orderList from "./orderListReducer";
import currentVisitor from "./currentMonthVisitorReducer";
import preVisitor from "./preMonthVisitorReducer";
import productList from "./productsReducer";
import categoryList from "./categoryReducer";
import adminInfo from "./adminReducer";

export default combineReducers({
    sidebar,
    orderNumber,
    orderList,
    currentVisitor,
    preVisitor,
    productList,
    categoryList,
    adminInfo
});