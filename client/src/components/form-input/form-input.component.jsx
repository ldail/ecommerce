import React from 'react';
import { FormInputLabel, Group, FormInputContainer } from './form-input.styles';

const FormInput = ({handleChange, label, ...otherProps}) => {
    return (
        <Group>
            <FormInputContainer onChange={handleChange} {...otherProps} />
            { label ? 
                (<FormInputLabel {...otherProps}>{label}
                </FormInputLabel>)
                : null
            }
        </Group>
    );
};

export default FormInput;