import React from 'react';
import './CountryPage.css';
import arrowDark from '../../../assets/imgs/arrow-dark.png';
import arrowWhite from '../../../assets/imgs/arrow-white.png';

const CountryPage = ({ currentTheme, theme, data, countryClick, returnClick }) => {
    const current = data[0];
    const borders = data[1];

    console.log(borders);

    return (
        <div className="countryPage">
            <div className="top">
                <button
                    style={{ backgroundColor: currentTheme.elements, color: currentTheme.text }}
                    onClick={returnClick}
                >
                    <img
                        src={
                            currentTheme.elements === theme.light.elements ? arrowDark : arrowWhite
                        }
                        alt=""
                    />
                    <span>Back</span>
                </button>
            </div>

            <div className="country">
                <img src={current.flag} alt={current.name.toLowerCase()} className="flag" />
                <div className="details">
                    <span className="name">{current.name}</span>

                    <div className="infos">
                        <div className="left">
                            <p className="info">
                                <span className="title">Native Name: </span>
                                {current.nativeName}
                            </p>
                            <p className="info">
                                <span className="title">Population: </span>
                                {current.population.toLocaleString('en-EN')}
                            </p>
                            <p className="info">
                                <span className="title">Region: </span>
                                {current.region}
                            </p>
                            <p className="info">
                                <span className="title">Sub Region: </span>
                                {current.subregion}
                            </p>
                            {current.capital !== null && (
                                <p className="info">
                                    <span className="title">Capital: </span>
                                    {current.capital}
                                </p>
                            )}
                        </div>
                        <div className="right">
                            {current.topLevelDomain !== null &&
                                current.topLevelDomain.length > 0 && (
                                    <p className="info">
                                        <span className="title">Top Level Domain: </span>

                                        {current.topLevelDomain[0]}
                                        {current.topLevelDomain
                                            .slice(1)
                                            .map((domain) => ', ' + domain)}
                                    </p>
                                )}
                            {current.currencies !== null && current.currencies.length > 0 && (
                                <p className="info">
                                    <span className="title">Currencies: </span>

                                    {current.currencies[0].name}
                                    {current.currencies.slice(1).map((name) => ', ' + name)}
                                </p>
                            )}
                            {current.languages !== null && current.languages.length > 0 && (
                                <p className="info">
                                    <span className="title">Languages: </span>

                                    {current.languages[0].name}
                                    {current.languages.slice(1).map((lang) => ', ' + lang.name)}
                                </p>
                            )}
                        </div>
                    </div>
                    {borders.length > 0 && (
                        <div className="borders">
                            <span className="title">Border Countries:&nbsp;</span>
                            {borders.map((border) => (
                                <button
                                    key={border.name.toLowerCase()}
                                    style={{
                                        backgroundColor: currentTheme.elements,
                                        color: currentTheme.text
                                    }}
                                    onClick={() => countryClick(border.alpha3Code)}
                                >
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

export default CountryPage;
