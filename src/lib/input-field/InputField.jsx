import React from "react";
import PropTypes from 'prop-types';
import * as Styled from './InputField.styles';

const InputField = ({
    id,
    type,
    label,
    name,
    value,
    onChange,
    ...props
}) => (
    <Styled.InputWrapper>
        {label && <Styled.Label htmlFor={id}>{label}</Styled.Label>}
        <Styled.InputField
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            name={name}
            {...props}
        />
    </Styled.InputWrapper>
);

InputField.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

InputField.defaultProps = {
    value: '',
    label: null,
    onChange: null,
};

export default InputField;
