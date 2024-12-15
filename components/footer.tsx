import React from 'react';
import Link from 'next/link';
import { Instagram } from '@mui/icons-material';
import { Box, Container, IconButton, Typography } from '@mui/material';

const Footer: React.FC = () => (
	<Box
		component="footer"
		sx={{
			backgroundColor: 'primary.main',
			color: 'white',
			py: 3,
			mt: 'auto',
			textAlign: 'center',
		}}
	>
		<Container>
			<Typography variant="body2">
				© {new Date().getFullYear()} Kids Kuisine. All rights reserved.
			</Typography>

			<Box sx={{ mt: 2 }}>
				<IconButton
					href="https://www.instagram.com"
					target="_blank"
					rel="noopener noreferrer"
					color="inherit"
					aria-label="Instagram"
					sx={{ mx: 1 }}
				>
					<Instagram />
				</IconButton>
			</Box>

			<Box sx={{ mt: 2 }}>
				<Link href="/about-us" color="inherit">
					About Us
				</Link>
				<Link href="/contact" color="inherit">
					Contact
				</Link>
			</Box>
		</Container>
	</Box>
);

export default Footer;
