import data from '@/assets/data.json';
import { Country as CountryType } from '@/types/country';
import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import './Country.scss';

const Country: FC = () => {
    const { code } = useParams();

    const country = useMemo<CountryType | undefined>(() => {
        return data.find((country) => country.alpha3Code === code);
    }, [code]);

    return <main className="country-page">{country ? country.name : 'country not found'}</main>;
};

export default Country;
