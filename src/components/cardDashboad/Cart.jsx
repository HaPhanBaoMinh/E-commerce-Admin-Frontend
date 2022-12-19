import React from 'react'
import styled from 'styled-components'
import src from "../../assets/circle.1541da91.svg"

function Cart({ data = 0, icon, title = "Title", percent = 0 }) {
    return (

        <Container>
            <div className="card-container">
                <h2 className='card-number'>
                    <p className='card-data'> {data} </p>
                    <p className={percent > 0 ? 'increase card-percent' : 'decrease card-percent'}>({`${Number(percent).toFixed(2) > 0 ? '+' : ''}${Number(percent).toFixed(2)}%`})</p>
                </h2>
                <h4 className='card-title'> {title} </h4>
            </div >
            <div className="card-logo">
                {icon}
                <p className='card-time'>Monthly</p>
            </div>
            <img src={src} alt="" />
        </Container >
    )
}

export default Cart

const Container = styled.div`
    width: calc(100%/3);
    background: linear-gradient(to right, #f7ab7b, var(--orange));
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 70% 30%;
    position: relative;
    box-shadow: 0px 1px 3px;
    @media screen and (max-width: 600px)  {
        padding: 25px var(--padding);
        width: 100%;
    }
    .card-container{
        /* background-color: aqua; */
        box-sizing: border-box;
        padding-left: var(--padding);
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 5px;
        .card-title{
            font-size: 20px;
            box-sizing: border-box;
            padding-left: 10px;
        }

        .card-number{
            display: flex;
            align-items: center;
            gap: 8px;
            color: white;
            @media screen and (max-width: 600px)  {
                overflow: hidden;
            }
            .card-data{
                font-size: 30px;
            }

            .card-percent{
                font-size: 15px;
            }
            .increase{
                color: #37a55d
            }
            
            .decrease{
                color: #d02828
            }
        }

        
    }

    .card-logo{
        /* background-color: aqua; */
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding-right: var(--padding);
        gap: 5px;
        flex-direction: column;
        svg{
            font-size: 35px;
        }
        .card-time{
            font-size: 14px;
            font-weight: 700;
        }
    }
    img{
        position: absolute;
        top: 0;
        height: 100%;
        right: 0;
    }
`