import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Footer() {
    return (
        <Box mt={5}>
            <Container maxWidth="lg">
                <Typography variant="body1" align="center">
                    © {new Date().getFullYear()} DataPlace
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;
