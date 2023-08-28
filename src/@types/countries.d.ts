export interface ICountryResponseApi {
  items: Icountry[]

}

export interface Icountry {
  name: string,
  capital: string,
  population: number,
  region: string,
  flag: string,
}
