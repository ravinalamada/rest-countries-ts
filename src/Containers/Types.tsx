import { type } from "node:os"

export type State = {
  loading: boolean;
  theme: boolean;
  countries: [];
}

export type Action =
| { type: 'FETCH_DATA', payload: [] }

export type CountryType = {
  name: string,
  borders: string[],
  capital: string,
  region: string,
  currencies: string,
  languages: string[],
  nativeName: string,
  population: number
  flag: string,
  subregion: string,
  topLevelDomain: string,
}
