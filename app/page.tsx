import { Container } from '@mui/material';

import BestSellers from './component/home/best-sellers';
import Hero from './component/home/Hero';

interface Item {
	id: number;
	name: string;
	image: string;
	description: string;
}

const items: Item[] = [
	{
		id: 1,
		name: 'Lasagna',
		image: 'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-12-scaled.jpg',
		description: 'Cheesy lasagna',
	},
	{
		id: 2,
		name: 'Chicken Caesar Salad',
		image: 'https://heartbeetkitchen.com/foodblog/wp-content/uploads/2022/06/ultimate-grilled-chicken-caesar-salad.jpg',
		description:
			'Chicken, avocadoes, vegetables drizzled in caesar dressing',
	},

	{
		id: 3,
		name: 'Turkey sandwich',
		image: 'https://www.theoriginaldish.com/wp-content/uploads/2023/01/Smoked-Turkey-Sandwich-2-scaled.jpg',
		description: 'Turkey sandwich with cheese and vegetables',
	},
];

const HomePage = () => (
	<Container
		maxWidth={false}
		sx={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			textAlign: 'center',
			backgroundColor: 'background.paper',
		}}
	>
		<Hero />
		<BestSellers items={items} />
	</Container>
);

export default HomePage;
