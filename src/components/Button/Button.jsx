import './Button.module.css';

export default function Button({ onClick, children, variant='primary', disabled=false}) {
    return (
        <button 
            onClick={onClick}
            className={`btn btn-${variant}`}
            disabled={disabled}
            data-testid="custom-button"
        >
            {children}
        </button>
    )
}