import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
    test('renders with correct text', () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    test('calls onClick handler when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);

        fireEvent.click(screen.getByText('Click Me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('applies correct variant class', () => {
        render(<Button variant="secondary">Click Me</Button>);
        const button = screen.getByTestId('custom-button');
        expect(button).toHaveClass('btn-secondary');
    });

    test('Is disabled when disabled prop is true', () => {
        render(<Button disabled={true}>Disabled</Button>);
        expect(screen.getByText('Disabled')).toBeDisabled();
    });

    test('Is enabled when disabled prop is false', () => {
        render(<Button disabled={false}>Enabled</Button>);
        expect(screen.getByText('Enabled')).toBeEnabled();
    });

    test('does not call onClick when disabled', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick} disabled>Disabled</Button>);

        fireEvent.click(screen.getByText('Disabled'));
        expect(handleClick).not.toHaveBeenCalled();
    });
})