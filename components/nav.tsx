import React from 'react';
import Link from 'next/link';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import {
	AppBar,
	Avatar,
	Box,
	Button,
	Container,
	IconButton,
	Link as MUILink,
	Menu,
	MenuItem,
	Toolbar,
	Tooltip,
} from '@mui/material';

const pages = [
	{ name: 'Menu', href: '/menu' },
	{ name: 'How it Works', href: '/how-it-works' },
	{ name: 'About Us', href: '/about-us' },
];

const settings = [
	{ name: 'Profile', href: '/profile' },
	{ name: 'Account', href: '/account' },
	{ name: 'Dashboard', href: '/dashboard' },
	{ name: 'Logout', href: '/logout' },
];

const Nav: React.FC = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null,
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null,
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar data-testid="navigation" position="static">
			<Container maxWidth="xl">
				<Toolbar>
					<AdbIcon
						sx={{ display: { xs: 'none', md: 'none' }, mr: 1 }}
					/>
					<MUILink
						component={Link}
						href="/"
						variant="h6"
						noWrap
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'Montserrat',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: '#A2C428',
							textDecoration: 'none',
						}}
					>
						KIDS KUISINE
					</MUILink>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'flex', md: 'none' },
						}}
					>
						<IconButton size="large" onClick={handleOpenNavMenu}>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{ display: { xs: 'block', md: 'none' } }}
						>
							{pages.map((page) => (
								<MenuItem
									key={page.name}
									onClick={handleCloseNavMenu}
									data-testid={`link-${page.name}`}
								>
									<MUILink
										component={Link}
										href={page.href}
										sx={{
											textDecoration: 'none',
											color: '#A2C428',
										}}
									>
										{page.name}
									</MUILink>
								</MenuItem>
							))}
						</Menu>
					</Box>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
						}}
					>
						{pages.map((page) => (
							<Button
								key={page.name}
								component={Link}
								href={page.href}
								data-testid={`link-${page.name}`}
								sx={{
									my: 2,
									display: 'block',
									fontFamily: 'Montserrat',
									fontWeight: 400,
								}}
							>
								{page.name}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ p: 0 }}
							>
								<Avatar alt="User Avatar">C</Avatar>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem
									key={setting.name}
									onClick={handleCloseUserMenu}
									sx={{
										color: '#A2C428',
										'&:hover': {
											backgroundColor: '#DFF0D8',
										},
									}}
								>
									<MUILink
										component={Link}
										href={setting.href}
										sx={{
											textDecoration: 'none',
											color: '#A2C428',
										}}
									>
										{setting.name}
									</MUILink>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Nav;

//Test
