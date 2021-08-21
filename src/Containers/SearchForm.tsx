import React, { useContext, useState } from 'react'
import { Context } from './GlobalContext'
import styled from 'styled-components'

type Props = {}

const regionArr = [
  { region: 'Americas', id: '1' },
  { region: 'Asia', id: '2' },
  { region: 'Europe', id: '3' },
  { region: 'Africa', id: '4' },
  { region: 'Oceania', id: '5' },
]

const Form = styled.form`
  display: grid;
  grid-template-columns: 34rem 20rem;
  justify-content: space-between;
  align-items: center;
  max-width: 128rem;
  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.6rem;
  padding-right: 1.6rem;

  @media (max-width: 740px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    row-gap: 4rem;

    fieldset:nth-of-type(2) {
      max-width: 20rem;
    }
  }
`

const Fieldset = styled.fieldset`
  border-color: transparent;
  border-radius: 0.5rem;
  padding: 1.4rem 3.2rem;
  box-shadow: 0 0.2rem 0.9rem 0 rgb(0 0 0 / 5%);

  select,
  input {
    border: none;
    outline: none;
    width: 100%;
    padding: 0;
    padding-left: 4.2rem;
    background-color: transparent;
  }

  input {
    opacity: 0.77;
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 400;
    font-family: 'Nunito Sans', sans-serif;

    @media (max-width: 740px) {
      font-size: 1.2rem;
    }
  }

  select {
    cursor: pointer;
    text-align: left;
    font-size: 1.2rem;
    line-height: 2rem;
    padding-left: 0;
    font-weight: 400;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`

const SearchForm: React.FC = () => {
  const {
    countries,
    theme,
    countryName,
    countryRegion,
    selectCountryByRegion,
    searchCountryByName,
  } = useContext(Context)

  return (
    <Form>
      <Fieldset className={theme ? 'elementLightTheme' : 'elementDarkTheme'}>
        <input
          className={theme ? 'lightInput' : 'darkInput'}
          type='text'
          value={countryName}
          onChange={searchCountryByName}
          placeholder='Search for a country...'
        />
      </Fieldset>
      <Fieldset className={theme ? 'elementLightTheme' : 'elementDarkTheme'}>
        <select
          value={countryRegion}
          onChange={selectCountryByRegion}
          className={theme ? 'elementLightTheme' : 'elementDarkTheme'}>
          {regionArr.map((item) => (
            <option
              className={theme ? 'darkColorTheme' : 'lightColorTheme'}
              key={item.id}
              value={item.region}>
              {item.region}
            </option>
          ))}
        </select>
      </Fieldset>
    </Form>
  )
}

export default SearchForm
