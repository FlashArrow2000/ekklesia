import { useState } from 'react';


export const useForm5 = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = ( newFormState = initialState ) => {
        setValues( newFormState );
    }


    const handleInputChange5 = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }
    
    return [ values, handleInputChange5, reset ];

}