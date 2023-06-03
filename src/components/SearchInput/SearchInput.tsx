import { FC, FormEvent } from 'react';
import searchGrey from '../../assets/search-grey.png';
import searchWhite from '../../assets/search-white.png';
import { isLightTeme, useTheme } from '../../contexts/ThemeContext';
import './SearchInput.scss';

interface SearchInputProps {
    search: string;
    handleSearchChange: (e: FormEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<SearchInputProps> = ({ search, handleSearchChange }) => {
    const theme = useTheme();

    const style = {
        backgroundImage: `url(${isLightTeme(theme) ? searchGrey : searchWhite})`
    };

    return (
        <input
            type="search"
            placeholder="Search for a country..."
            className={`searchInput ${theme}`}
            style={style}
            value={search}
            onInput={handleSearchChange}
        />
    );
};

export default SearchInput;
