import { useState } from 'react';


export const useForm3 = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = ( newFormState = initialState ) => {
        setValues( newFormState );
    }


    const handleInputChange3 = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }
    
    return [ values, handleInputChange3, reset ];

}