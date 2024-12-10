import { Container } from '@mui/material';

import Hero from './component/home/Hero';

const HomePage = () => (
	<Container
		maxWidth="xl"
		sx={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			textAlign: 'center',
		}}
	>
		<Hero />
	</Container>
);

export default HomePage;
