import React, { useState } from 'react'
import styled from 'styled-components'

function BestSaleItem() {
    return (
        <Container>
            <td>C-a3b82d</td>
            <td className='product-column'>
                <div className="product-img">
                    <img src="http://localhost:5000/images/1669165617737.webp" alt="" />
                </div>
                <h4>Nike Zoom Mercurial Superfly 9 Academy MG</h4>
            </td>
            <td>Nike</td>
            <td>1243</td>

        </Container>
    )
}

export default BestSaleItem

const Container = styled.tr`
            border-bottom: 1px solid var(--line_2);
            line-height: 70px;
            .product-column{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 200px;
                margin: 0 auto;
                h4{
                    width: 50%;
                    display: block;
                    white-space: nowrap; 
                    overflow: hidden;
                    text-overflow: ellipsis; 
                }
            }
            td{
                text-align: center;
                line-height: 94px;
                vertical-align: middle;
                .product-img{
                    height: 70px;
                    width: 70px;
                    img{
                        height: 100%;
                    }
                }
            }
            th{
                /* background-color: aqua; */
                text-align: center;
                line-height: 70px;
            }
`