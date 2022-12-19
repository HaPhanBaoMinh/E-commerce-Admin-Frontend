import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CardListDashboad from '../../components/cardDashboad/CardListDashboad'
import Chart from '../../components/chart/Chart'
import OrderTable from '../../components/orderTable/OrderTable'
import QuickInfo from '../../components/quickInfo/QuickInfo'

function Dashboard() {
    const orderList = useSelector(state => state.orderList);
    const newestOrder = orderList.filter((item, index) => {
        if (index <= 4) {
            return item
        }
    });

    return (
        <Container>
            <CardListDashboad />
            <Chart />
            <OrderTable title={"New Order"} orderList={newestOrder} action={false} />
            <QuickInfo />
        </Container>
    )
}

export default Dashboard

const Container = styled.div`
    box-sizing: border-box;
    padding: var(--padding);
    display: flex;
    flex-direction: column;
    gap: var(--padding);
    height: fit-content;
`