import React, { memo } from 'react';
import { useTheme } from '../../../../contexts/ThemeContext';
import './CountryCard.css';

const CountryCard = memo(({ data, cardClick }) => {
    const theme = useTheme();
    return (
        <div
            className="countryCard"
            style={{ backgroundColor: theme.elements }}
            onClick={() => cardClick(data.alpha3Code)}
        >
            <img src={data.flag} alt={data.name.toLowerCase()} />
            <div className="bottom">
                <span className="name">{data.name}</span>
                <div className="infos">
                    <p className="info">
                        <span className="title">Population: </span>
                        {data.population.toLocaleString('en-EN')}
                    </p>
                    <p className="info">
                        <span className="title">Region: </span>
                        {data.region}
                    </p>
                    <p className="info">
                        <span className="title">Capital: </span>
                        {data.capital}
                    </p>
                </div>
            </div>
        </div>
    );
});

export default CountryCard;
