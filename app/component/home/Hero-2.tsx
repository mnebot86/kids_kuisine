import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const HeroTwo: React.FC = () => (
	<Container
		maxWidth="xl"
		sx={{
			backgroundImage:
				'url(https://img.freepik.com/premium-photo/italian-food-background-with-spaghetti-spices-sauce-view_1220-7077.jpg)',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			height: { xs: '25vh', md: '50vh', lg: '75vh' },
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			paddingTop: '30px',
		}}
	>
		<Box
			sx={{
				textAlign: 'center',
				backgroundColor: 'primary.main',
				width: '700px',
				borderRadius: '10px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '40px',
				gap: 2,
			}}
		>
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
				Tree nut allergy friendly.
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
				No preservatives.
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
				No artificial flavors.
			</Typography>
		</Box>
	</Container>
);

export default HeroTwo;
