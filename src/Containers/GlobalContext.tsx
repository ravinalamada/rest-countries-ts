import React, {useReducer, useEffect, createContext} from 'react';
import {Action, State} from './Types';

const endpoint = 'https://restcountries.eu/rest/v2/all';

const initialValue:State = {
  loading: true,
  theme: false,
  countries: []
}

export const Context = createContext(initialValue);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {...state, loading: false, theme: true, countries: action.payload}
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
    }}>
      {children}
    </Context.Provider>
  )
}
