import React, { useState } from 'react'
import styled from 'styled-components'
import { toast } from "react-toastify";
import axios from 'axios';
import { ROUTE } from '../../components/api/route';
import Loading from '../loading/Loading';
import { useDispatch } from 'react-redux';
import { addAdminInfo } from '../../action/adminInfoAction';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const dispath = useDispatch();
    const navigate = useNavigate();

    const setCookie = (cname, cvalue, exdays) => {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;HttpOnly=false";
    }

    const toastOption = {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const onLogin = async () => {
        if (email.length < 3 || !email.includes('@')) {
            toast.error("Invalid Email", toastOption)
            return
        }
        if (password.length < 3) {
            toast.error("Password must more then 3 character", toastOption)
            return
        }
        setIsLoading(true)
        const { data } = await axios.post(`${ROUTE}/api/admin/orders/login`, { email, password })
        console.log(data);
        if (data.status) {
            setIsLoading(false)
            dispath(addAdminInfo(data.result))
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            setCookie('email', email, 1)
            setCookie('password', password, 1)
            return navigate("/");
        }
        if (data.status === false) {
            setIsLoading(false)
            toast.error(data.result, toastOption)
        }
    }

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <Container>
            <h1>Login</h1>
            <div className="login-input">
                <div className="login-info">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='Type your email' />
                </div>

                <div className="login-info">
                    <label htmlFor="password">Password</label>
                    <input id='password' type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Type your password' />
                </div>
                <p>Forgot password?</p>
            </div>

            <button onClick={() => onLogin()}>
                Login
            </button>

            <div className="signup">
                <p>Or Sign Up Using</p>
                <h4>SIGN UP</h4>
            </div>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 50%;
    max-width: 400px;
    min-height: 300px;
    height: 80%;
    background-color: #ffff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    gap: 30px;
    padding: var(--padding);
    box-shadow: 0px 0px 4px 0px #636363;
    @media screen and (max-width: 600px)  {
        width: 80%
    }
    .signup{
        margin-top: auto;
        width: 100%;
        height: fit-content;
        /* background-color: aqua; */
        text-align: center;
        h4{
            font-weight: 400;
            line-height: 30px;
        }
    }
    button{
        width: 100%;
        height: 40px;
        background-color: var(--orange);
        font-size: 16px;
        font-weight: 600;
        border-radius: 5px;
        outline: none;
        border: none;
        cursor: pointer;
        &:hover{
            outline: 0.5px solid
        }
    }
    h1{
        font-size: 30px;
    }
    .login-input{
        width: 100%;
        height: fit-content;
        /* background-color: aqua; */
        display: flex;
        flex-direction: column;
        gap: 10px;
        p{
            text-align: right;
            font-size: 12px;
        }
        .login-info{
            height: 50px;
            margin: 5px 0;
            display: flex;
            flex-direction: column;
           
            input{
                height: inherit;
                box-sizing: border-box;
                padding-left: 10px;
                border-radius: 5px;
                border: 0.5px solid;
            }
            label{
                font-size: 14px;
            }
        }
    }
`