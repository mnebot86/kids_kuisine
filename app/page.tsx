import { Container } from '@mui/material';

import Hero from './component/home/Hero';
import HowItWorks from './component/home/How-It-Works';

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
		<HowItWorks />
	</Container>
);

export default HomePage;
