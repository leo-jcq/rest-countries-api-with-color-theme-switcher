import { FC, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Header from './layout/Header/Header';
import Country from './pages/Country/Country';
import Home from './pages/Home/Home';

const App: FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/country/:code" element={<Country />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
};

export default App;
