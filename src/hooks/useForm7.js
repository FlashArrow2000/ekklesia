import { useState } from 'react';


export const useForm7 = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = ( newFormState = initialState ) => {
        setValues( newFormState );
    }


    const handleInputChange7 = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }
    
    return [ values, handleInputChange7, reset ];

}