import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CustomerInfo from '../../components/orderDetail/CustomerInfo'
import ItemsSumary from '../../components/orderDetail/ItemsSumary'
import AddressInfo from '../../components/orderDetail/AddressInfo'
import TotalInfo from '../../components/orderDetail/TotalInfo'
import axios from 'axios'
import { ROUTE } from '../../components/api/route'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function OrderDetail() {
    const { id } = useParams();
    const [orderDetail, setorderDetail] = useState();
    useEffect(() => {
        const getOrderDetail = async () => {
            const { data } = await axios.get(`${ROUTE}/api/orders/${id}`);
            setorderDetail(data.result)
        }
        getOrderDetail()

    }, [])

    return (
        <Container>
            {
                orderDetail ? <>
                    <div className="left-container">
                        <ItemsSumary id={id} />
                        <CustomerInfo
                            name={`${orderDetail.lastname} ${orderDetail.firstname}`}
                            phone={orderDetail.phone}
                            email={orderDetail.email}
                            pay_method={orderDetail.pay_method}
                        />
                    </div>
                    <div className="right-container">
                        <AddressInfo
                            street={orderDetail.street}
                            distric={orderDetail.distric}
                            wards={orderDetail.wards}
                            city={orderDetail.city}
                            detail={orderDetail.detail}
                        />
                        <TotalInfo createat={orderDetail.createat} id={orderDetail.id} defaultStatus={orderDetail.status} total={orderDetail.total} />
                    </div>
                </> : <p>loading...</p>
            }
        </Container>
    )
}

export default OrderDetail

const Container = styled.div`
    box-sizing: border-box;
    padding: var(--padding);
    display: flex;
    gap: var(--padding);
    height: 100%;
    width: 100%;
    @media screen and (max-width: 600px)  {
        flex-direction: column;
        height: fit-content;

    }
    .left-container{
        /* background-color: aqua; */
        height: 100%;
        width: 70%;
        justify-content: space-between;
        display: flex;
        gap: var(--padding);
        flex-direction: column;
        @media screen and (max-width: 600px)  {
            width: 100%;
        }
        h1{
            span {
                color: var(--orange);
            }
        }
    }
    .right-container{
        height: 100%;
        width: 30%;
        display: flex;
        flex-direction: column;
        gap: var(--padding);
        box-sizing: border-box;
        justify-content: space-between;
        @media screen and (max-width: 600px)  {
            width: 100%;
        }
        /* background-color: #1e00ff;
        border-radius: 5px;
        box-shadow: 0px 1px 3px;
        box-sizing: border-box; */
        
    }
`