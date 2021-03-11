import React, {useContext, useState} from 'react';
import {Context} from './GlobalContext';
import styled from 'styled-components';

type Props = {
  name: string;
  region: string,
  searchCountry: string;
  preventDefault: () => {};
}

const Form = styled.form `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

const Fieldset = styled.fieldset `
  border-color: transparent;

  select,
  input {
    border-color: transparent;
    border-radius: 9px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 16px;
    padding-right: 16px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  }

   input {
    width: 100%;
   }
`;

const SearchForm: React.FC = () => {
  const {countries, theme, countryName, countryRegion, selectCountryByRegion ,searchCountryByName} = useContext(Context);

  return (
    <Form>
      <Fieldset>
        <input className={theme ? 'elementDarkTheme' : 'elementLightTheme'}
               type="text"
               value={countryName}
               onChange={searchCountryByName}
               placeholder="Search for a country..."/>
      </Fieldset>
      <Fieldset>
        <select
              className={theme ? 'elementDarkTheme' : 'elementLightTheme'}
              value={countryRegion}
              onChange={selectCountryByRegion}>
          {
            countries.map((country, i) => (
              <option key={i + i}>{country.region}</option>
            ))
          }
        </select>
      </Fieldset>
    </Form>
  )
}

export default SearchForm;
