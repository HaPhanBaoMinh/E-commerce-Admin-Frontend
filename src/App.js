import './App.css';
import { RouterComponent } from './routes';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import DefaultLayout from './components/layouts/defaultLayout';
import { createContext, Fragment, useEffect, useRef, useState } from 'react';
import axios from 'axios';
// import axios from './components/api/axios';
import { ROUTE } from './components/api/route';
import { useDispatch, useSelector } from 'react-redux';
import { addDataOrderList, fetchDataOrderList } from './action/orderListAction';
import { io } from "socket.io-client";
import { addDataOrderNumber } from './action/orderNumberAction';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchDataCurrentMonthVisitor, increaseCurrentMonthVisitor } from './action/currentMonthVisitorAction';
import { fetchDataPreMonthVisitor } from './action/preMonthVisitorAction';
import { fetchProductsData } from './action/productsReducerAction';
import { fetchCategorysData } from './action/categoryListAction';
import { addAdminInfo } from './action/adminInfoAction';
import Loading from './pages/loading/Loading';
export const SocketContext = createContext()

function App() {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const socket = useRef();
  const adminInfo = useSelector(state => state.adminInfo)
  const [isLoading, setIsLoading] = useState(false);
  const toastOption = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  // useEffect(() => {
  //   const getOrderList = async () => {
  //     const { data } = await axios.get(`${ROUTE}/api/admin/orders/all`);
  //     if (data.status) {
  //       dispath(fetchDataOrderList(data.result))
  //     }
  //   }
  //   getOrderList()
  // }, [])

  useEffect(() => {
    const getOrderList = async () => {
      const { data } = await axios.get(`${ROUTE}/api/admin/orders/all`)
      console.log(data);
      if (data.status) {
        dispath(fetchDataOrderList(data.result))
      }
    }


    const getVisitorList = async () => {
      const { data } = await axios.get(`${ROUTE}/api/admin/visitor`);
      if (data.status) {
        const formatData = data.result.reduce((acc, curr) => {
          return { ...acc, [curr.month]: curr }
        }, {});
        dispath(fetchDataCurrentMonthVisitor(formatData[new Date().getMonth() + 1].count))
        dispath(fetchDataPreMonthVisitor(formatData[new Date().getMonth()].count))
      }
    }

    const getCategoryList = async () => {
      const { data } = await axios.get(`${ROUTE}/api/category`);
      if (data.status) {
        dispath(fetchCategorysData(data.result))
      }
    }

    const getProductList = async () => {
      const { data } = await axios.get(`${ROUTE}/api/product`);
      if (data.status) {
        dispath(fetchProductsData(data.result))
      }
    }

    const setCookie = (cname, cvalue, exdays) => {
      const d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      let expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    const autoLogin = async () => {
      const email = localStorage.getItem("email")
      const password = localStorage.getItem("password")
      if (email && password) {
        setIsLoading(true)
        const { data } = await axios.post(`${ROUTE}/api/admin/orders/login`, { email, password })
        if (data.status) {
          setIsLoading(false)
          dispath(addAdminInfo(data.result))
          setCookie('email', email, 1)
          setCookie('password', password, 1)
          return
        }
        return navigate("/login");
      }
      return navigate("/login");
    }

    socket.current = io(ROUTE);
    socket.current.emit("admin-connection", { id: 'admin' })
    socket.current.on("new-order-recieve", (body) => {
      toast.success("New Order", toastOption);
      if (body.status) {
        dispath(addDataOrderList(body.result))
        dispath(addDataOrderNumber())
      }
    })

    socket.current.on("new-vitsitor-recieve", (result) => {
      if (result.status) {
        dispath(increaseCurrentMonthVisitor())
      }
    });

    autoLogin()
    getOrderList()
    getCategoryList()
    getProductList()
    getVisitorList()
  }, [])

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <>
      <div className="App">
        <Routes>
          {
            RouterComponent.map((route, index) => {
              const Page = route.component;

              let Layout = DefaultLayout;

              if (route.layout === null) {
                Layout = Fragment
              } else if (route.layout) {
                Layout = route.layout
              }

              return <Route
                path={route.path}
                key={index}
                element={
                  <Layout>
                    <Page />
                  </Layout>} />
            })
          }
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
