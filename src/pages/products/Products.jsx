import { FormControl } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ProductTable from '../../components/productsTable/ProductTable'
import { v4 as uuidv4 } from 'uuid';

function Products() {
    const productList = useSelector(state => state.productList);
    const categoryList = useSelector(state => state.categoryList);
    const [currentCategory, setcurrentCategory] = useState("All");
    const [filterProductList, setfilterProductList] = useState([])

    const handleChangeCategory = (value) => {
        setcurrentCategory(value)
    }

    useEffect(() => {
        let tmpList = productList;
        if (currentCategory !== "All") {
            tmpList = tmpList.filter(item => item.category_id === currentCategory)
        }
        setfilterProductList(tmpList)
    }, [currentCategory])

    useEffect(() => {
        setfilterProductList(productList)
    }, [productList])

    return (
        <Container>
            <div className="filter-order">
                <div className="search-item">
                    <input type="text" placeholder='Search by SKU' />
                    <div className="search-logo">
                        <FiSearch />
                    </div>
                </div>
                <div className="filter-item">
                    <FormControl sx={{ width: '100%', verticalAlign: 'initial', height: '100%' }}>
                        <InputLabel id="demo-simple-select">Category</InputLabel>
                        <Select
                            id="demo-simple-select"
                            label="Category"
                            sx={{ backgroundColor: 'rgba(255, 177, 41, 1)', fontWeight: 800, height: '100%' }}
                            defaultValue={"All"}
                            onChange={(e) => handleChangeCategory(e.target.value)}
                        >
                            <MenuItem value={"All"} >All</MenuItem>
                            {categoryList ? categoryList.map(category =>
                                <MenuItem value={category.id} key={uuidv4()} >{category.name}</MenuItem>
                            ) : undefined}

                        </Select>
                    </FormControl>
                </div>
                <div className="filter-item">
                    <Link to="/new-product">
                        <button>Add New Product</button>
                    </Link>
                </div>
            </div>
            <ProductTable productList={filterProductList} />
        </Container>
    )
}

export default Products

const Container = styled.div`
    padding: var(--padding);
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    gap: var(--padding);
    display: flex;
    flex-direction: column;
    .filter-order{
        width: 100%;
        height: 45px;
        display: flex;
        gap: var(--padding);
        .search-item{
            height: 100%;
            width: 40%;
            display: grid;
            grid-template-columns: 85% 10%;
            gap: 10px;
            border-radius: 5px;
            background-color: rgba(255, 177, 41, 1);

            input{
                border-radius: 5px;
                background-color: transparent;
                height: 100%;
                outline: none;
                box-sizing: border-box;
                border: none;
                padding-left: 10px;
                font-size: 17px;
            }
            .search-logo{
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 20px;
            }
        }
        .filter-item{
            width: 20%;
            height: 100%;
            border-radius: 5px;
            background-color: rgba(255, 177, 41, 1);
            @media screen and (max-width: 600px)  {
                width: 30%;
            }
            .clear-date{
                background-color: #ffffff;
                border-radius: 2px;
                border: none;
                height: 25px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            button{
                width: 100%;
                height: 100%;
                border-radius: 5px;
                background-color: rgba(255, 177, 41, 1);
                cursor: pointer;
                outline: none;
                border: none;
                font-weight: 600;
                font-size: 15px;
                &:hover{
                    opacity: 0.8;
                    outline: 0.5px solid;
                }
            }
        }
    }
`