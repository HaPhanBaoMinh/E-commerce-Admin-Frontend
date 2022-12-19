import React from 'react';
import styled from 'styled-components'
import BestSale from './BestSale';
import TodoList from './TodoList';


function QuickInfo() {
    return (
        <Container>
            <BestSale />
            <TodoList />
        </Container>
    )
}

export default QuickInfo

const Container = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    gap: var(--padding);
    @media screen and (max-width: 600px)  {
        flex-direction: column;
        height: auto;
    }
`