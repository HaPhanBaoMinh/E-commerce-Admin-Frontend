import React from 'react'
import styled from 'styled-components'
import { MdDashboard } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


function SideBarItem({ link, name, logo, isSelected, onClick }) {
    const isOpenSideBar = useSelector(state => state.sidebar);
    return (
        <Link to={`${link}`}>
            <Container onClick={onClick}>
                <div className={isSelected ? "selected" : ""}>
                    <p className={isOpenSideBar ? '' : 'closeSidebarName'}>{name}</p>
                    <span className={isOpenSideBar ? '' : 'colseSidebar'}>
                        {logo}
                    </span>
                </div>
            </Container>
        </Link>
    )
}

export default SideBarItem

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    /* background-color: #999999; */
    cursor: pointer;
    font-size: 17px;
    margin-bottom: 5px;
    transition: 0.4s ease;
    overflow: hidden;
    div{
            box-sizing: border-box;
            padding:0 var(--padding);
            align-items: center;
            justify-content: space-between;
            display: flex;
            width: 100%;
            height: 100%;
            p{
                transition: 3s ease;
                width: 90%;

            }
            .closeSidebarName{
                transition: 3s ease;
                width: 0px;
                overflow: hidden;
            }
            .colseSidebar {
                width: 100%;
                display: flex;
                justify-content: center;
                svg{
                    font-size: 20px;
                }
            }

        }
        .selected{
            background-color: var(--orange);
            p {
                font-weight: 800;
            }
        }
        :hover{
            background-color: var(--hover);
            transition: 0.4s ease;
        }
`