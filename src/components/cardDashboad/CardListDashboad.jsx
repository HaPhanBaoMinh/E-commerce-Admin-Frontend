import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import Cart from './Cart';
import { AiOutlineLineChart } from 'react-icons/ai'
import { BiMoney } from 'react-icons/bi'
import { BsFillPersonFill } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import formatMoney from '../../utils/function/formatMoney';

function CardListDashboad() {
    const orderNumber = useSelector(state => state.orderNumber);
    const orderList = useSelector(state => state.orderList);
    const visitorCurrentMonth = useSelector(state => state.currentVisitor);
    const visitorPreMonth = useSelector(state => state.preVisitor);
    const [currIncome, setCurrIncome] = useState(0);
    const [preIncome, setPreIncome] = useState(0);

    useEffect(() => {
        let currTotal = 0;
        let preTotal = 0;
        orderList.map(order => {
            if (new Date(order.createat).getMonth() === new Date().getMonth()) {
                currTotal += order.total;
            }
            if (new Date(order.createat).getMonth() === new Date().getMonth() - 1) {
                preTotal += order.total;
            }
        })
        setCurrIncome(currTotal);
        setPreIncome(preTotal);
    }, [orderList])

    return (
        <Container>
            <Cart data={orderNumber.currentMonth ? orderNumber.currentMonth : 'loading...'} icon={<AiOutlineLineChart />} title={"Order"} percent={orderNumber.preMonth > 0 ? (orderNumber.currentMonth / orderNumber.preMonth) * 100 - 100 : 0} />
            <Cart data={formatMoney(currIncome)} icon={<BiMoney />} title={"Sales"} percent={preIncome > 0 ? (currIncome / preIncome) * 100 - 100 : +100} />
            <Cart data={visitorCurrentMonth ? visitorCurrentMonth : 'loading...'} icon={<BsFillPersonFill />} title={"Visitors Online"} percent={visitorPreMonth > 0 ? (visitorCurrentMonth / visitorPreMonth) * 100 - 100 : 0} />
        </Container>
    )
}

export default CardListDashboad

const Container = styled.div`
    width: 100%;
    height: 14vh;
    display: flex;
    gap: var(--padding);
    @media screen and (max-width: 600px)  {
        flex-direction: column;
        height: auto;
    }
    
`