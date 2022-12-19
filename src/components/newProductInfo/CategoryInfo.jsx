import { FormControl, MenuItem, Select } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';


function CategoryInfo({ setcategoryId, categoryId }) {
    const categoryList = useSelector(state => state.categoryList);
    const [category, setcategory] = useState();

    const handleChange = (event) => {
        setcategoryId(event.target.value)
    }

    return (
        <Container>
            <h2>Category</h2>

            <div className="info-row">
                <label htmlFor="price">Title </label>
                <FormControl sx={{ height: "100%" }}>
                    <Select
                        sx={{ height: "100%" }}
                        id="demo-simple-select"
                        value={categoryId}
                        onChange={(value) => handleChange(value)}
                    >
                        {categoryList.map(category => <MenuItem key={uuidv4()} value={category.id}>{category.name}</MenuItem>)}
                    </Select>
                </FormControl>
            </div>
        </Container>
    )
}

export default CategoryInfo

const Container = styled.div`
    padding: var(--padding);
    width: 40%;
    height: 150px;
    box-sizing: border-box;
    gap: var(--padding);
    background-color: #ffc786b8;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    h2{
    }
    .info-row{
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: column;
        gap: 10px;      
        label{
            font-size: 15px;
            font-weight: 600;
            }      
    }
    .MuiFormControl-root{
        height: 100%;
        background-color:#fec98b;
        padding: 2px 10px;
        box-sizing: border-box;
    }

    .MuiInput-underline:before{
        display: none;
    }
`