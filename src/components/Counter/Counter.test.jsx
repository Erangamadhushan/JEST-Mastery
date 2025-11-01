import { render, screen, fireEvent } from '@testing-library/react';

import useEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter Component', () => {
    test('renders with initial count', () => {
        render(<Counter initialCount={10} step={2} />);
        expect(screen.getByText('Count : 10')).toBeInTheDocument();
    });

    test('increments the count when increment button is clickded', async () => {
        const user = useEvent.setup();
        render(<Counter />);
        
        await user.click(screen.getByText('Increment'));
        expect(screen.getByText('Count : 1')).toBeInTheDocument();
    });

    test('decrements the count when decrement button is clicked', async () => {
        const user = useEvent.setup();
        render(<Counter initialCount={5} step={2} />);
        
        await user.click(screen.getByText('Decrement'));
        expect(screen.getByText('Count : 3')).toBeInTheDocument();
    });

    test('resets the count when reset button is clicked', async () => {
        const user = useEvent.setup();
        render(<Counter initialCount={7} step={3} />);
        
        await user.click(screen.getByText('Increment'));
        await user.click(screen.getByText('Increment'));
        expect(screen.getByText('Count : 13')).toBeInTheDocument();

        await user.click(screen.getByText('Reset'));
        expect(screen.getByText('Count : 7')).toBeInTheDocument();
    });
})