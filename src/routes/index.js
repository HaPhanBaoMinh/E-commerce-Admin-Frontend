import BodyOnlyLayout from "../components/layouts/bodyOnly"
import Category from "../pages/category/Category"
import Dashboard from "../pages/dashboard/Dashboard"
import Loading from "../pages/loading/Loading"
import Login from "../pages/login/Login"
import NewProduct from "../pages/newProduct/NewProduct"
import OrderDetail from "../pages/orderDetail/OrderDetail"
import Orders from "../pages/orders/Orders"
import ProductDetail from "../pages/productDetail/ProductDetail"
import Products from "../pages/products/Products"
import Store from "../pages/store/Store"

const RouterComponent = [
    { path: "/", component: Dashboard },
    { path: "/orders", component: Orders },
    { path: "/order/:id", component: OrderDetail },
    { path: "/products/:sku", component: ProductDetail },
    { path: "/products", component: Products },
    { path: "/new-product", component: NewProduct },
    { path: "/category", component: Category },
    { path: "/banner", component: Store },
    { path: "/loading", component: Loading },
    { path: "/login", component: Login, layout: BodyOnlyLayout },
]

export { RouterComponent }