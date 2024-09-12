import { Setter } from '@/types/types';
import { ChangeEvent, FC } from 'react';
import './SearchBar.scss';

type SearchBarProps = {
    search: string;
    setSearch: Setter<string>;
};

/**
 * The search bar
 * 
 * @type {FC<SearchBarProps>}
 */
const SearchBar: FC<SearchBarProps> = ({ search, setSearch }) => {
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
    }

    return (
        <input
            type="text"
            placeholder="Search for a country..."
            className="search-bar"
            value={search}
            onChange={handleChange}
        />
    );
};

export default SearchBar;
