import React, { memo } from 'react';
import './CountryCard.css';

const CountryCard = memo(({ data, currentTheme, cardClick }) => {
    return (
        <div
            className="countryCard"
            style={{ backgroundColor: currentTheme.elements }}
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
