import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { ROUTE } from '../api/route'
import Item from './Item'

function ItemsSumary({ id }) {
    const [orderList, setorderList] = useState()
    useEffect(() => {
        const getOrderDetail = async () => {
            const { data } = await axios.get(`${ROUTE}/api/orders/detail/${id}`);
            setorderList(data.result)
        }
        getOrderDetail()

    }, [])

    return (
        <Container>
            <table>
                <tr>
                    <th className='product-name'>Items summary</th>
                    <th className='QTY hidden-class'>Quantity</th>
                    <th className='price hidden-class'>Price</th>
                    <th className='price hidden-class'>Discount Price</th>
                    <th className='price'>Total</th>
                </tr>
                {orderList ? orderList.map(order => <Item order={order} />) : undefined}
            </table>
        </Container>
    )
}

export default ItemsSumary

const Container = styled.div`
    width: 100%;
    max-height: 279px;
    height: 50%;
    overflow-y: auto;
    padding: 0 20px;
    background-color: #ffffff;
    /* background-color: #ffffff; */
    box-sizing: border-box;
    box-shadow: 0px 1px 3px;
    border-radius: 5px;
    @media screen and (max-width: 600px)  {
        width: 100%;
        padding: 0 10px;
    }
    .hidden-class{
        @media screen and (max-width: 600px)  {
            display: none;
        }
    }
    table {
        border-radius: 5px;
        width: 100%;
        tr{
            border-bottom: 1px solid var(--line_2);
            box-sizing: border-box;
            .price{
                width: 20%;
            }
            .product-name{
                width: 25%;
                font-size: 20px;
            }
            .QTY{
                width: 15%;
            }
            th{
                text-align: center;
                line-height: 50px;
            }
            
        }
    }
`