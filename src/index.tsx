import { FC, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header/Header';
import ThemeProvider from './contexts/ThemeContext';
import fetchData from './data/fetchData';
import './index.scss';
import Country from './pages/Country/Country';
import Search from './pages/Search/Search';

const Index: FC = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [currentCountry, setCurrentCountry] = useState<string | undefined>(undefined);

    useEffect(() => {
        const getData = async () => {
            const response = await fetchData();
            setCountries(response !== undefined ? response : []);
        };

        getData();
    }, []);

    return (
        <ThemeProvider>
            <Header />
            {currentCountry ? (
                <Country
                    countries={countries}
                    code={currentCountry}
                    setCurrentCountry={setCurrentCountry}
                />
            ) : (
                <Search countries={countries} setCurrentCountry={setCurrentCountry} />
            )}
        </ThemeProvider>
    );
};

createRoot(document.querySelector('#root') as HTMLDivElement).render(<Index />);
