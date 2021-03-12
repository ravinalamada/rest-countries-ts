import { type } from "node:os";
import React from "react";

type currencies = {
  name: string
}

type languages = {
  name: string;
}

type borders = {
  name: string;
}

export type CountryType = {
  name: string,
  borders: borders[],
  capital: string,
  region: string,
  currencies: currencies[],
  languages: languages[],
  nativeName: string,
  population: number,
  flag: string,
  subregion: string,
  topLevelDomain: string,
}

export type State = {
  loading: boolean;
  theme: boolean;
  countries: CountryType[];
  countryName: string;
  countryRegion: string;
  searchCountryByName: (e: React.ChangeEvent<HTMLInputElement>) => void
  selectCountryByRegion: (e: React.ChangeEvent<HTMLSelectElement>) => void
  toogleTheme: () => void;
}

export type Action =
| { type: 'FETCH_DATA', payload: CountryType[] }
| {type: 'SEARCH_COUNTRY_BY_NAME', payload: string }
| {type: 'SELECT_COUNTRY_BY_REGION', payload: string}
| {type: 'TOOGLE_THEME'}

