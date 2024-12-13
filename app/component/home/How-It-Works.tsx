import React from 'react';
import { Box, Container, Typography } from '@mui/material';
// import Image from '';

const HowItWorks: React.FC = () => (
	<Container>
		<Box>
			<Typography
				variant="h4"
				sx={{
					textAlign: 'center',
					fontFamily: 'Montserrat',
					fontWeight: 'bold',
					color: 'primary.main',
					textTransform: 'uppercase',
					padding: '20px',
				}}
			>
				How it Works ?
			</Typography>
		</Box>
		<Box
			sx={{
				display: 'flex',
				flexDirection: { xs: 'column', md: 'row' },
				alignItems: 'center',
				justifyCenter: 'center',
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
				{/* <Image /> */}
			</Box>
			<Box
				sx={{
					fontFamily: 'Montserrat',
					textAlign: 'justify',
					color: 'primary.main',
					width: { xs: '100%', md: '50%' },
				}}
			>
				<ol>
					<li>Pick a plan </li>
					<li>Pick your meals </li>
					<li>We cook & deliver them to your child’s school. </li>
				</ol>
			</Box>
		</Box>
	</Container>
);

export default HowItWorks;
