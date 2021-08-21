import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from './GlobalContext'

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: var(--transition) background-color;
  box-shadow: 0 0.2rem 0.4rem 0 rgb(0 0 0 / 6%);
  height: 8rem;
  width: 100%;
`

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
`
const Title = styled.h1`
  font-size: 1.4rem;
  letter-spacing: 0;
  line-height: 1.6rem;
  font-weight: 600;

  @media (min-width: 467px) {
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
`

const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  text-transform: capitalize;
  font-size: 1.4rem;
  letter-spacing: 0;
  line-height: 1.6rem;
  font-weight: 600;

  @media (min-width: 467px) {
    font-size: 1.6rem;
    line-height: 2.2rem;
  }
`

export default function Header() {
  const { toogleTheme, theme } = useContext(Context)
  return (
    <Container className={theme ? 'elementLightTheme' : 'elementDarkTheme'}>
      <Wrapper>
        <Title className={theme ? 'darkColorTheme' : 'lightColorTheme'}>
          Where in the world?
        </Title>
        <Button
          className={theme ? 'darkThemeIcons' : 'lightThemeIcons'}
          onClick={toogleTheme}>
          {' '}
          Dark mode
        </Button>
      </Wrapper>
    </Container>
  )
}
