import React, {useContext} from 'react';
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
  background-color: white;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`
export const Images = styled.img `
  width: 100%;
  border-radius: 9px;
`
export const Text = styled.p `

`

export const Wrapper = styled.div ``;


const CountryLists: React.FC = () => {
  const {countries} = useContext(Context);
  console.log(countries);
  return (
    <Container>
      {
        countries.map((country:Props) => {
          console.log(country);
          return (
          <Items key={country.name}>
            <Images src={country.flag} alt="flag" />
            <Wrapper>
              <Text><b>{country.name}</b></Text>
              <Text><b>Population:</b> {country.population}</Text>
              <Text><b>Region:</b> {country.region}</Text>
              <Text><b>Capital:</b> {country.capital}</Text>
            </Wrapper>
          </Items>
        )})
      }
    </Container>
  )
}

export default CountryLists;
