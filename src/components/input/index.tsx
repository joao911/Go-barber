import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';
import { useField } from '@unform/core';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {

    const [isFocusused, setIsFocusUsed] = useState(false);
    const [isFilled, setIsFilled] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, defaultValue, error, registerField } = useField(name);

    const handleInputFocus = useCallback(() => {
        setIsFocusUsed(true);
    }, [])

    const handleInputBlur = useCallback(() => {
        setIsFocusUsed(false);

        if (inputRef.current?.value) {
            setIsFilled(false);
            setIsFilled(!!inputRef.current?.value);
        }
    }, [])
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])
    return (

        <Container isFilled={isFilled} isFocusused={isFocusused}>
            {Icon && <Icon size={20} />}
            <input
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                defaultValue={defaultValue}
                ref={inputRef}
                {...rest}
                type="text"
            />
            {error}
        </Container>
    );
}

export default Input;