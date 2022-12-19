import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import { ROUTE } from "../api/route"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataOrderNumber } from '../../action/orderNumberAction';

function Chart() {
    const [chartData, setchartData] = useState();
    const [doughnutChart, setDoughnutChart] = useState();
    const dispath = useDispatch();
    const orderList = useSelector(state => state.orderList);

    useEffect(() => {
        const getBatChartData = async () => {
            const { data } = await axios.get(`${ROUTE}/api/admin/orders`);
            if (data.status) {
                const convertDataToObject = data.result.reduce((acc, cur) => {
                    return { ...acc, [cur.month]: cur.count }
                }, {});

                const formatData = [];
                for (const key in convertDataToObject) {
                    formatData[key - 1] = convertDataToObject[key]
                }

                dispath(fetchDataOrderNumber(formatData[new Date().getMonth()], formatData[new Date().getMonth() - 1]))
                setchartData(formatData)
            }
        }
        const getDoughnutChartData = () => {
            // const labels = ['Ordered ', 'Shipped', 'In Transit', 'Delivered', 'Cancelled', 'Delivery failed'];
            const formatData = [0, 0, 0, 0, 0, 0];
            orderList.map((order, index) => {
                if (order.status === "Ordered") {
                    formatData[0]++;
                }

                if (order.status === "Shipped") {
                    formatData[1]++;
                }

                if (order.status === "In Transit") {
                    formatData[2]++;
                }

                if (order.status === "Delivered") {
                    formatData[3]++;
                }

                if (order.status === "Cancelled") {
                    formatData[4]++;
                }

                if (order.status === "Delivery failed") {
                    formatData[5]++;
                }

            })

            setDoughnutChart(formatData);
        }
        getBatChartData();
        getDoughnutChartData();
    }, [orderList])

    return (
        <Container>
            <BarChart chartData={chartData} />
            <DoughnutChart doughnutChart={doughnutChart} />
        </Container>
    )
}

export default Chart

const Container = styled.div`
    width: 100%;
    height: 68vh;
    /* background-color: aqua; */
    display: flex;
    gap: var(--padding);
    @media screen and (max-width: 600px)  {
        flex-direction: column;
        height: fit-content;
    }
`