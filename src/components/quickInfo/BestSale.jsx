import React, { useState } from 'react';
import styled from 'styled-components'
import BestSaleItem from './BestSaleItem';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField } from '@material-ui/core';

function BestSale() {
    const [value, setValue] = useState(new Date());
    return (
        <Container>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                    renderInput={(params) => {
                        <TextField {...params} />;
                    }}
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                />
            </LocalizationProvider>
        </Container>
    )
}

export default BestSale

const Container = styled.div`
    width: 60%;
    height: 100%;
    background-color: #ffc786b8;
    box-sizing: border-box;
    padding: var(--padding);
    border-radius: 5px;
    overflow: auto;
    box-shadow: 0px 1px 3px;
    @media screen and (max-width: 600px)  {
        width: 100%;
    }
   
    .css-epd502{
        width: 100%;
        min-height: 100%;
        background-color: blanchedalmond;
        .css-169iwlq-MuiCalendarPicker-root{
            width: 100%;
            min-height: 100%;
            /* background-color: aqua; */
        }
    }
    .css-hlj6pa-MuiDialogActions-root{
        display: none;
    }

    .css-u0soqy-MuiPickerStaticWrapper-root{
        height: 100%;
    }

    .css-xelq0e-MuiPickerStaticWrapper-content{
        height: 100%;
        background-color: transparent;
    }

    .css-qklzlb-MuiDayPicker-header{
        justify-content: space-evenly;
        background-color: var(--orange);
        border-radius: 2px;
        font-weight: 600;
        font-size: 20px;
    }

    .css-raiqh1-MuiTypography-root-MuiDayPicker-weekDayLabel{
        font-size: large;
        font-weight: 600;
    }

    .css-1vcokmn-MuiCalendarOrClockPicker-root{
        height: 100%;
    }

    .css-1eurbeq-MuiPickersToolbar-root-MuiDatePickerToolbar-root{
        display: none;
    }

    .css-ghi3gg-MuiDayPicker-weekContainer{
        justify-content: space-evenly;
    }

    .css-6t5f1e-MuiDayPicker-monthContainer{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .css-15dbmtb-MuiPickersFadeTransitionGroup-root-MuiCalendarPicker-viewTransitionContainer{
        height: 100%;
    }
    .css-15dbmtb-MuiPickersFadeTransitionGroup-root-MuiCalendarPicker-viewTransitionContainer > div{
        height: 100%;
    }

    .css-15dbmtb-MuiPickersFadeTransitionGroup-root-MuiCalendarPicker-viewTransitionContainer > div > div{
        height: 100%;
        display: grid;
        grid-template-rows: 10% 90%;
    }
    .css-bkrceb-MuiButtonBase-root-MuiPickersDay-root{
        border-radius: 4px;
        font-size: initial;
        font-weight: 600;
    }
    
    .css-bkrceb-MuiButtonBase-root-MuiPickersDay-root.Mui-selected{
        background-color: var(--orange);
        &:hover{
            background-color: var(--orange);
            opacity: 0.7;
        }
    }

    .css-195y93z-MuiButtonBase-root-MuiPickersDay-root{
        border-radius: 4px;
        font-size: initial;
        font-weight: 600;
    }

    .css-195y93z-MuiButtonBase-root-MuiPickersDay-root:focus.Mui-selected{
        border-radius: 4px;
        font-size: initial;
        font-weight: 600;
        background-color: var(--orange);
    }

    .css-bkrceb-MuiButtonBase-root-MuiPickersDay-root:focus.Mui-selected{
        background-color: var(--orange);

    }

    .css-195y93z-MuiButtonBase-root-MuiPickersDay-root.Mui-selected{
        background-color: var(--orange);

    }
    
` 