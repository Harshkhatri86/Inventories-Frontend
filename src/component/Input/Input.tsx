import React from 'react';
import './Input.css'

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error: string;
    autoFocus?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    name: string ; 
}


const Input = ({ name ,type, placeholder, value, onChange, error, autoFocus, startIcon, endIcon }: InputProps) => {

    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (autoFocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [autoFocus]);

    return <div  className="w-full" data-testid ="Input-test-id">
        <div >
            {startIcon && <div className="icon start-icon">{startIcon}</div>}
            <label htmlFor="">{placeholder} <span>*</span></label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={{ borderColor: error ? 'red' : ''}}
                ref={inputRef}
                className='w-full h-12 p-3 InputBox'
            />
            {endIcon && <div className="icon end-icon">{endIcon}</div>}
            {error && <span className="ErrorClass">{error}</span>}
        </div>
    </div>
}

export default Input; 