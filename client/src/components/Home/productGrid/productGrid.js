import React from 'react';
import Footer from '../footer';
import Header from '../Header';
import GridContent from './gridContent';

const ProductGrid = (props) => {
    return ( 
        <div>
            <Header />
            <GridContent />
            <Footer />
        </div>
     );
}
 
export default ProductGrid;