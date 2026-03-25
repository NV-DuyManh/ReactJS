import React from 'react';
import { Box, Button, DialogActions, Modal, TextField, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    maxHeight: '90vh', 
    overflowY: 'auto'
};

function ModalProduct({ open, handleClose, product, onchangInput, addProduct, error }) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        ADD PRODUCT
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} component={'div'}>
                        <TextField
                            label="Name"
                            fullWidth
                            name='name'
                            value={product.name}
                            onChange={onchangInput}
                            error={!!error.name}
                            helperText={error.name}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            label="Price"
                            fullWidth
                            name='price'
                            type="number"
                            value={product.price}
                            onChange={onchangInput}
                            error={!!error.price}
                            helperText={error.price}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            label="Image URL"
                            fullWidth
                            name='image'
                            value={product.image}
                            onChange={onchangInput}
                            error={!!error.image}
                            helperText={error.image}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            label="Category ID"
                            fullWidth
                            name='categoryID'
                            value={product.categoryID}
                            onChange={onchangInput}
                            error={!!error.categoryID}
                            helperText={error.categoryID}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            label="Description"
                            fullWidth
                            multiline
                            rows={2}
                            name="description"
                            sx={{ mt: 2 }}
                            value={product.description}
                            onChange={onchangInput}
                            error={!!error.description}
                            helperText={error.description}
                        />
                        <DialogActions>
                            <Button onClick={addProduct} variant="contained" sx={{ mt: 2 }}>Add Product</Button>
                        </DialogActions>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalProduct;