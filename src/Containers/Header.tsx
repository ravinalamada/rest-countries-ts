import React, {useContext} from 'react';
import styled from 'styled-components';
import {Context} from './GlobalContext';

const Container = styled.header `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
  border-radius: 2px;
  padding: 16px;
  margin-block-end: 2rem;
`;
const Title = styled.h1 `
  font-size: 24px;
`;

const Button = styled.button `
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
`;


export default function Header() {
  const {toogleTheme} = useContext(Context)
  return (
    <Container>
      <Title>Where in the world?</Title>
      <Button onClick={toogleTheme}> Dark mode</Button>
    </Container>
  )
}
