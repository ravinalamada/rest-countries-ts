import React, { useContext, useState } from 'react'
import { Context } from './GlobalContext'
import styled from 'styled-components'

const regionArr = [
  { region: 'Americas', id: '1' },
  { region: 'Asia', id: '2' },
  { region: 'Europe', id: '3' },
  { region: 'Africa', id: '4' },
  { region: 'Oceania', id: '5' },
]

const Form = styled.form`
  display: grid;
  grid-template-columns: 48rem 20rem;
  justify-content: space-between;
  align-items: center;
  max-width: 128rem;
  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 9.5rem;
  padding-right: 8.5rem;

  @media (max-width: 740px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    row-gap: 4rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;

    fieldset:nth-of-type(2) {
      max-width: 20rem;
    }
  }

  .dropdown-container {
    position: relative;
    margin-top: 0;
    text-align: left;
    max-width: 128rem;
    margin-right: auto;
    border-radius: 0.5rem;
  }

  .dropdown {
    font-size: 1.2rem;
    padding: 1.4rem 8.2rem 1.4rem 3.2rem;
    cursor: pointer;
    text-align: left;
    line-height: 2rem;
    background-repeat: no-repeat;
    background-size: 10px;
    font-weight: 400;
    background-position: right 1.8rem center;
    box-shadow: 0 0.2rem 0.9rem 0 rgb(0 0 0 / 5%);
    --transition: 300ms ease-in-out;
    transition: var(--transition) background, var(--transition) color;

    @media (min-width: 700px) {
      font-size: 1.4rem;
      padding: 1.4rem 7.2rem 1.4rem 3.2rem;
    }
  }

  .open-panel {
    text-align: left;
    position: absolute;
    top: 6rem;
    left: 0;
    border-radius: 0.5rem;
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;
    padding-left: 3rem;
    width: 16rem;
    box-shadow: 0 0.2rem 0.9rem 0 rgb(0 0 0 / 5%);
    --transition: 300ms ease-in-out;
    transition: var(--transition) background-color;
  }

  .close-panel {
    display: none;
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
  }
`
const List = styled.ul`
  margin: 0;
  padding: 0;

  li:not(last-0f-type) {
    margin-bottom: 0.8rem;
  }

  li {
    list-style: none;
    cursor: pointer;
    font-size: 1.2rem;
    line-height: 1.6rem;
    font-weight: 400;

    @media (min-width: 800px) {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }
`

const SearchForm: React.FC = () => {
  const {
    theme,
    countryName,
    countryRegion,
    selectCountryByRegion,
    searchCountryByName,
  } = useContext(Context)
  const [isOpen, setIsOpen] = useState(false)

  console.log(isOpen)

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

      <div
        className={`dropdown-container ${
          theme ? 'elementLightTheme' : 'elementDarkTheme'
        }`}>
        <div
          className={`dropdown ${
            theme ? 'darkDropdownIcons' : 'whiteDropdownIcons'
          }`}
          onClick={() => setIsOpen(true)}>
          {countryRegion ? countryRegion : 'Filter by region'}
        </div>
        <div
          className={`dropdown-menu 
          ${theme ? 'elementLightTheme' : 'elementDarkTheme'}
          ${isOpen ? 'open-panel' : 'close-panel'}`}>
          <List className='menu' onClick={() => setIsOpen(false)}>
            {regionArr.map((item) => (
              <li
                className={`region ${
                  theme ? 'darkColorTheme' : 'lightColorTheme'
                }`}
                key={item.id}
                onClick={() => selectCountryByRegion(item.region)}>
                {item.region}
              </li>
            ))}
          </List>
        </div>
      </div>
    </Form>
  )
}

export default SearchForm
