import data from '@/assets/data.json';
import { Setter } from '@/types/types';
import { FC, MouseEvent as ReactMouseEvent, useEffect, useMemo, useRef, useState } from 'react';
import './Filters.scss';

type FiltersProps = {
    filter: string;
    setFilter: Setter<string>;
};

/**
 * The rerion filter
 * 
 * @type {FC<FiltersProps>}
 */
const Filters: FC<FiltersProps> = ({ filter, setFilter }) => {
    const [open, setOpen] = useState(false);
    const filtersRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (!filtersRef.current?.contains(e.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    function switchOpen() {
        setOpen((prev) => !prev);
    }

    function handleFilterChange(e: ReactMouseEvent<HTMLLIElement>) {
        console.log(e.currentTarget.dataset);
        setFilter(e.currentTarget.dataset.value ?? '');
    }

    const regions = useMemo(() => Array.from(new Set(data.map((country) => country.region))), []);

    return (
        <div ref={filtersRef} className={`filters filters--${open ? 'open' : 'close'}`}>
            <div className="filters__current" onClick={switchOpen}>
                {filter === '' ? 'Filter by Region' : filter}
            </div>

            <ul className="filters__list">
                {filter !== '' && (
                    <li className="filters__list__item" data-value="" onClick={handleFilterChange}>
                        Reset
                    </li>
                )}
                {regions.map((region) => (
                    <li
                        key={region}
                        className={`filters__list__item${
                            filter === region ? ' filters__list__item--active' : ''
                        }`}
                        data-value={region}
                        onClick={handleFilterChange}
                    >
                        {region}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Filters;
