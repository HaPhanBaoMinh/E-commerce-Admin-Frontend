import React from 'react'
import styled from 'styled-components'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Box } from '@mui/system';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MdOutlineClear } from "react-icons/md";


function PriceInfo({ setprice, setdiscount, setday_end_discount, discount, price, day_end_discount }) {
    const [date, setDate] = React.useState(null);

    const handleChangeDate = (value) => {
        // console.log(new Date(value));
        const day = new Date(value);
        const dayEndDiscount = `${day.getMonth() + 1}-${day.getDate()}-${day.getFullYear()}`
        setday_end_discount(dayEndDiscount)
        setDate(value);
    };

    return (
        <Container>
            <h2>Price</h2>

            <div className="info-half-row-container">
                <div className="info-half-row">
                    <label htmlFor="price">Price (VND) </label>
                    <input type="number" id="price" value={price} onChange={(e) => setprice(e.target.value)} />
                </div>

                <div className="info-half-row">
                    <label htmlFor="discount">Discount Price (VND) </label>
                    <input type="number" id="discount" value={discount} onChange={(e) => setdiscount(e.target.value)} />
                </div>

                <div className="info-half-row">
                    <label htmlFor="discount">Day end discount </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="MM/DD/YYYY"
                            value={day_end_discount}
                            onChange={(value) => handleChangeDate(value)}
                            renderInput={({ inputRef, inputProps, InputProps }) => (
                                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', boxSizing: 'border-box', width: '100%', justifyContent: 'space-between', padding: '0 10px' }}>
                                    <input ref={inputRef} {...inputProps} style={{ fontWeight: 600, height: '100%', boxSizing: 'border-box', border: 'none', backgroundColor: 'transparent', outline: 'none', width: '55%' }} />
                                    {InputProps?.endAdornment}
                                </Box>
                            )}
                        />
                    </LocalizationProvider>
                </div>
            </div>
        </Container>
    )
}

export default PriceInfo

const Container = styled.div`
    padding: var(--padding);
    width: 60%;
    height: 150px; 
    box-sizing: border-box;
    gap: var(--padding);
    background-color: #ffc786b8;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
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