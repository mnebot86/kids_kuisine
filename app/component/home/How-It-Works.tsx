import React from 'react';
import Image from 'next/image';
import { Box, Button, Container, Typography } from '@mui/material';

import mealImage from '../../../public/images/meal-img.jpg';

const HowItWorks: React.FC = () => (
	<Container
		sx={{
			padding: '20px',
		}}
	>
		<Box>
			<Typography
				variant="h4"
				sx={{
					textAlign: 'center',
					fontFamily: 'Montserrat',
					fontWeight: 'bold',
					fontSize: { xs: '20px', md: '36px', lg: '45px' },
					color: 'primary.main',
					textTransform: 'uppercase',
					paddingBottom: '20px',
				}}
			>
				How it Works ?
			</Typography>
		</Box>
		<Box
			sx={{
				display: 'flex',
				flexDirection: { xs: 'column', md: 'row' },
				alignItems: { xs: 'center', md: 'start' },
				justifyContent: 'center',
				gap: '32px',
			}}
		>
			<Box
				sx={{
					position: 'relative',
					width: { xs: '100%', md: '50%' },
					maxWidth: '400px',
					height: '250px',
				}}
			>
				<Image
					src={mealImage}
					alt="sample image"
					layout="fill"
					objectFit="cover"
				/>
			</Box>
			<Box
				sx={{
					fontFamily: 'Montserrat',
					fontSize: { xs: '14px', md: '16px', lg: '18px' },
					textAlign: 'justify',
					color: 'primary.main',
					width: { xs: '100%', md: '50%' },
				}}
			>
				<Box
					component="ol"
					sx={{
						listStyleType: 'decimal',
					}}
				>
					<li>Pick a plan</li>
					<li>Pick your meals</li>
					<li>We cook & deliver them to your child’s school</li>
				</Box>
				<Box>
					<Button
						variant="contained"
						href="/how-it-works"
						sx={{
							color: '#F8F0E6',
							backgroundColor: '#7DDCFA',
							fontSize: { xs: '14px', md: '16px', lg: '20px' },
							fontFamily: 'Montserrat',
							fontWeight: 'bold',
							textAlign: 'center',
							textTransform: 'uppercase',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						View Menu
					</Button>
				</Box>
			</Box>
		</Box>
	</Container>
);

export default HowItWorks;
