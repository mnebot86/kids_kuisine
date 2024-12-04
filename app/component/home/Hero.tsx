import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

const Hero: React.FC = () => (
	<Container
		maxWidth="xl"
		sx={{
			backgroundImage:
				'url(https://cdn.create.vista.com/api/media/small/5755752/stock-photo-healthy-eating)',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			height: { xs: '25vh', md: '50vh', lg: '75vh' },
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}}
	>
		<Box
			sx={{
				textAlign: 'center',
				margin: '0 auto',
				backgroundColor: 'A2C428',
			}}
		>
			<Typography
				variant="h1"
				sx={{
					color: '#F8F0E6',
					fontSize: { xs: '20px', md: '36px', lg: '60px' },
					fontFamily: 'Montserrat',
					fontWeight: 'bold',
					textAlign: 'center',
					marginBottom: '16px',
					textTransform: 'uppercase',
				}}
			>
				Made for Moms for Kids
			</Typography>
			<Typography
				variant="h3"
				sx={{
					color: '#F8F0E6',
					fontSize: { xs: '14px', md: '20px', lg: '30px' },
					fontFamily: 'Montserrat',
					fontWeight: 'bold',
					textAlign: 'center',
					marginBottom: '16px',
				}}
			>
				Ending child hunger and promoting better nutrition can create a
				lasting impact on communities and future generations.
			</Typography>
			<Button
				variant="contained"
				href="/menu"
				sx={{
					color: '#F8F0E6',
					backgroundColor: '#7DDCFA',
					fontSize: { xs: '14px', md: '20px', lg: '30px' },
					fontFamily: 'Montserrat',
					fontWeight: 'bold',
					textAlign: 'center',
					marginBottom: '16px',
				}}
			>
				VIEW MENU
			</Button>
		</Box>
	</Container>
);

export default Hero;
