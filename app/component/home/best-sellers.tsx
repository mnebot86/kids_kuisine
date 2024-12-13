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
	<Container
		maxWidth="xl"
		sx={{
			paddingBottom: '30px',
		}}
	>
		<Typography
			variant="h3"
			align="center"
			gutterBottom
			sx={{
				color: '#A2C428',
				fontFamily: 'Montserrat',
				fontSize: '35px',
				textTransform: 'uppercase',
				fontWeight: 'bold',
				padding: '20px',
			}}
		>
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
						/>
						<CardContent
							sx={{
								backgroundColor: '#FFFDFD',
							}}
						>
							<Typography
								variant="h6"
								gutterBottom
								sx={{
									color: '#A2C428',
									fontFamily: 'Montserrat',
									fontSize: '12px',
									fontStyle: 'bold',
								}}
							>
								{item.name}
							</Typography>
							<Typography
								variant="body2"
								sx={{
									color: '#A2C428',
									fontFamily: 'Montserrat',
									fontSize: '12px',
									fontStyle: 'bold',
									paddingBottom: '10px',
								}}
							>
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
