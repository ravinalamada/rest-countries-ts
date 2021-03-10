import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Context} from './GlobalContext';
import styled from 'styled-components';

type Props = {
  name: string,
  region: string,
  capital: string,
  population: number,
  flag: string,
}

export const Container = styled.ul `
  padding-left: 16px;
  padding-right:16px;
  text-align:left;
`
export const Items = styled.li `
  list-style: none;
  border-radius: 9px;
  padding-bottom: 16px;
  margin-bottom: 32px;
  background-color: white;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);

  a {
    text-decoration: none;
    color: hsl(207, 26%, 17%);
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
  const {countries, countryName} = useContext(Context);
  return (
    <Container>
      { countries
          .filter(country => country.name.toLowerCase().includes(countryName.toLowerCase()))
          .map((country) => {
          return (
          <Items key={country.name}>
            <Link to={`/countryList/${country.name}`}>
              <Images src={country.flag} alt="flag" />
              <Wrapper>
                <Text><b>{country.name}</b></Text>
                <Text><b>Population:</b> {country.population}</Text>
                <Text><b>Region:</b> {country.region}</Text>
                <Text><b>Capital:</b> {country.capital}</Text>
              </Wrapper>
            </Link>
          </Items>
        )})
      }
    </Container>
  )
}

export default CountryLists;
