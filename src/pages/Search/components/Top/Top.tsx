import { FC, FormEvent, MouseEvent } from 'react';
import Options from '../../../../components/Options/Options';
import SearchInput from '../../../../components/SearchInput/SearchInput';
import './Top.scss';

interface TopProps {
    countries: Country[];
    search: string;
    handleSearchChange: (e: FormEvent<HTMLInputElement>) => void;
    sort: string;
    handleSortChange: (e: MouseEvent<HTMLLIElement>) => void;
}

const Top: FC<TopProps> = ({ countries, search, handleSearchChange, sort, handleSortChange }) => {
    return (
        <div className="top">
            <SearchInput search={search} handleSearchChange={handleSearchChange} />
            <Options countries={countries} sort={sort} handleSortChange={handleSortChange} />
        </div>
    );
};

export default Top;
