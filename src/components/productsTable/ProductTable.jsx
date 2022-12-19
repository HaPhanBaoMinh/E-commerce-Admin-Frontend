import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import { AiFillPicture } from "react-icons/ai";
import ProductItem from './ProductItem';


function ProductTable({ title = "Products", productList = undefined, action = true }) {
    return (
        <Container>
            <h1>{title}</h1>
            <table>
                <thead>
                    <tr>
                        <th> <AiFillPicture /> </th>
                        <th className='name hidden-class'>Name</th>
                        <th>SKU</th>
                        <th className='hidden-class'>Price</th>
                        <th className='hidden-class'>Brand</th>
                        <th>Category</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {productList ? productList.map((item, index) => <ProductItem key={uuidv4()} action={action} item={item} index={index} />) : <p>loading...</p>}
                </tbody>
            </table>
        </Container>
    )
}

export default ProductTable

const Container = styled.div`
    width: 100%;
    min-height: 400px;
    max-height: 532px;
    background-color: #ffc786b8;
    box-sizing: border-box;
    padding: var(--padding);
    border-radius: 5px;
    overflow: auto;
    box-shadow: 0px 1px 3px;
    @media screen and (max-width: 600px)  {
        max-height: fit-content;
    }
    .hidden-class{
        @media screen and (max-width: 600px)  {
            display: none;
        }
    }
    h1{
        font-size: 20px;
    }
    table {
        width: 100%;
        tr{
            border-bottom: 1px solid var(--black);
            .name{
                width: 20%;
            }
            th{
                /* background-color: aqua; */
                text-align: center;
                line-height: 50px;
            }
        }
    }
`