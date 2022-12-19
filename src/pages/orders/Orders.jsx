import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import OrderTable from '../../components/orderTable/OrderTable'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box } from '@mui/system';
import { FiSearch } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { MdOutlineClear } from "react-icons/md";

function Orders() {
    const [date, setDate] = React.useState(null);
    const orderList = useSelector(state => state.orderList);
    const [filterOrder, setFilterOrder] = useState([]);
    const [status, setStatus] = useState('All');
    const [payMethod, setPayMethod] = useState('All');

    const handleChangeStatus = (value) => {
        setStatus(value)
    }

    const handleChangePayMethod = (value) => {
        setPayMethod(value)
    }

    const handleChangeDate = (value) => {
        setDate(value);
    };

    useEffect(() => {
        if (orderList) {
            setFilterOrder(orderList)
        }
    }, [orderList])



    useEffect(() => {
        let filterOrderTmp = orderList;
        if (status !== 'All') {
            filterOrderTmp = orderList.filter(order => order.status === status);
        }

        if (payMethod !== 'All') {
            filterOrderTmp = filterOrderTmp.filter(order => order.pay_method === payMethod);
        }

        if (date !== null) {
            filterOrderTmp = filterOrderTmp.filter(order => new Date(order.createat).getTime() === new Date(date).getTime());
        }

        setFilterOrder(filterOrderTmp)
    }, [status, payMethod, date])

    return (
        <Container>
            <div className="filter-order">
                <div className="search-item">
                    <input type="text" placeholder='Search by phone ' />
                    <div className="search-logo">
                        <FiSearch />
                    </div>
                </div>
                <div className="filter-item">
                    <FormControl sx={{ width: '100%', verticalAlign: 'initial', height: '100%' }}>
                        <InputLabel id="demo-simple-select">Status</InputLabel>
                        <Select
                            id="demo-simple-select"
                            label="Status"
                            onChange={(e) => handleChangeStatus(e.target.value)}
                            sx={{ backgroundColor: 'rgba(255, 177, 41, 1)', fontWeight: 800, height: '100%' }}
                            defaultValue={"All"}
                        >
                            <MenuItem value={"All"} >All</MenuItem>
                            <MenuItem value={"Ordered"} >Ordered</MenuItem>
                            <MenuItem value={"Shipped"} >Shipped</MenuItem>
                            <MenuItem value={"In Transit"} >In Transit</MenuItem>
                            <MenuItem value={"Delivered"} >Delivered</MenuItem>
                            <MenuItem value={"Cancelled"} >Cancelled</MenuItem>
                            <MenuItem value={"Delivery failed"} >Delivery failed</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="filter-item">
                    <FormControl sx={{ width: '100%', verticalAlign: 'initial', height: '100%' }}>
                        <InputLabel id="demo-simple-select">Pay method</InputLabel>
                        <Select
                            id="demo-simple-select"
                            label="Pay method"
                            onChange={(e) => handleChangePayMethod(e.target.value)}
                            sx={{ backgroundColor: 'rgba(255, 177, 41, 1)', fontWeight: 800, height: '100%' }}
                            defaultValue={"All"}
                        >
                            <MenuItem value={"All"} >All</MenuItem>
                            <MenuItem value={"cod"}>COD</MenuItem>
                            <MenuItem value={"bank"} >Banking</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="filter-item">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="MM/DD/YYYY"
                            value={date}
                            onChange={(value) => handleChangeDate(value)}
                            renderInput={({ inputRef, inputProps, InputProps }) => (
                                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', boxSizing: 'border-box', width: '100%', justifyContent: 'space-between', padding: '0 10px' }}>
                                    <input ref={inputRef} {...inputProps} style={{ fontWeight: 600, height: '100%', boxSizing: 'border-box', border: 'none', backgroundColor: 'transparent', outline: 'none', width: '50%' }} />
                                    {InputProps?.endAdornment}
                                    <button className='clear-date' onClick={() => handleChangeDate(null)}>
                                        <MdOutlineClear />
                                    </button>
                                </Box>
                            )}
                        />
                    </LocalizationProvider>
                </div>

            </div>
            <OrderTable orderList={filterOrder} />
        </Container>
    )
}

export default Orders

const Container = styled.div`
    box-sizing: border-box; 
    padding: var(--padding);
    display: flex;
    flex-direction: column;
    gap: var(--padding);
    @media screen and (max-width: 600px)  {
        margin-top: 10px;
    }
    .css-1yq5fb3-MuiButtonBase-root-MuiIconButton-root{
        @media screen and (max-width: 600px)  {
            margin: 0;
        }
    }
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
            @media screen and (max-width: 600px)  {
                display: none;
            }
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
                width: calc(100%/3);
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
        }
    }
`