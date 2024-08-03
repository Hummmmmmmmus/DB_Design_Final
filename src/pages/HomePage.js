// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ProductCard from '../components/ProductCard';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import Box from '@mui/material/Box';

function HomePage() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://localhost:7047/api/Products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const clearSearch = () => {
        setSearchTerm('');
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            <Box mb={2}>
                <Typography variant="h3" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#3f51b5' }}>
                    Product Catalog
                </Typography>
                <Box display="flex" justifyContent="flex-start" mb={3}>
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        style={{ width: '300px' }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={clearSearch}>
                                        <ClearIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </Box>
            <Grid container spacing={4}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <Grid item key={product.prod_ID} xs={12} sm={6} md={4}>
                            <ProductCard product={product} />
                        </Grid>
                    ))
                ) : (
                    <Box display="flex" justifyContent="center" alignItems="center" height="50vh" width="100%">
                        <Typography variant="h4" align="center" color="textSecondary" gutterBottom>
                            No products found.
                        </Typography>
                    </Box>
                )}
            </Grid>
        </Container>
    );
}

export default HomePage;
