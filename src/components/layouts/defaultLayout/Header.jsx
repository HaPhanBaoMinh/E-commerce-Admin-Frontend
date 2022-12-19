import React, { useState } from 'react'
import styled from 'styled-components'
import { GrMenu } from 'react-icons/gr'
import { CiLogout } from 'react-icons/ci'
import { useSelector, useDispatch } from 'react-redux';
import { closeSideBar, openSideBar } from '../../../action/sidebarAction';

function Header() {
    const dispath = useDispatch();
    const [slideBarStatus, setslideBarStatus] = useState(true);

    const onClickMenu = () => {
        if (slideBarStatus) {
            dispath(closeSideBar())
        } else {
            dispath(openSideBar())

        }
        setslideBarStatus(status => !status)
    }

    return (
        <Container style={slideBarStatus ? {} : { gridTemplateColumns: "5% 95%" }}>
            <div className="header-logo">
                {slideBarStatus ?
                    <h1>Company</h1> : ""
                }
            </div>

            <div className="header-container">
                <div className="header-menu" >
                    <GrMenu onClick={() => onClickMenu()} />
                </div>

                <div className="header-user">
                    <div className="user-info">
                        <div className="user-logo">
                        </div>
                        <h4 className='user-name'>Ha Phan Bao Minh</h4>
                    </div>

                    <div className="logout-button">
                        <CiLogout />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Header

const Container = styled.div`
    width: 100%;
    height: 65px;
    /* background-color: aqua; */
    box-sizing: border-box;
    display: grid; 
    grid-template-columns: 17% 83%;
    transition: 0.5s ease;
    @media screen and (max-width: 600px)  {
        grid-template-columns: 60% 40%;
    }
    .header-logo{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        box-sizing: border-box;
        h1 {
            background-color: var(--black);
            padding: 16px 30px;
            box-sizing: border-box;
            max-width: 50%;
            height: 50%;
            font-size: 20px;
            font-weight: 600;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .header-container{
        padding-right: var(--padding);
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        .header-menu{
            height: 100%;
            width: 5%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            @media screen and (max-width: 600px)  {
                width: 15%;
            }
            svg{
                font-size: 22px;
                cursor: pointer;
            }
        }
        .header-user{
            /* background-color: #39601b; */
            width: 30%;
            display: flex;
            align-items: center;
            gap: 20px;
            justify-content: flex-end;
            @media screen and (max-width: 600px)  {
                width: 80%;
            }
            .user-info{
                /* background-color: #39601b; */
                max-width: 60%;
                height: 100%;
                display: flex;
                align-items: center;
                gap: 10px;
                .user-logo{
                    width: 40px;
                    height: 40px;
                    background-color: #7d8484;
                    border-radius: 50px;
                }
            }
        }
        .logout-button{
            padding: 7px 10px;
            background-color: var(--orange);
            border-radius: 5px;
            cursor: pointer;
            svg{
                font-size: 20px;
            }
        }
    }
`