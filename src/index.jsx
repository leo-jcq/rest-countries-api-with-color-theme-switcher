import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ThemeProvider from './contexts/ThemeContext';

const App = () => {
    const theme = {
        light: {
            elements: '#ffffff',
            bg: '#f9f9f9',
            text: '#111517',
            input: '#848484'
        },
        dark: {
            elements: '#2b3845',
            bg: '#202c36',
            text: '#ffffff',
            input: '#ffffff'
        }
    };

    return (
        <ThemeProvider>
            <Header />
            <Main />
        </ThemeProvider>
    );
};

createRoot(document.querySelector('#root')).render(<App />);
