import React, { memo, useLayoutEffect, useState } from 'react';
import Search from './Search/Search';
import CountryPage from './CountryPage/CountryPage';
import './Main.css';

const Main = memo(({ currentTheme, theme }) => {
    const [countries, setCountries] = useState([]);
    const [printedCountry, setPrintedCountry] = useState([]);

    // Fetch data from JSON file
    useLayoutEffect(() => {
        (async () => {
            const response = await fetch('./data.json');
            const responseData = await response.json();
            setCountries(responseData);
        })();
    }, []);

    /**
     * Handle card click
     *
     * @param {Object} countryCode
     */
    const handleCountryClick = (countryCode) => {
        // search for the country
        const current = countries.filter(
            (country) => country.alpha2Code === countryCode || country.alpha3Code === countryCode
        )[0];
        // search for the borders
        let borders = [];
        if (current.borders != null && current.borders.length > 0) {
            current.borders.forEach((border) => {
                borders = borders.concat(
                    countries.filter(
                        (country) => country.alpha2Code === border || country.alpha3Code === border
                    )
                );
            });
        }

        setPrintedCountry([current, borders]);
    };

    /**
     * Handle return click
     *
     */
    const handleReturnClick = () => {
        setPrintedCountry([]);
    };

    return (
        <div
            className="main"
            style={{ color: currentTheme.text, backgroundColor: currentTheme.bg }}
        >
            {printedCountry.length === 0 ? (
                <Search
                    currentTheme={currentTheme}
                    theme={theme}
                    countries={countries}
                    cardClick={handleCountryClick}
                />
            ) : (
                <CountryPage
                    currentTheme={currentTheme}
                    theme={theme}
                    data={printedCountry}
                    countryClick={handleCountryClick}
                    returnClick={handleReturnClick}
                />
            )}
        </div>
    );
});

export default Main;
