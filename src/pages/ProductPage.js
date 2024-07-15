import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const product = {
    id: 1,
    name: 'Product 1',
    price: '$10',
    description: 'This is Product 1',
    details: 'Detailed description of Product 1'
};

function ProductPage() {
    const { id } = useParams();

    // Fetch product details using the id from backend once available

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                {product.name}
            </Typography>
            <Typography variant="h5" color="text.primary" gutterBottom>
                {product.price}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {product.details}
            </Typography>
            <Button variant="contained" color="primary">
                Add to Cart
            </Button>
        </Container>
    );
}

export default ProductPage;
