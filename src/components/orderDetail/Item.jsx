import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import formatMoney from '../../utils/function/formatMoney'
import { ROUTE } from '../api/route';

function Item({ order }) {
    const product = useSelector(state => state.productList.find(product => product.sku === order.sku))
    return (
        <Container>
            <td>
                <div className="product">
                    <div className="product-img">
                        {product ? <img src={`${ROUTE}/images/${product.images[0]}`} alt="" /> : undefined}
                    </div>
                    <p>{product ? product.name : 'Unknow'}</p>
                </div>
            </td>
            <td className='hidden-class'>x{order.quantity}</td>
            <td className='hidden-class'> {product ? formatMoney(product.price) : 'Unknow'} </td>
            <td className='hidden-class'> {product ? formatMoney(product.discount_price) : 'Unknow'} </td>
            <td className='total '>  {product ? formatMoney(order.total) : 'Unknow'}  </td>
        </Container >
    )
}

export default Item

const Container = styled.tr`
            border-bottom: 1px solid var(--line_2);
            box-sizing: border-box;
            .hidden-class{
                @media screen and (max-width: 600px)  {
                    display: none;
                }
            }
            .total{
                font-weight: 600;
            }
            .price{
                width: 25%;
            }
            .product-name{
                width: 35%;
                font-size: 20px;
            }
            .QTY{
                width: 15%;
            }
            th{
                text-align: center;
                line-height: 50px;
            }
            td{
                text-align: center;
                vertical-align: middle;
                .product{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    text-align: initial;
                    p{
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        width: 60%;
                        overflow: hidden;
                    }
                    .product-img{
                        height: 50px;
                        width: 50px;
                        /* background-color: aqua; */
                        padding: 10px 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        img{
                            width: auto;
                            height: inherit;
                        }
                    }
                }
            }
`