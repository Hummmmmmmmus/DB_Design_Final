import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddStock() {
    const [productId, setProductId] = useState('');
    const [warehouseId, setWarehouseId] = useState('');
    const [quantity, setQuantity] = useState('');
    const navigate = useNavigate();

    const handleAddStock = async () => {
        try {
            const response = await axios.post('https://localhost:7047/api/Employees/stock', {
                prod_ID: parseInt(productId, 10),
                ware_ID: parseInt(warehouseId, 10),
                count: parseInt(quantity, 10)
            });

            console.log('Stock added:', response.data);
            setProductId('');
            setWarehouseId('');
            setQuantity('');
            navigate('/staff');
        } catch (error) {
            console.error('Error adding stock:', error.response.data);
            alert('Error adding stock: ' + JSON.stringify(error.response.data));
        }
    };

    const handleCancel = () => {
        navigate('/staff');
    };

    return (
        <Container>
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>
                    Add Stock
                </Typography>
                <Box component="form" mt={3}>
                    <TextField
                        label="Product ID"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                    />
                    <TextField
                        label="Warehouse ID"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={warehouseId}
                        onChange={(e) => setWarehouseId(e.target.value)}
                    />
                    <TextField
                        label="Quantity"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleAddStock}
                        style={{ marginTop: '20px' }}
                    >
                        Add Stock
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={handleCancel}
                        style={{ marginTop: '10px' }}
                    >
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default AddStock;
