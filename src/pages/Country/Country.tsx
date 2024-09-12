import data from '@/assets/data.json';
import { useThemeContext } from '@/contexts/ThemeContext/ThemeContext';
import { Country as CountryType } from '@/types/country';
import arrowDark from '@imgs/arrow-dark.png';
import arrowLight from '@imgs/arrow-light.png';
import { FC, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Country.scss';

/**
 * The country page
 * 
 * @type {FC}
 */
const Country: FC = () => {
    const { code } = useParams();
    const { isLightTeme } = useThemeContext();

    const country = useMemo<CountryType | undefined>(() => {
        return data.find((country) => country.alpha3Code === code);
    }, [code]);

    return (
        <main className="country-page">
            <Link to="/" className="country-page__return">
                <img
                    src={isLightTeme ? arrowLight : arrowDark}
                    alt="Arrow"
                    className="country-page__return__img"
                />
                Back
            </Link>

            {country ? (
                <div className="country-page__country">
                    <img src={country.flag} alt="" className="country-page__country__flag" />

                    <div className="country-page__country__details">
                        <h1 className="country-page__country__details__name">{country.name}</h1>

                        <CountryInfos country={country} />

                        <CountryBorders country={country} />
                    </div>
                </div>
            ) : (
                <p className="country-page__not-found">Country "{code}" not found</p>
            )}
        </main>
    );
};

export default Country;

type CountryInfosProps = {
    country: CountryType;
};

/**
 * The informations of a country
 * 
 * @type {FC<CountryInfosProps>} 
 */
const CountryInfos: FC<CountryInfosProps> = ({ country }) => {
    return (
        <div className="country-infos">
            <aside className="country-infos__side">
                <p className="country-infos__info">
                    <span className="country-infos__info__title">Native Name: </span>
                    {country.nativeName}
                </p>
                <p className="country-infos__info">
                    <span className="country-infos__info__title">Population: </span>
                    {country.population.toLocaleString('en-EN')}
                </p>
                <p className="country-infos__info">
                    <span className="country-infos__info__title">Region: </span>
                    {country.region}
                </p>
                <p className="country-infos__info">
                    <span className="country-infos__info__title">Sub Region: </span>
                    {country.subregion}
                </p>
                {country.capital && (
                    <p className="country-infos__info">
                        <span className="country-infos__info__title">Capital: </span>
                        {country.capital}
                    </p>
                )}
            </aside>

            <aside className="country-infos__side">
                {country.topLevelDomain && country.topLevelDomain.length > 0 && (
                    <p className="country-infos__info">
                        <span className="country-infos__info__title">Top Level Domain: </span>
                        {country.topLevelDomain[0]}
                        {country.topLevelDomain.slice(1).map((domain) => `, ${domain}`)}
                    </p>
                )}
                {country.currencies && country.currencies.length > 0 && (
                    <p className="country-infos__info">
                        <span className="country-infos__info__title">
                            Currencie{country.currencies.length > 1 && 's'}:{' '}
                        </span>
                        {country.currencies[0].name}
                        {country.currencies.slice(1).map((currency) => `, ${currency.name}`)}
                    </p>
                )}
                {country.languages && country.languages.length > 0 && (
                    <p className="country-infos__info">
                        <span className="country-infos__info__title">
                            Language{country.languages.length > 1 && 's'}:{' '}
                        </span>
                        {country.languages[0].name}
                        {country.languages.slice(1).map((language) => `, ${language.name}`)}
                    </p>
                )}
            </aside>
        </div>
    );
};

type CountryBordersProps = {
    country: CountryType;
};

/**
 * The borders of a country
 * 
 * @type {FC<CountryBordersProps>}
 */
const CountryBorders: FC<CountryBordersProps> = ({ country }) => {
    if (country.borders && country.borders.length > 0) {
        return (
            <div className="country-borders">
                <h2 className="country-borders__title">
                    Border countr{country.borders.length > 1 ? 'ies' : 'y'}:
                </h2>

                <div className="country-borders__list">
                    {country.borders.map((border) => (
                        <Link to={`/country/${border}`} className="country-borders__list__link">
                            {data.find((country) => country.alpha3Code === border)?.name}
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
};
