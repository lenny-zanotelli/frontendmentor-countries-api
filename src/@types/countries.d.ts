export interface Country {
  name: Name;
  cca3: string;
  status: string;
  unMember: boolean;
  currencies: {
    [currencyCode: string] : {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  tld: string;
  languages: {
    [languageCode: string] : {
      name: string;
    }
  };
  translations: { [key: string]: Translation };
  borders: string[];
  population: number;
  timezones: string[];
  continents: string[];
  flags: Flags;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Name {
  [x: string]: any;
  common: string;
  official: string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}
