import { useState } from 'react';


export const useForm6 = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = ( newFormState = initialState ) => {
        setValues( newFormState );
    }


    const handleInputChange6 = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }
    
    return [ values, handleInputChange6, reset ];

}