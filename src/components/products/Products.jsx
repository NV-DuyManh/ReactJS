import React from 'react';
import Search from '../header/Search';
import TableProduct from './TableProduct';
import ModalProduct from './ModalProduct';

function Products(props) {
    return (
        <div>
            <Search />
            <TableProduct />
            <ModalProduct />
        </div>

    );
}

export default Products;