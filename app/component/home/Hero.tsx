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
				backgroundColor: '#A2C428',
				width: '700px',
				borderRadius: '10px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '20px',
				gap: 2,
			}}
		>
			<Typography
				variant="h1"
				sx={{
					color: '#F8F0E6',
					fontSize: { xs: '20px', md: '36px', lg: '45px' },
					fontFamily: 'Montserrat',
					fontWeight: 'bold',
					textAlign: 'center',
					textTransform: 'uppercase',
				}}
			>
				Made for Moms for Kids
			</Typography>
			<Typography
				variant="h3"
				sx={{
					color: '#F8F0E6',
					fontSize: { xs: '14px', md: '20px', lg: '24px' },
					fontFamily: 'Montserrat',
					textAlign: 'center',
					maxWidth: '566px',
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
					fontSize: { xs: '14px', md: '20px', lg: '24px' },
					fontFamily: 'Montserrat',
					fontWeight: 'bold',
					textAlign: 'center',
					textTransform: 'uppercase',
				}}
			>
				View Menu
			</Button>
		</Box>
	</Container>
);

export default Hero;
