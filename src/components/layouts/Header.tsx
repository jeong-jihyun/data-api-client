import React from 'react'
import Title from '../text/Title'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Div = styled.div`
    display: flex;
    background-color: #505ae1;
    border-radius: 2rem;
    padding-left: 2rem;
`;
const Nav = styled.div`
    float: left;
`;
const L = styled.li`
    list-style: none;
    float: left;
    padding-top: 1px;
    padding-left: 20px;
    color:#fff;
    font-weight: 100;
`;
const U = styled.ul`
    padding-top: 5px;
`
const Header = () => {
  return (
    <>
        <header>
            <Div>
                <Title>Sample</Title>
                <Nav>
                    <U>
                        <L><Link to={'/getLfinsOvrlPstaList'} >생명보험사 종합현황 조회</Link></L>
                        <L>menu1</L>
                        <L>menu1</L>
                        <L>menu1</L>
                    </U>
                </Nav>
            </Div>
        </header>
    </>
  )
}

export default Header