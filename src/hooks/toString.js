import React, {useState} from 'react';
import { useEffect } from 'react';

const useToString = (object) => {
    
    const [string, setString] = useState('')
    
    useEffect(() => {
        setString(JSON.stringify(object))
    }, [object])

    return (
        string
    );
}

export default useToString;