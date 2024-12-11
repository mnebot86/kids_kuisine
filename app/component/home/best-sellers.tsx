import React from 'react';
import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Container,
	Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

interface BestSellersProps {
	items: Item[];
}

interface Item {
	id: number;
	name: string;
	image: string;
	description: string;
}

const BestSellers: React.FC<BestSellersProps> = ({ items }) => (
	<Container>
		<Typography variant="h3" align="center" gutterBottom>
			Best Sellers
		</Typography>
		<Grid container spacing={4}>
			{items.map((item) => (
				<Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
					<Card>
						<CardMedia
							component="img"
							height="200"
							image={item.image}
							alt={item.name}
						/>
						<CardContent>
							<Typography variant="h6" gutterBottom>
								{item.name}
							</Typography>
							<Typography variant="body2">
								{item.description}
							</Typography>
							<Button variant="contained" fullWidth>
								Add to Cart
							</Button>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	</Container>
);

export default BestSellers;
