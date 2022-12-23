import React, { useState } from 'react'
import styled from 'styled-components'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useDispatch } from 'react-redux';
import { ROUTE } from '../api/route';
import { removeOrder, updateDataOrderList } from '../../action/orderListAction';
import axios from 'axios';
import formatMoney from '../../utils/function/formatMoney';
import { toast } from 'react-toastify';
import Loading from '../../pages/loading/Loading';

// const order = {
//     address_id: "AD-f2ffb1",
//     status: "Ordered",
//     total: 200,
//     customer_id: "C-bd8a58",
//     createat: "2022-12-06T17:00:00.000Z",
//     id: "OD-b02b39",
//     pay_method: "cod",
//     lastname: "asdfasdf",
//     firstname: "adsfasdf",
//     phone: "0912782832",
//     email: "asdfasdfasdas"
// }

function TotalInfo({ createat, id, defaultStatus, total }) {
    const [status, setstatus] = useState(defaultStatus);
    const [isLoading, setIsLoading] = useState(false);
    const dispath = useDispatch();

    const updateOrderStatus = async (newStatus) => {
        dispath(updateDataOrderList(id, newStatus))
        setIsLoading(true)
        const { data } = await axios.post(`${ROUTE}/api/admin/orders/update`, {
            id: id,
            status: newStatus
        })
        if (data.status) {
            setIsLoading(false)
        }

    }
    const handleChange = (event) => {
        updateOrderStatus(event.target.value)
        setstatus(event.target.value);
    };

    const toastOption = {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const handleDeleteOrder = async () => {
        setIsLoading(true)
        const { data } = await axios.delete(`${ROUTE}/api/admin/orders`, {
            data: {
                order_id: id
            }
        })

        if (data.status) {
            setIsLoading(false)
            dispath(removeOrder(id))
            toast.success("Removed Order", toastOption)
        }
    }

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <Container>
            <h1>Total</h1>
            <div className="total-info">
                <h4>Create at: <span>{`${new Date(createat).getDate()}/${new Date(createat).getMonth() + 1}/${new Date(createat).getFullYear()}`}</span></h4>
                <h4>Order ID: <span> {id} </span></h4>
                <FormControl sx={{ width: '100%', height: 40, verticalAlign: 'initial' }}>
                    <Select
                        id="demo-simple-select"
                        onChange={(value) => handleChange(value)}
                        sx={{ height: 45, backgroundColor: 'rgba(255, 177, 41, 1)', fontWeight: 800 }}
                        value={status || ''}
                    >
                        <MenuItem value={"Ordered"} >Ordered</MenuItem>
                        <MenuItem value={"Shipped"} >Shipped</MenuItem>
                        <MenuItem value={"In Transit"} >In Transit</MenuItem>
                        <MenuItem value={"Delivered"} >Delivered</MenuItem>
                        <MenuItem value={"Cancelled"} >Cancelled</MenuItem>
                        <MenuItem value={"Delivery failed"} >Delivery failed</MenuItem>
                    </Select>
                </FormControl>
                <button className='delete-order' onClick={() => handleDeleteOrder()}>
                    Delete
                </button>
            </div>
            <h4 className='total'>Total: <span>{formatMoney(total)}</span></h4>
        </Container>
    )
}

export default TotalInfo

const Container = styled.div`
    height: 50%;
    width: 100%;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 1px 3px;
    box-sizing: border-box;
    padding: 0 20px;
    h1{
        font-size: 20px;
        height: 50px;
        border-bottom: 1px solid var(--line_2);
        display: flex;
        align-items: center;
    }
    .total-info{
        width: 100%;
        height: 67%;
        display: flex;
        flex-direction: column;
        /* background-color: aqua; */
        gap: 10px;
        justify-content: unset;
        .delete-order{
            height: 40px;
            background-color: red;
            border: none;
            border-radius: 5px;
            font-size: 15px;
            font-weight: 500;
            cursor: pointer;
            &:hover{
                outline: 0.5px solid;
            }
        }
        h4{
            height: 35px;
            display: flex;
            align-items: center;
            gap: 10px;
            span{
                font-weight: 400;
                width: 60%;
                
            }
        }
    }
    .total{
        font-size: 20px;
        line-height: 50px;
    }

`