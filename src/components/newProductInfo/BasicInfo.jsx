import React from 'react'
import styled from 'styled-components'

function BasicInfo({ setname, setbrand, setquantity, setdescription, name, brand, quantity, description }) {
    return (
        <Container>
            <h2>Basic information</h2>
            <div className="product-info">
                <div className="info-row">
                    <label htmlFor="name">Name </label>
                    <input type="text" id="name" value={name} onChange={(e) => setname(e.target.value)} />
                </div>

                <div className="info-half-row-container">
                    <div className="info-half-row">
                        <label htmlFor="brand">Brand </label>
                        <input type="text" id="brand" value={brand} onChange={(e) => setbrand(e.target.value)} />
                    </div>

                    <div className="info-half-row">
                        <label htmlFor="quantity">Quantity </label>
                        <input type="number" id="quantity" value={quantity} onChange={(e) => setquantity(e.target.value)} />
                    </div>
                </div>

                <div className="info-row">
                    <label htmlFor="description">Description </label>
                    <textarea type="text" id="description" value={description} maxLength="500" rows="4" onChange={(e) => setdescription(e.target.value)} />
                </div>
            </div>
        </Container>
    )
}

export default BasicInfo

const Container = styled.div`
    padding: var(--padding);
    width: 60%;
    /* height: 500px;  */
    height: 100%;
    box-sizing: border-box;
    gap: var(--padding);
    background-color: #ffc786b8;
    border-radius: 5px;
    h2{
        height: 10%;
    }
    .info-half-row-container{
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: var(--padding);
        .info-half-row{
            width: 50%;
        }
    }
    .product-info{
        height: 90%;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .sku{
            font-size: 15px;
        }
        .info-row{
            display: flex;
            flex-direction: column;
            gap: 10px;
            textarea{
                font-size: 15px; 
                line-height: 20px;
                padding: 10px;
            }
        }
        label{ 
            font-size: 15px;
            font-weight: 600;
        }
        input{
            display: block;
            width: 100%;
            box-sizing: border-box;
            height: 40px;
            padding-left: 10px;
            font-size: 16px;
        }
    }
    .info-half-row-container{
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: var(--padding);
        .info-half-row{
            width: 50%;
            .css-1brzfiy{
                height: 40px;
                background-color: #ffc786b8;

            }
            label{
            font-size: 15px;
            font-weight: 600;
            }
            input{
                display: block;
                width: 100%;
                box-sizing: border-box;
                height: 40px;
                padding-left: 10px;
                font-size: 16px;
            }
        }
    }
`