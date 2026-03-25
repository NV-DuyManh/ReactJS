import React, { useState } from 'react';
import Search from '../header/Search';
import TableProduct from './TableProduct';
import ModalProduct from './ModalProduct';
import axios from 'axios';


const inner = { name: "", price: "", image: "", categoryID: "", description: "" };

function Products(props) {
    const [product, setProduct] = useState(inner);
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(inner);
    const [update, setUpdate] = useState(false);

    const handleOpen = () => {
        setOpen(true);
        setProduct(inner);
    };

    const handleClose = () => setOpen(false);

    const onchangInput = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const validation = () => {
        const newError = {};
        newError.name = product.name ? "" : "Please enter your name";
        newError.price = product.price ? "" : "Please enter your price";
        newError.image = product.image ? "" : "Please enter your image URL";
        newError.categoryID = product.categoryID ? "" : "Please enter your Category ID";
        newError.description = product.description ? "" : "Please enter your description";
        setError(newError);
        return Object.values(newError).some(e => e !== ""); // true co loi
    }

    const addProduct = async () => {
        if (validation()) {
            return;
        }
        await axios.post("https://69bcc9b32bc2a25b22ac5d1c.mockapi.io/Product", product);
        handleClose();
        setUpdate(!update);
    }

    return (
        <div>
            <Search handleOpen={handleOpen} type={"PRODUCTS"} name={"PRODUCT"}/>
            <TableProduct update={update} />
            <ModalProduct 
                error={error} 
                addProduct={addProduct} 
                onchangInput={onchangInput} 
                product={product} 
                open={open} 
                handleClose={handleClose} 
            />
        </div>
    );
}

export default Products;