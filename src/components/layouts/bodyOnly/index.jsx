import React, { useEffect } from 'react'
import styled from 'styled-components'

function BodyOnlyLayout({ children }) {
    useEffect(() => {
        window.scrollTo({
            top: 60,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <Container>
            <div className='container'>
                {children}
            </div>
        </Container>
    )
}

export default BodyOnlyLayout

const Container = styled.div`
    width: 100%;
    height: 100vh;
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: antiquewhite;
        transition: 0.5s ease;
    }

`