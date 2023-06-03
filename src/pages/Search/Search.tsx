import { FC, FormEvent, MouseEvent, useMemo, useState } from 'react';
import './Search.scss';
import Results from './components/Results/Results';
import Top from './components/Top/Top';

interface SearchProps {
    countries: Country[];
    setCurrentCountry: (currentCountry: string | undefined) => void;
}

const Search: FC<SearchProps> = ({ countries, setCurrentCountry }) => {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');

    const handleSearchChange = (e: FormEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
    };

    const handleSortChange = (e: MouseEvent<HTMLLIElement>) => {
        setSort(e.currentTarget.dataset.value ?? '');
    };

    const sortedCountries = useMemo(
        () =>
            countries.filter(
                (country) =>
                    country.name.toLowerCase().includes(search.toLowerCase()) &&
                    (sort === '' || country.region == sort)
            ),
        [countries, search, sort]
    );

    return (
        <div className="search">
            <Top
                countries={countries}
                search={search}
                handleSearchChange={handleSearchChange}
                sort={sort}
                handleSortChange={handleSortChange}
            />
            <Results countries={sortedCountries} setCurrentCountry={setCurrentCountry} />
        </div>
    );
};

export default Search;
