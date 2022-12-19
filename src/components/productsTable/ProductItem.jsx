import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import formatMoney from '../../utils/function/formatMoney'
import { ROUTE } from '../api/route'

function ProductItem({ item }) {
    const category = useSelector(state => state.categoryList.find(category => category.id === item.category_id))
    return (
        <Container>
            <td>
                <div className="image">
                    <img src={`${ROUTE}/images/${item.images[0]}`} alt="" />
                </div>
            </td>
            <td className='name hidden-class'> {item.name} </td>
            <td>{item.sku}</td>
            <td className='hidden-class'>{formatMoney(item.price)}</td>
            <td className='hidden-class'> {item.brand} </td>
            <td>{category ? category.name : "-"}</td>
            <td>
                <Link to={`/products/${item.sku}`}>
                    <AiFillEye />
                </Link>
            </td>
        </Container>
    )
}

export default ProductItem

const Container = styled.tr`
            border-bottom: 1px solid var(--line_2);
            line-height: 70px;
            .hidden-class{
                @media screen and (max-width: 600px)  {
                    display: none;
                }
            }
            td{
                text-align: center;
                line-height: 70px;
                vertical-align: middle;
                white-space: nowrap;
                max-width: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                padding: 0 10px;
                svg{
                    font-size: 20px;
                    cursor: pointer;
                }
                .image{
                    height: 70px;
                    padding: 8px 0;
                    img{
                        height: 100%;
                    }
                }
            }
            .name{
                width: 20%;
            }
            th{
                /* background-color: aqua; */
                text-align: center;
                line-height: 70px;
            }
`