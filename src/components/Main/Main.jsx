import React, { memo, useLayoutEffect, useState } from 'react';
import Search from './Search/Search';
import CountryPage from './CountryPage/CountryPage';
import { useTheme } from '../../contexts/ThemeContext';
import './Main.css';

const Main = memo(() => {
    const theme = useTheme();
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
     * @param {object} countryCode
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
        <div className="main" style={{ color: theme.text, backgroundColor: theme.bg }}>
            {printedCountry.length === 0 ? (
                <Search countries={countries} cardClick={handleCountryClick} />
            ) : (
                <CountryPage
                    data={printedCountry}
                    countryClick={handleCountryClick}
                    returnClick={handleReturnClick}
                />
            )}
        </div>
    );
});

export default Main;
