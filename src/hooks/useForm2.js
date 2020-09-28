import { useState } from 'react';

export const useForm2 = ( initialState = "" ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = ( newFormState = initialState ) => {
        setValues( newFormState );
    }


    const handleInputChange2 = (e) => {


        setValues({
            ...values,
            [ e.target.name ]: e.target.value
        });

    }
    
    return [ values, handleInputChange2, reset ];

}