import React, {useContext} from 'react';
import styled from 'styled-components';
import {Context} from './GlobalContext';

const Container = styled.header `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  margin-block-end: 1rem;
  text-transform: capitalize;
`;


export default function Header() {
  const {toogleTheme, theme} = useContext(Context)
  return (
    <Container className={theme ? 'elementDarkTheme' : 'elementLightTheme'}>
      <Title className={theme ? 'lightColorTheme' : 'darkColorTheme'}>Where in the world?</Title>
      <Button className={theme ? 'lightThemeIcons' : 'darkThemeIcons'} onClick={toogleTheme}> Dark mode</Button>
    </Container>
  )
}
