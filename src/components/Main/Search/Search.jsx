import React, { useState, useCallback, memo } from 'react';
import CountryCard from './CountryCard/CountryCard';
import './Search.css';
import searchGrey from '../../../assets/imgs/search-grey.png';
import searchWhite from '../../../assets/imgs/search-white.png';

const Search = memo(({ currentTheme, theme, countries, cardClick }) => {
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
                <SearchInput
                    currentTheme={currentTheme}
                    theme={theme}
                    search={search}
                    handleSearchChange={handleSearchChange}
                />
                <Sort
                    currentTheme={currentTheme}
                    regions={regions}
                    sort={sort}
                    handleSortChange={handleSortChange}
                />
            </div>

            <div className="results">
                {sortedCountries.map((c) => (
                    <CountryCard
                        key={c.name}
                        data={c}
                        currentTheme={currentTheme}
                        theme={theme}
                        cardClick={cardClick}
                    />
                ))}
            </div>
        </div>
    );
});
export default Search;

const SearchInput = memo(({ currentTheme, theme, search, handleSearchChange }) => {
    const searchImage = useCallback(
        currentTheme.elements === theme.light.elements ? searchGrey : searchWhite,
        [currentTheme]
    );

    return (
        <input
            type="search"
            placeholder="Search for a country..."
            className={currentTheme.elements === theme.light.elements ? 'light' : 'dark'}
            style={{
                backgroundImage: `url(${searchImage})`,
                backgroundColor: currentTheme.elements,
                color: currentTheme.text
            }}
            value={search}
            onInput={handleSearchChange}
        />
    );
});

const Sort = memo(({ currentTheme, regions, sort, handleSortChange }) => {
    const [show, setShow] = useState(false);

    return (
        <div className={show ? 'sort open' : 'sort'}>
            <div
                className="current"
                onClick={() => setShow(!show)}
                style={{ backgroundColor: currentTheme.elements, color: currentTheme.text }}
            >
                <span>{sort === '' ? 'Filter by Region' : sort}</span>
            </div>
            {show && (
                <div
                    className="list"
                    style={{ backgroundColor: currentTheme.elements, color: currentTheme.text }}
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
