import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from './GlobalContext'
import styled from 'styled-components'

export const Container = styled.ul`
  text-align: left;
  margin-top: 3.2rem;
  display: grid;
  row-gap: 4rem;
  column-gap: 7.467rem;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 26.4rem);
  align-items: center
  padding-left: 5.6rem;
  padding-right: 5.5rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 700px) {
    margin-top: 4.8rem;
    row-gap: 7.5rem;
  }
`
export const Items = styled.li`
  width: 26.4rem;
  height: 33.6rem;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.7rem 0.2rem rgb(0 0 0 / 3%);
  transition: var(--transition) transform, var(--transition) box-shadow;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  a {
    text-decoration: none;
  }
`
export const Images = styled.img`
  width: 100%;
  height: 50%;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
`

export const Heading = styled.h2`
  font-size: 1.8rem;
  letter-spacing: 0;
  line-height: 2.6rem;
  font-weight: 800;
  margin-block-end: 1.6rem;
`
export const Text = styled.p`
  letter-spacing: 0;
  font-size: 1.4rem;
  line-height: 1.6rem;
  span:nth-of-type(1) {
    font-weight: 600;
  }

  span:nth-of-type(2) {
    font-weight: 300;
  }
`

export const Wrapper = styled.div`
  padding-left: 16px;
`

const CountryLists: React.FC = () => {
  const { countries, countryName, countryRegion, theme } = useContext(Context)
  return (
    <Container>
      {countries
        .filter(
          (country) =>
            country.name.toLowerCase().includes(countryName.toLowerCase()) &&
            country.region.toLowerCase().includes(countryRegion.toLowerCase())
        )
        .map((country) => {
          return (
            <Items
              className={theme ? 'elementLightTheme' : 'elementDarkTheme'}
              key={country.name}>
              <Link to={`/countryList/${country.name}`}>
                <Images src={country.flag} alt='flag' />
                <Wrapper>
                  <Heading
                    className={theme ? 'darkColorTheme' : 'lightColorTheme'}>
                    {country.name}
                  </Heading>
                  <Text>
                    <span
                      className={theme ? 'darkColorTheme' : 'lightColorTheme'}>
                      Population:
                    </span>{' '}
                    <span
                      className={theme ? 'lightTextTheme' : 'lightColorTheme'}>
                      {country.population}
                    </span>
                  </Text>
                  <Text>
                    <span
                      className={theme ? 'darkColorTheme' : 'lightColorTheme'}>
                      Region:
                    </span>{' '}
                    <span
                      className={theme ? 'lightTextTheme' : 'lightColorTheme'}>
                      {country.region}
                    </span>
                  </Text>
                  <Text>
                    <span
                      className={theme ? 'darkColorTheme' : 'lightColorTheme'}>
                      Capital:
                    </span>{' '}
                    <span
                      className={theme ? 'lightTextTheme' : 'lightColorTheme'}>
                      {country.capital}
                    </span>
                  </Text>
                </Wrapper>
              </Link>
            </Items>
          )
        })}
    </Container>
  )
}

export default CountryLists
