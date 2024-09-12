export type Currencie = {
    code: string;
    name: string;
    symbol: string;
};

export type Language = { iso639_1?: string; iso639_2: string; name: string; nativeName?: string }

export type Country = {
    name: string;
    topLevelDomain?: string[];
    alpha2Code: string;
    alpha3Code: string;
    capital?: string;
    region: string;
    subregion: string;
    population: number;
    currencies?: Currencie[];
    languages: Language[];
    flag: string;
    borders?: string[];
    nativeName: string;
};
