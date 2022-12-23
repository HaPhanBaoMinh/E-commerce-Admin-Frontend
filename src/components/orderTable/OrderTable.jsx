import React, { useEffect } from 'react'
import styled from 'styled-components'
import OrderItem from './OrderItem';
import { v4 as uuidv4 } from 'uuid';

function OrderTable({ title = "Order", orderList = undefined, action = true }) {
    return (
        <Container>
            <h1>{title}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Num</th>
                        <th className='hidden-class'>Customer</th>
                        <th>Phone</th>
                        <th>Order Id</th>
                        <th>Total</th>
                        <th className='hidden-class'>Pay method</th>
                        <th className='hidden-class'>Create at</th>
                        {action ? <th className='hidden-class'>Status</th> : undefined}
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {orderList ? orderList.map((order, index) => <OrderItem key={uuidv4()} action={action} order={order} index={index} />) : <p>loading...</p>}
                </tbody>
            </table>
        </Container>
    )
}

export default OrderTable

const Container = styled.div`
    width: 100%;
    max-height: 532px;
    background-color: #ffc786b8;
    box-sizing: border-box;
    padding: var(--padding);
    border-radius: 5px;
    overflow: auto;
    box-shadow: 0px 1px 3px;
    .hidden-class{
        @media screen and (max-width: 600px)  {
            display: none;
        }
    }
    h1{
        font-size: 20px;
        @media screen and (max-width: 600px)  {
            display: none;
        }
    }
    table {
        width: 100%;
        tr{
            border-bottom: 1px solid var(--black);
            th{
                /* background-color: aqua; */
                text-align: center;
                line-height: 50px;
            }
        }
    }
`