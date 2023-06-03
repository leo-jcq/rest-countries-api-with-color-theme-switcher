import { FC } from 'react';
import CountryCard from '../../../../components/CountryCard/CountryCard';
import './Results.scss';

interface ResultsProps {
    countries: Country[];
    setCurrentCountry: (currentCountry: string | undefined) => void;
}

const Results: FC<ResultsProps> = ({ countries, setCurrentCountry }) => {
    return (
        <div className="results">
            {countries.map((c) => (
                <CountryCard key={c.alpha3Code} country={c} setCurrentCountry={setCurrentCountry} />
            ))}
        </div>
    );
};

export default Results;
