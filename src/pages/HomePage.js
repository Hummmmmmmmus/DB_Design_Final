import React, { useState } from 'react';
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

const products = [
    { id: 1, name: 'Product 1', price: '$10', description: 'This is Product 1' },
    { id: 2, name: 'Product 2', price: '$20', description: 'This is Product 2' },
    { id: 3, name: 'Product 3', price: '$30', description: 'This is Product 3' },
];

function HomePage() {
    const [searchTerm, setSearchTerm] = useState('');

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
                        <Grid item key={product.id} xs={12} sm={6} md={4}>
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
