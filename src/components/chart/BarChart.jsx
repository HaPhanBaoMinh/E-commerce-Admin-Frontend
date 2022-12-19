import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

function BarChart({ chartData }) {
    const [data, setData] = useState(undefined)
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },

        },
    };

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    useEffect(() => {
        if (chartData) {
            setData({
                labels,
                datasets: [
                    {
                        label: 'Order',
                        data: chartData,
                        backgroundColor: '#ffa135ac',
                        borderColor: '#fbae55',
                        borderWidth: 1
                    },
                ],
            })
        }
    }, [chartData])

    return (
        <Container>
            <h5> Order quantity <span>(month)</span> </h5>
            {data ? <Bar options={options} data={data} /> : <p>loading...</p>}
            {/* <Bar options={options} data={data} /> */}
        </Container>
    )
}

export default BarChart

const Container = styled.div`
    width: 100%;
    height: 90%;
    /* background-color: #767611; */
    display: flex;
    width: calc(205%/3);
    /* display: flex; */
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    @media screen and (max-width: 600px)  {
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    h5{
        align-self: flex-start;
        span {
            font-size: 12px;
        }
    }
    canvas{
        width:100% !important;
        height:auto !important;
    }
`