import React, { useContext } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Header from './Containers/Header'
import SearchForm from './Containers/SearchForm'
import CountryLists from './Containers/CountryLists'
import CountryDetails from './Containers/CountryDetails'
import { Context } from './Containers/GlobalContext'
import styled from 'styled-components'

function App() {
  const { theme } = useContext(Context)
  return (
    <div className={theme ? 'lightTheme' : 'darkTheme'}>
      <Header />
      <main>
        <Switch>
          <Route path='/countryList/:countryName'>
            <CountryDetails />
          </Route>
          <Route path='/'>
            <SearchForm />
            <CountryLists />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
