import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import Modal_Delete from '../header/Modal_Delete';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },

    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function TableProduct({ update }) {
    const [products, setProducts] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [deleteProduct, setdelProduct] = useState(null);

    useEffect(() => {
        getData();
    }, [update]);

    const getData = async () => {
        const reponsive = await axios.get("https://69bcc9b32bc2a25b22ac5d1c.mockapi.io/Product");
        setProducts(reponsive.data);
    }
    const handleClickOpen = (id) => {
        setdelProduct(id);
        setOpen(true);
    }
    const xoaSP = async () => {
        await axios.delete(`https://69bcc9b32bc2a25b22ac5d1c.mockapi.io/Product/${deleteProduct}`);
        handleClose();
        getData();
    }
    // ham dong modal 
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className='p-5'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell align="right">Name</StyledTableCell>
                            <StyledTableCell align="right">Price</StyledTableCell>
                            <StyledTableCell align="center">Image</StyledTableCell>
                            <StyledTableCell align="right">CategoryID</StyledTableCell>
                            <StyledTableCell align="right">Description</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">{index + 1}</StyledTableCell>
                                <StyledTableCell align="right">{row.name}</StyledTableCell>
                                <StyledTableCell align="right">{row.price}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <img
                                        src={row.image}
                                        className='w-16 h-16 object-cover rounded shadow-sm mx-auto'
                                        alt="product"
                                    />
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.categoryID}</StyledTableCell>
                                <StyledTableCell align="right">{row.description}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2"><CiEdit /></button>
                                    <button onClick={() => handleClickOpen(row.id)} className="bg-red-600 px-3 text-white py-1 rounded"><RiDeleteBin6Fill /></button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal_Delete open={open} handleClose={handleClose} handleDeleted={xoaSP}/>
        </div>
    );
}

export default TableProduct;