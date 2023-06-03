import { FC } from 'react';
import './CountryCard.scss';

interface CountryCardProps {
    country: Country;
    setCurrentCountry: (currentCountry: string | undefined) => void;
}

const CountryCard: FC<CountryCardProps> = ({ country, setCurrentCountry }) => {
    const handleClick = () => {
        setCurrentCountry(country.alpha3Code);
    };

    return (
        <div className="countryCard" onClick={handleClick}>
            <img src={country.flag} alt={country.name.toLowerCase()} />
            <div className="bottom">
                <span className="name">{country.name}</span>
                <div className="infos">
                    <p className="info">
                        <span className="title">Population: </span>
                        {country.population.toLocaleString('en-EN')}
                    </p>
                    <p className="info">
                        <span className="title">Region: </span>
                        {country.region}
                    </p>
                    <p className="info">
                        <span className="title">Capital: </span>
                        {country.capital}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;
