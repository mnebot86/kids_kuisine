import { render, screen } from '@testing-library/react';
import { expect, test, describe } from 'vitest'; 
import Nav from '@/components/nav';

describe('Nav', () => {
    test('Does the nav render?', () => {
        render(<Nav />);
        expect(
            screen.getByRole('banner', {}),
        ).toBeInTheDocument();
    });
});