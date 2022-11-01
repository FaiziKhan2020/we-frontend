import React from 'react';
import Link from 'next/link';
// import Rating from '~/components/elements/Rating';

const ModuleDetailTopInformation = ({ product }) => {
    // Views
    let priceView;

    return (
        <header>
            <h1>{product.title}</h1>
          
            {priceView}
        </header>
    );
};

export default ModuleDetailTopInformation;
