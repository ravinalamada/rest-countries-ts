import { type } from 'node:os';
import React, {useContext} from 'react';
import  {useParams, Link}  from 'react-router-dom';
import {Context} from './GlobalContext';
import styled from 'styled-components';
import { Images } from './CountryLists';


type Props = {
  countryName: string;
}

const Container = styled.section `
  text-align: left;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 50px;

  @media (min-width: 800px){
      display: flex;
      flex-direction: row;
      gap: 40px;

     div:nth-of-type(1) {
       flex-basis: 50%;
     }
  }
`;
const Wrapper = styled.div ``;
const Title = styled.h2 ``;
const Text = styled.p `

  span {
    color: hsl(209, 23%, 22%);
    font-size: 14px;
    padding-left: 9px;
  }
`;
const Image = styled.img `
  width: 100%;
`;

const Frame = styled.div `
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 40px;

  div {
    display: flex;
    align-items: baseline;
    gap: 9px;

    span {
      color: hsl(209, 23%, 22%);
      font-size: 14px;
      padding-left: 9px;
      background-color: white;
      box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
      -webkit-box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
      border-radius: 5px;
      padding: 0.2rem 1rem;
    }
  }
`;
const SmallText = styled.p `
  background-color: white;
  box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
  border-radius: 2px;
  padding: 0.3rem 1.5rem;
  max-width: max-content;
  margin-left: 16px;

  a {
    color: hsl(209, 23%, 22%);
    font-size: 14px;
    text-decoration: none;
  }
`;

const CountryDetails: React.FC = () => {
  const {countryName}:Props = useParams();
  const {countries, loading} = useContext(Context);
  const findCountry = countries.find((country) => (country.name === countryName))
  const topLevelDomain = findCountry?.topLevelDomain[0];
  const languages = findCountry?.languages.map(lang => <span key={lang.name}>{lang.name}</span>);
  const currencies = findCountry?.currencies.map(cur => <span key={cur.name}>{cur.name}</span>)
  const borders = findCountry?.borders.map((border, i) => <span key={i}>{border}</span>)

  return (
    <>
      <SmallText><Link to="/"> ← Back</Link></SmallText>
      <Container>
        <Frame>
          <Image src={findCountry?.flag} />
        </Frame>
        <Wrapper>
          <Title>{findCountry?.name}</Title>
          <Text><b>Native name:</b><span>{findCountry?.nativeName}</span></Text>
          <Text><b>Population:</b><span>{findCountry?.population}</span></Text>
          <Text><b>Region:</b><span>{findCountry?.region}</span></Text>
          <Text><b>Sub Region:</b><span>{findCountry?.subregion}</span></Text>
          <Text><b>Capital:</b><span>{findCountry?.capital}</span></Text>
          <Text><b>Top level domain:</b><span> {topLevelDomain}</span></Text>
          <Text><b>Currencies:</b><span>{currencies}</span></Text>
          <Text><b>Languages:</b> <span>{languages}</span></Text>
          <Frame>
            <b>Borders Countries:</b><div>{borders}</div>
          </Frame>
        </Wrapper>
      </Container>

    </>
  )
}

export default CountryDetails;
