import { FC, MouseEvent, useMemo, useState } from 'react';
import './Options.scss';

interface OptionsProps {
    countries: Country[];
    sort: string;
    handleSortChange: (e: MouseEvent<HTMLLIElement>) => void;
}

const Options: FC<OptionsProps> = ({ countries, sort, handleSortChange }) => {
    const [show, setShow] = useState(false);

    const regions = useMemo(
        () =>
            countries
                .map((country) => country.region)
                .filter((region, index, self) => self.indexOf(region) === index),
        [countries]
    );

    const switchDisplay = () => {
        setShow(!show);
    };

    return (
        <div className={`options${show ? ' open' : ''}`}>
            <div className="current" onClick={switchDisplay}>
                <span>{sort === '' ? 'Filter by Region' : sort}</span>
            </div>
            {show && (
                <ul className="list">
                    {sort !== '' && (
                        <li data-value="" onClick={handleSortChange}>
                            Reset
                        </li>
                    )}
                    {regions.map((region) => (
                        <li
                            key={region}
                            className={`option ${sort === region ? 'active' : ''}`}
                            data-value={region}
                            onClick={handleSortChange}>
                            {region}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Options;
