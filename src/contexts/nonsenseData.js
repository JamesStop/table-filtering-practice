import React, { createContext } from 'react';

const NonsenseDataContext = createContext();

function NonsenseDataContextProvider({children}) {

    

    const DEFAULT_DATA = [
        {
            id: '038499',
            state: 'CA',
            color: 'white',
            size: 'm',
            shape: 'circle',
            material: 'metal'
        },
        {
            id: '749348',
            state: 'FL',
            color: 'yellow',
            size: 's',
            shape: 'square',
            material: 'plastic'
        },
        {
            id: '039827',
            state: 'NY',
            color: 'white',
            size: 'l',
            shape: 'triangle',
            material: 'cloth'
        },
        {
            id: '123456',
            state: 'NY',
            color: 'black',
            size: 'l',
            shape: 'hexagon',
            material: 'wood'
        },
        {
            id: '204762',
            state: 'CA',
            color: 'red',
            size: 's',
            shape: 'pentagon',
            material: 'wood'
        },
        {
            id: '048391',
            state: 'CA',
            color: 'blue',
            size: 'm',
            shape: 'octagon',
            material: 'metal'
        },
        {
            id: '583042',
            state: 'FL',
            color: 'white',
            size: 'l',
            shape: 'square',
            material: 'cloth'
        },
        {
            id: '019563',
            state: 'NY',
            color: 'blue',
            size: 'm',
            shape: 'circle',
            material: 'wood'
        },
        {
            id: '928405',
            state: 'FL',
            color: 'red',
            size: 's',
            shape: 'square',
            material: 'plastic'
        },
        {
            id: '738920',
            state: 'CA',
            color: 'yellow',
            size: 's',
            shape: 'triangle',
            material: 'wood'
        },
        {
            id: '194837',
            state: 'FL',
            color: 'green',
            size: 'm',
            shape: 'octagon',
            material: 'metal'
        },
        {
            id: '503494',
            state: 'NY',
            color: 'green',
            size: 'm',
            shape: 'octagon',
            material: 'plastic'
        },
        {
            id: '103948',
            state: 'CA',
            color: 'black',
            size: 'l',
            shape: 'circle',
            material: 'cloth'
        },
        {
            id: '888474',
            state: 'NY',
            color: 'white',
            size: 'l',
            shape: 'circle',
            material: 'cloth'
        },
        {
            id: '000000',
            state: 'FL',
            color: 'red',
            size: 's',
            shape: 'triangle',
            material: 'plastic'
        },
        {
            id: '104938',
            state: 'CA',
            color: 'white',
            size: 'm',
            shape: 'hexagon',
            material: 'cloth'
        },
        {
            id: '987654',
            state: 'CA',
            color: 'blue',
            size: 's',
            shape: 'circle',
            material: 'metal'
        },
        {
            id: '757575',
            state: 'FL',
            color: 'yellow',
            size: 'l',
            shape: 'pentagon',
            material: 'metal'
        },
        {
            id: '010101',
            state: 'NY',
            color: 'white',
            size: 's',
            shape: 'circle',
            material: 'wood'
        },
        {
            id: '956623',
            state: 'NY',
            color: 'yellow',
            size: 's',
            shape: 'triangle',
            material: 'metal'
        },
        {
            id: '049384',
            state: 'NY',
            color: 'red',
            size: 'l',
            shape: 'pentagon',
            material: 'plastic'
        },
        {
            id: '838402',
            state: 'FL',
            color: 'blue',
            size: 'm',
            shape: 'square',
            material: 'plastic'
        },
        {
            id: '994810',
            state: 'CA',
            color: 'black',
            size: 's',
            shape: 'hexagon',
            material: 'cloth'
        },
        {
            id: '748372',
            state: 'FL',
            color: 'white',
            size: 's',
            shape: 'circle',
            material: 'metal'
        },
        {
            id: '205862',
            state: 'NY',
            color: 'white',
            size: 'l',
            shape: 'octagon',
            material: 'cloth'
        },
    ]

    return (
        <NonsenseDataContext.Provider value={DEFAULT_DATA}>
			{children}
		</NonsenseDataContext.Provider>
    );
}

export { NonsenseDataContext, NonsenseDataContextProvider };