import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function SearchProducts() {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://localhost:7047/api/Customers/search?query=${query}`);
            setProducts(response.data);
        } catch (error) {
            console.error('Error searching products:', error);
        }
    };

    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 8,
                }}
            >
                <Typography variant="h5">Search Products</Typography>
                <TextField
                    margin="normal"
                    fullWidth
                    label="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSearch}
                    sx={{ mt: 3, mb: 2 }}
                >
                    Search
                </Button>
                {products.map(product => (
                    <Box key={product.Prod_ID} sx={{ mt: 2 }}>
                        <Typography variant="h6">{product.Name}</Typography>
                        <Typography>{product.Description}</Typography>
                        <Typography>{product.Price}</Typography>
                    </Box>
                ))}
            </Box>
        </Container>
    );
}

export default SearchProducts;
