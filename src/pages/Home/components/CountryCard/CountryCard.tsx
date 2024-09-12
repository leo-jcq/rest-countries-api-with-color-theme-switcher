import { Country } from '@/types/country';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import './CountryCard.scss';

type CountryCardProps = {
    country: Country;
};

const CountryCard: FC<CountryCardProps> = ({ country }) => {
    return (
        <Link to={`/country/${country.alpha3Code}`} className="country-card">
            <img src={country.flag} alt={country.name} className="country-card__flag" />

            <div className="country-card__content">
                <p className="country-card__content__name">{country.name}</p>
                <div className="country-card__content__infos">
                    <p className="country-card__content__infos__info">
                        <span className="country-card__content__infos__info__title">
                            Population :{' '}
                        </span>
                        {country.population.toLocaleString('en-EN')}
                    </p>
                    <p className="country-card__content__infos__info">
                        <span className="country-card__content__infos__info__title">Region : </span>
                        {country.region}
                    </p>
                    {country.capital && (
                        <p className="country-card__content__infos__info">
                            <span className="country-card__content__infos__info__title">
                                Capital :{' '}
                            </span>
                            {country.capital}
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default CountryCard;
