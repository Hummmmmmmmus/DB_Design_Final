import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { CartContext } from '../CartContext';

function ProductCard({ product }) {
    const { addToCart, snackbarOpen, handleSnackbarClose } = useContext(CartContext);

    return (
        <>
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://via.placeholder.com/140"
                    alt={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                        {product.price}
                    </Typography>
                    <Button variant="contained" color="primary" onClick={() => addToCart(product)}>
                        Add to Cart
                    </Button>
                </CardContent>
            </Card>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message="Item added to cart"
            />
        </>
    );
}

export default ProductCard;
