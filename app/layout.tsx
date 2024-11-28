'use client';

import { Provider } from 'react-redux';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { COLORS } from '@/constants/colors';
import { store } from '@/store';

import './globals.css';

import Nav from '../components/nav';

const queryClient = new QueryClient();

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	const theme = createTheme({
		palette: {
			primary: {
				main: COLORS.limeGreen,
			},
			secondary: {
				main: COLORS.lightBlue,
			},
			background: {
				default: COLORS.beigeBackground,
				paper: COLORS.lightGreen,
			},
			text: {
				primary: COLORS.darkGreen,
				secondary: COLORS.white,
			},
			action: {
				hover: COLORS.lightGreen,
				selected: COLORS.limeGreen,
			},
		},
		typography: {
			fontFamily: 'Montserrat, Arial, sans-serif',
			h6: {
				fontWeight: 700,
				fontSize: '1.25rem',
				letterSpacing: '.3rem',
			},
			button: {
				fontWeight: 600,
				textTransform: 'uppercase',
			},
			body1: {
				fontSize: '1rem',
			},
			body2: {
				fontSize: '0.875rem',
			},
		},
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						borderRadius: 8,
						fontWeight: 600,
					},
					containedPrimary: {
						color: COLORS.white,
						backgroundColor: COLORS.limeGreen,
						'&:hover': {
							backgroundColor: COLORS.hoverGreen,
						},
					},
					containedSecondary: {
						color: COLORS.white,
						backgroundColor: COLORS.lightBlue,
						'&:hover': {
							backgroundColor: COLORS.hoverBlue,
						},
					},
				},
			},
			MuiAppBar: {
				styleOverrides: {
					root: {
						backgroundColor: COLORS.lightGreen,
					},
				},
			},
			MuiLink: {
				styleOverrides: {
					root: {
						color: COLORS.darkGreen,
						textDecoration: 'none',
						'&:hover': {
							textDecoration: 'underline',
						},
					},
				},
			},
		},
	});

	return (
		<html lang="en">
			<body>
				<Provider store={store}>
					<QueryClientProvider client={queryClient}>
						<ThemeProvider theme={theme}>
							<CssBaseline />
							<Nav />
							{children}
						</ThemeProvider>
					</QueryClientProvider>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
