import React, { useEffect } from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'
import Header from './Header'
import { useSelector } from 'react-redux';

function DefaultLayout({ children }) {
    const isOpenSideBar = useSelector(state => state.sidebar);
    useEffect(() => {
        window.scrollTo({
            top: 60,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <Container>
            <Header />
            <div className={isOpenSideBar ? 'container' : 'container closeSidebar'} >
                <SideBar />
                {children}
            </div>
        </Container>
    )
}

export default DefaultLayout

const Container = styled.div`
    width: 100%;
    /* height: 100%; */
    .container{
        width: 100%;
        /* height: 91vh; */
        background-color: antiquewhite;
        display: grid;
        grid-template-columns: 17% 83%;
        transition: 0.5s ease;
        min-height: calc(100vh - 65px);
        @media screen and (max-width: 600px)  {
            grid-template-columns: 60% 40%;
        }
    }

    .closeSidebar{
        grid-template-columns: 5% 95%;
        @media screen and (max-width: 600px)  {
            grid-template-columns: 0% 100%;
        }
    }
`