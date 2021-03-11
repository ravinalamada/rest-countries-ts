import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Context} from './GlobalContext';
import styled from 'styled-components';

export const Container = styled.ul `
  padding-left: 16px;
  padding-right:16px;
  text-align:left;

  @media(min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr );
    column-gap: 30px;
  }
`
export const Items = styled.li `
  list-style: none;
  border-radius: 9px;
  padding-bottom: 16px;
  margin-bottom: 32px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);

  a {
    text-decoration: none;
  }
`
export const Images = styled.img `
  width: 100%;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
`
export const Text = styled.p `
`

export const Wrapper = styled.div `
  padding-left: 16px;
`;


const CountryLists: React.FC = () => {
  const {countries, countryName, theme} = useContext(Context);
  return (
    <Container>
      { countries
          .filter(country => country.name.toLowerCase().includes(countryName.toLowerCase()))
          .map((country) => {
          return (
          <Items className={theme ? 'elementDarkTheme' : 'elementLightTheme'} key={country.name}>
            <Link to={`/countryList/${country.name}`}>
              <Images src={country.flag} alt="flag" />
              <Wrapper>
                <Text><b className={theme ? 'lightColorTheme' : 'darkColorTheme'}>{country.name}</b></Text>
                <Text><b className={theme ? 'lightColorTheme' : 'darkColorTheme'}>Population:</b> <span className={theme ? 'lightColorTheme' : 'lightTextTheme'}>{country.population}</span></Text>
                <Text><b className={theme ? 'lightColorTheme' : 'darkColorTheme'}>Region:</b> <span className={theme ? 'lightColorTheme' : 'lightTextTheme'}>{country.region}</span></Text>
                <Text><b className={theme ? 'lightColorTheme' : 'darkColorTheme'}>Capital:</b> <span className={theme ? 'lightColorTheme' : 'lightTextTheme'}>{country.capital}</span></Text>
              </Wrapper>
            </Link>
          </Items>
        )})
      }
    </Container>
  )
}

export default CountryLists;
