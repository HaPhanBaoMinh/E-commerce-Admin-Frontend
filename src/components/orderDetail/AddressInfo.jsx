import React from 'react'
import styled from 'styled-components'

function AddressInfo({ street, distric, wards, city, detail }) {
    return (
        <Container>
            <h1>Address</h1>
            <div className="address-info">
                <h4>City: <span>{city}</span></h4>
                <h4>Distric: <span>{distric}</span></h4>
                <h4>Wards: <span>{wards}</span></h4>
                <h4>Street: <span>{street}</span></h4>
                <h4>Detail:<span>{detail}</span></h4>
            </div>
        </Container>
    )
}

export default AddressInfo

const Container = styled.div`
    max-height: 279px;
    height: 50%;
    width: 100%;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 1px 3px;
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: var(--padding);
    h1{
        font-size: 20px;
        height: 50px;
        border-bottom: 1px solid var(--line_2);
        line-height: 50px;
    }
    .address-info{
        /* background-color: aqua; */
        height: 90%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h4{
            height: 40px;
            span{
                font-weight: 400;
            }
        }
    }
`