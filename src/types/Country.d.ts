interface Currencie {
    code: string;
    name: string;
    symbol: string;
}

interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

interface Country {
    name: string;
    topLevelDomain: string[] | undefined;
    alpha2Code: string;
    alpha3Code: string;
    capital: string | undefined;
    region: string;
    subregion: string;
    population: number;
    currencies: Currencie[] | undefined;
    languages: Language[];
    flag: string;
    borders: string[] | undefined;
    nativeName: string;
}
