import data from '@/assets/data.json';
import { Country } from '@/types/country';
import { FC, useMemo, useState } from 'react';
import Card from './components/CountryCard/CountryCard';
import Filters from './components/Filters/Filters';
import SearchBar from './components/SearchBar/SearchBar';
import './Home.scss';

/**
 * The home page
 * 
 * @type {FC}
 */
const Home: FC = () => {
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');

    const countries = useMemo<Country[]>(
        () =>
            data.filter((country) => {
                return (
                    country.name.toLowerCase().includes(search.toLowerCase()) &&
                    (region === '' || country.region === region)
                );
            }),
        [region, search]
    );

    return (
        <main className="home">
            <div className="home__filters">
                <SearchBar search={search} setSearch={setSearch} />
                <Filters filter={region} setFilter={setRegion} />
            </div>

            <div className="home__countries">
                {countries.map((country) => (
                    <Card key={country.alpha3Code} country={country} />
                ))}
            </div>
        </main>
    );
};

export default Home;
