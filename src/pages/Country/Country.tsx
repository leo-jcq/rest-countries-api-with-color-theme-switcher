import { FC, useMemo } from 'react';
import arrowDark from '../../assets/arrow-dark.png';
import arrowWhite from '../../assets/arrow-white.png';
import { isLightTeme, useTheme } from '../../contexts/ThemeContext';
import './Country.scss';

interface CountryProps {
    countries: Country[];
    code: string;
    setCurrentCountry: (currentCountry: string | undefined) => void;
}

const Country: FC<CountryProps> = ({ code, countries, setCurrentCountry }) => {
    const theme = useTheme();

    const country = useMemo(
        () =>
            countries.filter(
                (country) => country.alpha2Code === code || country.alpha3Code === code
            )[0],
        [countries, code]
    );

    const borders = useMemo(() => {
        if (country.borders && country.borders.length > 0) {
            console.log('ok');
            return countries.filter(
                (countryItem) =>
                    country.borders?.includes(countryItem.alpha2Code) ||
                    country.borders?.includes(countryItem.alpha3Code)
            );
        }

        return null;
    }, [country, countries]);

    return (
        <div className="contryPage">
            <div className="top">
                <button onClick={() => setCurrentCountry(undefined)}>
                    <img src={isLightTeme(theme) ? arrowDark : arrowWhite} alt="" />
                    Back
                </button>
            </div>

            <div className="country">
                <img src={country.flag} alt={country.name.toLowerCase()} className="flag" />
                <div className="details">
                    <span className="name">{country.name}</span>

                    <div className="infos">
                        <div className="left">
                            <p className="info">
                                <span className="title">Native Name: </span>
                                {country.nativeName}
                            </p>
                            <p className="info">
                                <span className="title">Population: </span>
                                {country.population.toLocaleString('en-EN')}
                            </p>
                            <p className="info">
                                <span className="title">Region: </span>
                                {country.region}
                            </p>
                            <p className="info">
                                <span className="title">Sub Region: </span>
                                {country.subregion}
                            </p>
                            {country.capital && country.capital != '' && (
                                <p className="info">
                                    <span className="title">Capital: </span>
                                    {country.capital}
                                </p>
                            )}
                        </div>
                        <div className="right">
                            {country.topLevelDomain && country.topLevelDomain.length > 0 && (
                                <p className="info">
                                    <span className="title">Top Level Domain: </span>

                                    {country.topLevelDomain[0]}
                                    {country.topLevelDomain.slice(1).map((domain) => ', ' + domain)}
                                </p>
                            )}
                            {country.currencies != null && country.currencies.length > 0 && (
                                <p className="info">
                                    <span className="title">Currencies: </span>

                                    {country.currencies[0].name}
                                    {country.currencies.slice(1).map((name) => ', ' + name)}
                                </p>
                            )}
                            {country.languages != null && country.languages.length > 0 && (
                                <p className="info">
                                    <span className="title">Languages: </span>

                                    {country.languages[0].name}
                                    {country.languages.slice(1).map((lang) => ', ' + lang.name)}
                                </p>
                            )}
                        </div>
                    </div>
                    {borders && (
                        <div className="borders">
                            <span className="title">Border Countries:&nbsp;</span>
                            {borders.map((border) => (
                                <button onClick={() => setCurrentCountry(border.alpha3Code)}>
                                    {border.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Country;
