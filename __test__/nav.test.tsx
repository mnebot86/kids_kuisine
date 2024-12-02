import { render, screen } from '@testing-library/react';
import { expect, test, describe } from 'vitest';
import Nav from '@/components/nav';

describe('Nav', () => {
	test('Does the nav render?', () => {
		render(<Nav />);
		expect(screen.getByTestId('navigation', {})).toBeInTheDocument();
	});

	test('Does the nav show logo Kid Kuisine?', () => {
		render(<Nav />);
		expect(screen.getByText('KIDS KUISINE')).toBeInTheDocument();
	});

	test('Does the nav show Menu link', () => {
		render(<Nav />);

		const menuLinks = screen.getAllByTestId('link-Menu'); // Array of elements
		const menuLink = menuLinks[0]; // Get the first one

		expect(menuLink).toBeInTheDocument();
		expect(menuLink).toHaveTextContent('Menu');
	});

	test('Does the nav show How Do it Work link', () => {
		render(<Nav />);

		const menuLinks = screen.getAllByTestId('link-How it Works');
		const menuLink = menuLinks[0];

		expect(menuLink).toBeInTheDocument();
		expect(menuLink).toHaveTextContent('How it Works');
	});

	test('Does the nav show About Us link', () => {
		render(<Nav />);

		const menuLinks = screen.getAllByTestId('link-About Us');
		const menuLink = menuLinks[0];

		expect(menuLink).toBeInTheDocument();
		expect(menuLink).toHaveTextContent('About Us');
	});
});
