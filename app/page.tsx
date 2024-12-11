import { Container } from '@mui/material';

import Hero from './component/home/Hero';
import BestSellers from './component/home/best-sellers';

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
		image: '',
		description: 'cheesy lasagna',
	},
	{
		id: 2,
		name: 'Pepperoni Pizza',
		image: '',
		description: 'cheesy pepperoni pizza',
	},

	{
		id: 3,
		name: 'turkey sandwich',
		image: '',
		description: 'turkey sandwich with cheese and vegetables',
	},
];

const HomePage = () => (
	<Container
		maxWidth={false}
		sx={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			textAlign: 'center',
		}}
	>
		<Hero />
		<BestSellers items={items} />
	</Container>
);

export default HomePage;
