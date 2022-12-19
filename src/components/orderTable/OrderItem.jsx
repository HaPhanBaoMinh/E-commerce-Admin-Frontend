import React, { useState } from 'react'
import styled from 'styled-components'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import formatMoney from '../../utils/function/formatMoney';
import { ROUTE } from '../api/route';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { updateDataOrderList } from '../../action/orderListAction';
import { AiFillEye } from "react-icons/ai";

function OrderItem({ order, index, action }) {
    const [status, setstatus] = useState(order.status);
    const dispath = useDispatch();

    const updateOrderStatus = async (newStatus) => {
        dispath(updateDataOrderList(order.id, newStatus))
        await axios.post(`${ROUTE}/api/admin/orders/update`, {
            id: order.id,
            status: newStatus
        })
    }

    const createat = new Date(order.createat)
    const handleChange = (event) => {
        updateOrderStatus(event.target.value)
        setstatus(event.target.value);
    };
    return (
        <Container>
            {order ?
                <>
                    <td> {index + 1} </td>
                    <td className='hidden-class'>{`${order.lastname} ${order.firstname}`}</td>
                    <td>{order.phone}</td>
                    <td>{order.id}</td>
                    <td> {formatMoney(order.total)} </td>
                    <td className='pay-method hidden-class'>{order.pay_method} </td>
                    <td className='hidden-class'> {`${createat.getDate()}/${createat.getMonth() + 1}/${createat.getFullYear()}`} </td>
                    {action ? <td className='hidden-class'>
                        <FormControl sx={{ m: 1, width: '70%', height: 40, verticalAlign: 'initial' }}>
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
                    </td> : undefined}
                    <td>
                        <Link to={`/order/${order.id}`}>
                            <AiFillEye />
                        </Link>
                    </td>
                </> : <p>loading...</p>}


        </Container>
    )
}

export default OrderItem

const Container = styled.tr`
            border-bottom: 1px solid var(--line_2);
            line-height: 70px;
            .hidden-class{
                @media screen and (max-width: 600px)  {
                    display: none;
                }
            }
            td{
                text-align: center;
                line-height: 70px;
                svg{
                    font-size: 20px;
                    cursor: pointer;
                }
            }
            th{
                /* background-color: aqua; */
                text-align: center;
                line-height: 70px;
            }
            .pay-method{
                text-transform: uppercase;
            }
`