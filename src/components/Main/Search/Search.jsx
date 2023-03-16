import React, { useState, useCallback, memo } from 'react';
import CountryCard from './CountryCard/CountryCard';
import { useTheme, isLightTeme } from '../../../contexts/ThemeContext';
import './Search.css';
import searchGrey from '../../../assets/imgs/search-grey.png';
import searchWhite from '../../../assets/imgs/search-white.png';

const Search = memo(({ countries, cardClick }) => {
    const theme = useTheme();
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');

    // Sort countries by name
    const sortedCountries = useCallback(
        countries.filter(
            (country) =>
                country.name.toLowerCase().includes(search.toLowerCase()) &&
                (sort === '' || country.region === sort)
        ),
        [countries, search, sort]
    );

    const regions = useCallback(
        countries
            .map((country) => country.region)
            .filter((region, index, self) => self.indexOf(region) === index),
        [countries]
    );

    /**
     * Handle search change
     *
     * @param {Event} e
     */
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    /**
     * Handle sort change
     *
     * @param {Event} e
     */
    const handleSortChange = (e) => {
        setSort(e.target.dataset.value);
    };

    return (
        <div className="search">
            <div className="top">
                <SearchInput search={search} handleSearchChange={handleSearchChange} />
                <Sort regions={regions} sort={sort} handleSortChange={handleSortChange} />
            </div>

            <div className="results">
                {sortedCountries.map((c) => (
                    <CountryCard key={c.name} data={c} cardClick={cardClick} />
                ))}
            </div>
        </div>
    );
});
export default Search;

const SearchInput = memo(({ search, handleSearchChange }) => {
    const theme = useTheme();

    const searchImage = useCallback(isLightTeme(theme) ? searchGrey : searchWhite, [theme]);

    return (
        <input
            type="search"
            placeholder="Search for a country..."
            className={theme.name}
            style={{
                backgroundImage: `url(${searchImage})`,
                backgroundColor: theme.elements,
                color: theme.text
            }}
            value={search}
            onInput={handleSearchChange}
        />
    );
});

const Sort = memo(({ regions, sort, handleSortChange }) => {
    const theme = useTheme();
    const [show, setShow] = useState(false);

    const switchDisplay = () => {
        setShow(!show);
    };

    return (
        <div className={show ? 'sort open' : 'sort'}>
            <div
                className="current"
                onClick={switchDisplay}
                style={{ backgroundColor: theme.elements, color: theme.text }}
            >
                <span>{sort === '' ? 'Filter by Region' : sort}</span>
            </div>
            {show && (
                <div
                    className="list"
                    style={{ backgroundColor: theme.elements, color: theme.text }}
                >
                    <ul>
                        {sort !== '' && (
                            <li data-value="" onClick={handleSortChange}>
                                Reset
                            </li>
                        )}
                        {regions.map((region) => (
                            <li
                                key={region}
                                className={sort == region ? 'active' : ''}
                                data-value={region}
                                onClick={handleSortChange}
                            >
                                {region}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
});
