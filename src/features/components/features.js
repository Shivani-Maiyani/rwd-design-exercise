import React from 'react';
import Header from '../../shared/header/components/Header';
import Register from '../form/components/form1';
import PropertyCard from '../property/components/PropertyCard';

const Features = () => {
    return (
        <div>
            <Header />
            <PropertyCard />
            <Register />
        </div>
    )
}

export default Features;
