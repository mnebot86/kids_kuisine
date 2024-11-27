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
	Menu,
	MenuItem,
	Toolbar,
	Tooltip,
	Typography,
} from '@mui/material';

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

	return (
		<AppBar position="static" sx={{ backgroundColor: '#DFF0D8' }}>
			<Container maxWidth="xl">
				<Toolbar>
					<AdbIcon
						sx={{ display: { xs: 'none', md: 'none' }, mr: 1 }}
					/>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="#"
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
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'flex', md: 'none' },
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							sx={{ color: '#A2C428' }}
						>
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
									sx={{
										color: '#A2C428',
										'&:hover': {
											backgroundColor: '#DFF0D8',
										},
									}}
								>
									<Typography sx={{ textAlign: 'center' }}>
										<Link href={page.href}>{page.name}</Link>
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<AdbIcon
						sx={{ display: { xs: 'none', md: 'none' }, mr: 1 }}
					/>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'Montserrat',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: '#A2C428',
							textDecoration: 'none',
						}}
					>
						KIDS KUISINE
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
						}}
					>
						{pages.map((page) => (
							<Button
								key={page.name}
								onClick={handleCloseNavMenu}
								sx={{
									my: 2,
									color: '#A2C428',
									display: 'block',
									fontFamily: 'Montserrat',
									fontWeight: 400,
								}}
							>
								<Link href={page.href}>{page.name}</Link>
							</Button>
						))}
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ p: 0 }}
							>
								<Avatar alt="Remy Sharp" src="filename" />
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
									<Typography component="span" sx={{ textAlign: 'center' }}>
                                        <Link href={setting.href}>{setting.name}</Link>
									</Typography>
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
