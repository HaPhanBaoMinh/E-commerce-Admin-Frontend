import React from 'react'
import styled from 'styled-components'

function CustomerInfo({ name, email, phone, pay_method }) {
    return (
        <Container>
            <h1>Customer</h1>
            <div className="rowInfor">
                <h2>Customer Name</h2>
                <h2> {name} </h2>
            </div>

            <div className="rowInfor">
                <h2>Phone Number</h2>
                <h2> {phone} </h2>
            </div>

            <div className="rowInfor">
                <h2>Email</h2>
                <h2> {email} </h2>
            </div>

            <div className="rowInfor">
                <h2>Pay Method</h2>
                <h2 className='pay-method'> {pay_method} </h2>
            </div>
        </Container>
    )
}

export default CustomerInfo

const Container = styled.div`
    width: 100%;
    height: 50%;
    padding: 5px 20px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 1px 3px;
    box-sizing: border-box;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1{
        font-size: 20px;
        height: 50px;
        border-bottom: 1px solid var(--line_2);
        line-height: 50px;

    }
    .rowInfor{
        width: 100%;
        display: flex;
        box-sizing: border-box;
        line-height: 50px;
        justify-content: space-between;
        .pay-method{
            text-transform: uppercase;
        }
    }
`