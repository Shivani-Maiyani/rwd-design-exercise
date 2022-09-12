import React from 'react';
import Header from '../../../shared/header/components/Header';
import Register from '../../property/components/formWrapper';
import PropertyCard from '../../property/components/PropertyCard';

const HomePage = () => {
    return (
        <div>
            <Header />
            <PropertyCard />
            <Register />
        </div>
    )
};

export default HomePage;
