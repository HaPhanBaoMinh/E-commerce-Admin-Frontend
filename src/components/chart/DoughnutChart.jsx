import React from 'react'
import styled from 'styled-components'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

function DoughnutChart({ doughnutChart }) {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const labels = ['Ordered ', 'Shipped', 'In Transit', 'Delivered', 'Cancelled', 'Delivery failed'];
    const backgroundColor = [
        'rgba(75, 192, 192, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)',
    ]
    const borderColor = [
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)',
    ]

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            }
        },
    };

    const data = {
        labels,
        datasets: [
            {
                // label: labels,
                data: doughnutChart,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: 1
            },
        ],
    };

    return (
        <>
            <Container>
                <h5> Order status <span>(month)</span> </h5>
                {data ? <Doughnut data={data} options={options} /> : <p>loading...</p>}
            </Container>
        </>
    )
}

export default DoughnutChart

const Container = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: aqua; */
    display: flex;
    justify-content: space-around;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: calc(100%/3 );
    box-sizing: border-box;
    @media screen and (max-width: 600px)  {
        width: 95%;
        margin: auto;
    }
    h5{
        align-self: flex-start;
        span {
            font-size: 12px;
        }
    }
    canvas{
        width:90% !important;
        height:auto !important;
    }
    
`