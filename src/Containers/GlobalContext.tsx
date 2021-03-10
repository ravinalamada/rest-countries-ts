import React, {useReducer, useEffect, createContext} from 'react';
import {Action, State} from './Types';

const endpoint = 'https://restcountries.eu/rest/v2/all';

const initialValue:State = {
  loading: true,
  theme: false,
  countries: [],
  countryName: '',
  countryRegion: '',
  toogleTheme: () => {},
  selectCountryByRegion: () => {},
  searchCountryByName: () => {}
}

export const Context = createContext(initialValue);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {...state, loading: false, theme: true, countries: action.payload}
    case 'SEARCH_COUNTRY_BY_NAME':
      return {...state, loading: false, theme: true, countryName: action.payload}
    case 'SELECT_COUNTRY_BY_REGION':
      return {...state, loading: false, theme: true, countryRegion: action.payload}
    case 'TOOGLE_THEME':
      return  {...state, loading: false, theme: !state.theme}
      default:
      return state;
  }
}


export const GlobalContext: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const fetchData = async() => {
    const countryData = await fetch(endpoint);
    const countryRes = await countryData.json();
    dispatch({type:'FETCH_DATA', payload: countryRes})
  }

  useEffect(() => {
      fetchData()
  }, [])

  return (
    <Context.Provider value={{
      countries: state.countries,
      loading: state.loading,
      theme: state.theme,
      countryName: state.countryName,
      countryRegion: state.countryRegion,
      searchCountryByName: (e) => dispatch({type: 'SEARCH_COUNTRY_BY_NAME', payload: e.target.value}),
      selectCountryByRegion: (e) => dispatch({type:'SELECT_COUNTRY_BY_REGION', payload: e.target.value}),
      toogleTheme: () => dispatch({type: 'TOOGLE_THEME'})
   }}>
      {children}
    </Context.Provider>
  )
}
